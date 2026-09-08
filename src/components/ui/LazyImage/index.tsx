import { getAssetUrl } from "@/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className }: LazyImageProps) {
  const imageUrl = getAssetUrl(src);
  return imageUrl ? <img src={imageUrl} alt={alt} className={className} loading="lazy" decoding="async" /> : null;
}
