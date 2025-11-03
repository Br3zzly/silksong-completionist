export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const getResponsiveClasses = (mobile: string = "", tablet: string = "", desktop: string = "") => {
  return [mobile && `${mobile}`, tablet && `md:${tablet}`, desktop && `lg:${desktop}`].filter(Boolean).join(" ");
};

export const hideOnMobile = "hidden md:block";
export const showOnMobile = "block md:hidden";
export const hideOnDesktop = "block lg:hidden";
export const showOnDesktop = "hidden lg:block";
