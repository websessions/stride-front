'use client'

import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './breakpoints'
import { aktivGrotesk, body1, body2 } from './typography'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    ${body1};
    margin: 0;
    padding: 0;
    font-family: ${aktivGrotesk.style.fontFamily};
    font-feature-settings: 'salt' on;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${({ theme }) => theme.colorTextPrimary};
    background-color: ${({ theme }) => theme.colorBackground};

    @media only screen and (max-width: ${breakpoints.mobile}px) {
      ${body2};
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colorBackgroundInverted};
    color: ${({ theme }) => theme.colorTextPrimaryInverted};;
  }

  a {
    color: ${({ theme }) => theme.colorTextSecondary};
    text-decoration: none;
  }
`
