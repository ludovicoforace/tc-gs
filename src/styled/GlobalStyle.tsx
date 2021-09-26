import { createGlobalStyle } from 'styled-components'
import { Theme } from '../types'

import background from '../assets/background_scale_2x.jpeg'

const GlobalStyle = createGlobalStyle<{theme: Theme}>`
html {
  min-height: 100%;
  background: url(${background});
  background-color: ${({theme}) => theme.bgs.darker};
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
}
body {
  font-family: ${({theme}) => theme.fontFamily};
  font-size: ${({theme}) => theme.fontSizes.regular};
  color: ${({theme}) => theme.colors.text};
}
`

export default GlobalStyle
