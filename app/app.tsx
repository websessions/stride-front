'use client'

import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './styled-components-registry'
import { lightTheme } from './styles/colors'
import { GlobalStyles } from './styles/global'

/**
 * The main component which allows us to render all context providers which need to be used near the
 * root of the application without making the root layout a client component (which breaks metadata,
 * and I'm sure other things).
 */
export function App({ children }: { children: React.ReactNode }) {
  // TODO(marko): Make the theme configurable (save in local storage or something)
  const currentTheme = lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledComponentsRegistry>
        <GlobalStyles />

        {children}
      </StyledComponentsRegistry>
    </ThemeProvider>
  )
}
