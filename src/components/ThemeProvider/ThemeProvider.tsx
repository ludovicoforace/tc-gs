import { ThemeProvider as SThemeProvider } from 'styled-components'
import { Theme } from '../../types'
import ResetCSS from '../../styled/ResetCSS'
import GlobalStyle from '../../styled/GlobalStyle'

interface Props {
  theme: Theme
  children: React.ReactChild | React.ReactChild[]
}

const ThemeProvider = ({ theme, children }: Props) => (
  <SThemeProvider theme={theme}>
    <ResetCSS />
    <GlobalStyle />
    {children}
  </SThemeProvider>
)

export default ThemeProvider
