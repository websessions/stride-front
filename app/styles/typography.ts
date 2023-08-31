import localFont from 'next/font/local'
import { css, styled } from 'styled-components'

export const aktivGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/AktivGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AktivGrotesk-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/AktivGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AktivGrotesk-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const odisseia = localFont({
  src: [
    {
      path: '../../public/fonts/Odisseia-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Odisseia-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Odisseia-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Odisseia-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const heading1 = css`
  ${aktivGrotesk.style};
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.64px;
  line-height: 120%;
`

export const Heading1 = styled.div`
  ${heading1};
`

export const heading2 = css`
  ${aktivGrotesk.style};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.24px;
  line-height: 120%;
`

export const Heading2 = styled.div`
  ${heading2};
`

export const heading3 = css`
  ${aktivGrotesk.style};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.2px;
  line-height: 120%;
`

export const Heading3 = styled.div`
  ${heading3};
`

export const body1 = css`
  ${aktivGrotesk.style};
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`

export const Body1 = styled.div`
  ${body1};
`

export const body1Bold = css`
  ${body1};
  font-weight: 700;
`

export const Body1Bold = styled.div`
  ${body1Bold};
`

export const body1Mono = css`
  ${body1};
  ${odisseia.style};
`

export const Body1Mono = styled.div`
  ${body1Mono};
`

export const body2 = css`
  ${aktivGrotesk.style};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`

export const Body2 = styled.div`
  ${body2};
`

export const body2Mono = css`
  ${body2};
  ${odisseia.style};
`

export const Body2Mono = styled.div`
  ${body2Mono};
`

export const body2MonoBold = css`
  ${body2Mono};
  font-weight: 600;
`

export const Body2MonoBold = styled.div`
  ${body2MonoBold};
`

export const body2MonoCaps = css`
  ${body2Mono};
  text-transform: uppercase;
`

export const Body2MonoCaps = styled.div`
  ${body2MonoCaps};
`

export const detail1 = css`
  ${odisseia.style};
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
`

export const Detail1 = styled.div`
  ${detail1};
`

export const detail1Bold = css`
  ${detail1};
  font-weight: 600;
`

export const Detail1Bold = styled.div`
  ${detail1Bold};
`

export const detail1Caps = css`
  ${detail1};
  text-transform: uppercase;
`

export const Detail1Caps = styled.div`
  ${detail1Caps};
`

export const detail1BoldCaps = css`
  ${detail1};
  font-weight: 600;
  text-transform: uppercase;
`

export const Detail1BoldCaps = styled.div`
  ${detail1BoldCaps};
`

export const detail1Underline = css`
  ${detail1};
  text-decoration-line: underline;
`

export const Detail1Underline = styled.div`
  ${detail1Underline};
`

export const detail2 = css`
  ${odisseia.style};
  font-size: 10px;
  font-weight: 400;
  line-height: 150%;
`

export const Detail2 = styled.div`
  ${detail2};
`

export const detail2Caps = css`
  ${detail2};
  text-transform: uppercase;
`

export const Detail2Caps = styled.div`
  ${detail2Caps};
`
