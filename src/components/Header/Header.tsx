import styled from 'styled-components'
import image from '../../assets/top_image_scale_2x.png'

const Image = styled.img`
width: 100%;
`

const Header = () => {
  return (
    <div>
      <Image alt="header image" src={image} />
    </div>
  )
}

export default Header
