'use client'

import { App } from './app'
import { GridContainer, GridItem } from './design-components/grid'
import styled from 'styled-components'


const AuthContainer = styled(GridContainer)`
  height: 100dvh;
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <App>
          <AuthContainer>
            <GridItem $colStart={[1]} $colSpan={[12]}>
              {children}
            </GridItem>
          </AuthContainer>
        </App>
      </body>
    </html>
  )
}
