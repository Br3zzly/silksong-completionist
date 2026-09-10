export function getHoverBlurClassNames({
  shouldBlur,
  onGroupHover = true,
}: {
  shouldBlur: boolean;
  onGroupHover?: boolean;
}): string {
  return shouldBlur ? (onGroupHover ? "spoiler" : "spoiler-self") : "";
}
