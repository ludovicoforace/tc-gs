import { useEffect, useState } from 'react'
import styled from 'styled-components'
import regularImage from '../../assets/top_image_scale_1x.png'
import retinaImage from '../../assets/top_image_scale_2x.png'
import { getIsScreenRetina } from '../../utils'

const Image = styled.img`
width: 100%;
`

const Header = () => {
  const [imageSrc, setImageSrc] = useState(getIsScreenRetina()
    ? retinaImage
    : regularImage
  )

  useEffect(() => {
    const handleChangeScreen = () => {
      setImageSrc(getIsScreenRetina() ? retinaImage : regularImage)
    }

    const pixelRatio = window.devicePixelRatio
    window.matchMedia(`(resolution: ${pixelRatio}dppx)`)
      .addEventListener('change', handleChangeScreen)

    return () => window.matchMedia(`(resolution: ${pixelRatio}dppx)`)
      .removeEventListener('change', handleChangeScreen)
  }, [])

  return (
    <div>
      <Image alt="header image" src={imageSrc} />
    </div>
  )
}

export default Header
