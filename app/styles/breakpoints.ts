export enum Breakpoint {
  Default = 'default',
  SmallDesktop = 'smallDesktop',
  Mobile = 'mobile',
}

/**
 * All the breakpoints that we use in the application, mostly used by our grid layout system.
 */
export const breakpoints: Record<Breakpoint, number> = {
  // NOTE(marko): We're not really using this breakpoint explicitly in CSS, but we still define it
  // here to satisfy the type safety (and we use its name when converting Container/Column shorthand
  // syntax to breakpoint values)
  default: 9999,
  smallDesktop: 1280,
  mobile: 640,
}
