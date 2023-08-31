import { invert } from 'polished'

// Brand colors
export const maroon = '#7A0403'
export const infrared = '#D23105'
export const orange = '#FB8022'
export const yellow = '#EDD03A'
export const acidGreen = '#A3FD3D'
export const softGreen = '#BCFB75'
export const aquamarine = '#31F199'
export const skyBlue = '#29BBEC'
export const ultramarine = '#4766E3'
export const purple = '#30123B'

// Neutral colors
export const ink = '#222225'
export const graphite = '#595959'
export const eraser = '#9F9F9F'
export const midGrey = '#DBDBDB'
export const lightGrey = '#F0F0f0'
export const pureWhite = '#FFFFFF'
export const heavyBlue = '#D3E4FF'
export const lightBlue = '#EDF2FA'
export const brandWhite = '#F9FBFD'

export const colorTextPrimaryLight = pureWhite
export const colorTextPrimaryDark = ink

export const lightTheme = {
  // UI colors
  colorUiDivider: midGrey,
  colorUiBorder: midGrey,
  colorUiBackground: pureWhite,

  // Background colors
  colorBackground: brandWhite,
  colorBackgroundInverted: invert(brandWhite),
  colorBackgroundOverlay: 'rgba(249, 251, 253, 0.8)',

  // Text colors
  colorTextPrimary: colorTextPrimaryDark,
  colorTextPrimaryInverted: invert(colorTextPrimaryDark),
  colorTextSecondary: graphite,
  colorTextTertiary: eraser,
  colorTextPlaceholder: eraser,
  colorTextDisabled: eraser,

  // Input colors
  colorInputBackground: '#FAFAFA',
  colorInputBorderEmpty: midGrey,
  colorInputBorderFilled: graphite,

  // Button colors
  colorButtonPrimaryBackground: ink,
  colorButtonPrimaryText: pureWhite,
  colorButtonSecondaryBackground: 'transparent',
  colorButtonSecondaryText: ink,
  colorButtonSecondaryBorder: ink,
  colorButtonWarningBackground: infrared,
  colorButtonWarningText: pureWhite,
  colorButtonTertiaryBackground: 'transparent',
  colorButtonTertiaryText: ink,
  colorButtonCtaBackground: aquamarine,
  colorButtonCtaText: ink,

  // State colors
  colorStateError: infrared,
  colorStateWarning: infrared,
  colorStateDisabledEmpty: midGrey,
  colorStateDisabledFill: lightGrey,
}
