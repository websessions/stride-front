import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const cssVar = (variable: string) => `var(--${variable})`;


export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      inherit: 'inherit',
      brand: {
        50: cssVar('brand-50'),
        300: cssVar('brand-300'),
        500: cssVar('brand-500'),
      },
      primary: {
        50: cssVar('primary-50'),
        // 100: cssVar('primary-100'),
        // 200: cssVar('primary-200'),
        300: cssVar('primary-300'),
        // 400: cssVar('primary-400'),
        500: cssVar('primary-500'),
        600: cssVar('primary-600'),
        700: cssVar('primary-700'),
        800: cssVar('primary-800'),
        900: cssVar('primary-900'),
      },
      secondary: {
        // 50: cssVar('secondary-50'),
        // 100: cssVar('secondary-100'),
        // 200: cssVar('secondary-200'),
        // 300: cssVar('secondary-300'),
        // 400: cssVar('secondary-400'),
        500: cssVar('secondary-500'),
        600: cssVar('secondary-600'),
        // 700: cssVar('secondary-700'),
        // 800: cssVar('secondary-800'),
        // 900: cssVar('secondary-900'),
      },
      success: {
        50: cssVar('success-50'),
        100: cssVar('success-100'),
        // 200: cssVar('success-200'),
        300: cssVar('success-300'),
        400: cssVar('success-400'),
        500: cssVar('success-500'),
        // 600: cssVar('success-600'),
        // 700: cssVar('success-700'),
        // 800: cssVar('success-800'),
        // 900: cssVar('success-900'),
      },
      warning: {
        50: cssVar('warning-50'),
        // 100: cssVar('warning-100'),
        // 200: cssVar('warning-200'),
        // 300: cssVar('warning-300'),
        400: cssVar('warning-400'),
        500: cssVar('warning-500'),
        // 600: cssVar('warning-600'),
        700: cssVar('warning-700'),
        // 800: cssVar('warning-800'),
        // 900: cssVar('warning-900'),
      },
      error: {
        50: cssVar('error-50'),
        100: cssVar('error-100'),
        // 200: cssVar('error-200'),
        // 300: cssVar('error-300'),
        // 400: cssVar('error-400'),
        // 500: cssVar('error-500'),
        600: cssVar('error-600'),
        // 700: cssVar('error-700'),
        // 800: cssVar('error-800'),
        900: cssVar('error-900'),
      },
      neutral: {
        // 50: cssVar('neutral-50'),
        100: cssVar('neutral-100'),
        200: cssVar('neutral-200'),
        300: cssVar('neutral-300'),
        // 400: cssVar('neutral-400'),
        // 500: cssVar('neutral-500'),
        600: cssVar('neutral-600'),
        // 700: cssVar('neutral-700'),
        // 800: cssVar('neutral-800'),
        900: cssVar('neutral-900'),
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
  presets: [
    // ...otherAppSpecificPresets,
    require('@coveredinc/ui-core/tailwind-base')
  ],
  // ...overridesAndExtendsThatAreAppSpecific
} satisfies Config
