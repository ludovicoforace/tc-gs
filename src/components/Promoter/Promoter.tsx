import styled from "styled-components"
import { PROTOCOL } from "../../constants/locations"
import useGetData from "../../hooks/useGetData"
import SAnchorButton from "../../styled/AnchorButton"

const Section = styled.section`
text-align: center;

> * {
  margin: 60px 0;
}
`

const Header = styled.h1`
font-size: ${({theme}) => theme.fontSizes.regular};
line-height: normal;
`

const P = styled.p`
font-size: ${({theme}) => theme.fontSizes.large};
font-weight: bold;
line-height: normal;
letter-spacing: 10px;
`

const AnchorButton = styled(SAnchorButton)`
width: 60%;
margin-left: auto;
margin-right: auto;
`

const Promoter = () => {
  const { data, errorMessage } = useGetData()

  if(errorMessage) return <p>{errorMessage}</p>
  if(data == null) return <p>loading...</p>
  const { cash_value, optin_URL, countdown_duration } = data

  return (
    <Section>
      <Header>Get your free £{cash_value} now</Header>
      <P>{countdown_duration}</P>
      <AnchorButton href={`${PROTOCOL}://${optin_URL}`}>Opt in</AnchorButton>
    </Section>
  )
}

export default Promoter
