import CryptoJS from "crypto-js";

const CSHARP_HEADER = new Uint8Array([0, 1, 0, 0, 0, 255, 255, 255, 255, 1, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0]);
const AES_KEY_STRING = "UKu52ePUBwetZ9wNX88o54dnfKRu0T1l";

function removeHeader(bytes: Uint8Array): Uint8Array {
  const bytesWithoutHeader = bytes.subarray(CSHARP_HEADER.length, bytes.length - 1);

  let counter = 0;
  for (let i = 0; i < 5; i++) {
    counter++;
    if ((bytesWithoutHeader[i] & 0x80) === 0) break;
  }
  return bytesWithoutHeader.subarray(counter);
}

function addHeader(base64Bytes: Uint8Array): Uint8Array {
  const lenBytes: number[] = [];
  let length = Math.min(0x7fffffff, base64Bytes.length);
  for (let i = 0; i < 4; i++) {
    if (length >> 7 !== 0) {
      lenBytes.push((length & 0x7f) | 0x80);
      length >>= 7;
    } else {
      lenBytes.push(length & 0x7f);
      break;
    }
  }

  const newBytes = new Uint8Array(CSHARP_HEADER.length + lenBytes.length + base64Bytes.length + 1);
  newBytes.set(CSHARP_HEADER);
  newBytes.set(lenBytes, CSHARP_HEADER.length);
  newBytes.set(base64Bytes, CSHARP_HEADER.length + lenBytes.length);
  newBytes[newBytes.length - 1] = 0x0b;
  return newBytes;
}

export function decodeData(fileBytes: Uint8Array): string {
  const bytesWithoutHeader = removeHeader(fileBytes);

  let base64String = "";
  const CHUNK_SIZE = 65536;
  for (let i = 0; i < bytesWithoutHeader.length; i += CHUNK_SIZE) {
    base64String += String.fromCharCode(...bytesWithoutHeader.slice(i, i + CHUNK_SIZE));
  }

  const encryptedWords = CryptoJS.enc.Base64.parse(base64String);
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: encryptedWords,
  });

  const key = CryptoJS.enc.Utf8.parse(AES_KEY_STRING);
  const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return CryptoJS.enc.Utf8.stringify(decrypted);
}

export function encodeData(jsonString: string): Uint8Array {
  const key = CryptoJS.enc.Utf8.parse(AES_KEY_STRING);
  const jsonWords = CryptoJS.enc.Utf8.parse(jsonString);

  const encrypted = CryptoJS.AES.encrypt(jsonWords, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const base64String = encrypted.ciphertext.toString(CryptoJS.enc.Base64);

  const base64Bytes = new Uint8Array(base64String.length);
  for (let i = 0; i < base64String.length; i++) {
    base64Bytes[i] = base64String.charCodeAt(i);
  }

  return addHeader(base64Bytes);
}
