import { createGlobalStyle } from 'styled-components'
import { Theme } from '../types'

const GlobalStyle = createGlobalStyle<{theme: Theme}>`
body {
  background-color: ${({theme}) => theme.bgs.darker};
  font-family: ${({theme}) => theme.fontFamily};
  font-size: ${({theme}) => theme.fontSizes.regular};
  color: ${({theme}) => theme.colors.text};
}
`

export default GlobalStyle
