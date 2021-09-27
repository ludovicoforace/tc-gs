import { createGlobalStyle } from 'styled-components'

const ResetCSS = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  line-height: 0;
}
*:focus {
  outline: none;
}
html {
  text-size-adjust: 100%;
}
body {
  margin: 0;
}
button {
  border: 0;
  padding: 0;
}
@-ms-viewport {
  width: device-width;
}
`

export default ResetCSS
