import { createGlobalStyle } from 'styled-components'
import { Theme } from '../types'

import regularBackground from '../assets/background_scale_1x.jpeg'
import retinaBackground from '../assets/background_scale_2x.jpeg'
import { getIsScreenRetina } from '../utils'
import { useEffect, useState } from 'react'

const StyledGlobal = createGlobalStyle<{theme: Theme, backgroundImage: string}>`
html {
  min-height: 100%;
  background: url(${({backgroundImage}) => backgroundImage});
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

const GlobalStyle = () => {
  const [backgroundImage, setBackgroundImage] = useState(getIsScreenRetina()
    ? retinaBackground
    : regularBackground
  )

  useEffect(() => {
    const handleChangeScreen = () => {
      setBackgroundImage(getIsScreenRetina()
        ? retinaBackground
        : regularBackground
      )
    }

    const pixelRatio = window.devicePixelRatio
    window.matchMedia(`(resolution: ${pixelRatio}dppx)`)
      .addEventListener('change', handleChangeScreen)

    return () => window.matchMedia(`(resolution: ${pixelRatio}dppx)`)
      .removeEventListener('change', handleChangeScreen)
  }, [])

  return <StyledGlobal backgroundImage={backgroundImage} />
}

export default GlobalStyle
