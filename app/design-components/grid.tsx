'use client'

import styled from 'styled-components'
import { Breakpoint, breakpoints } from '../styles/breakpoints'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 16px;
  margin: 0 16px;

  @media only screen and (max-width: ${breakpoints.mobile}px) {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 16px;
    margin: 0 20px;
  }
`

export const GridItem = styled.div<{
  $colStart?: number | number[]
  $colSpan?: number | number[]
  $rowStart?: number | number[]
  $rowSpan?: number | number[]
}>`
  ${({ $colStart, $colSpan, $rowStart, $rowSpan }) => {
    const breakpointsArray = Object.keys(breakpoints) as Array<Breakpoint>
    return breakpointsArray.reduce((acc, breakpoint, index) => {
      const colStart = Array.isArray($colStart) ? $colStart[index] : $colStart
      const colSpan = Array.isArray($colSpan) ? $colSpan[index] : $colSpan
      const rowStart = Array.isArray($rowStart) ? $rowStart[index] : $rowStart
      const rowSpan = Array.isArray($rowSpan) ? $rowSpan[index] : $rowSpan

      if (breakpoint === Breakpoint.Default) {
        return `
          grid-column-start: ${colStart ?? 'auto'};
          grid-column-end: ${colSpan ? `span ${colSpan}` : 'auto'};
          grid-row-start: ${rowStart ?? 'auto'};
          grid-row-end: ${rowSpan ? `span ${rowSpan}` : 'auto'};
        `
      }

      return (
        acc +
        `
          @media only screen and (max-width: ${breakpoints[breakpoint]}px) {
            grid-column-start: ${colStart ?? 'auto'};
            grid-column-end: ${colSpan ? `span ${colSpan}` : 'auto'};
            grid-row-start: ${rowStart ?? 'auto'};
            grid-row-end: ${rowSpan ? `span ${rowSpan}` : 'auto'};
          }
        `
      )
    }, '')
  }}
`
