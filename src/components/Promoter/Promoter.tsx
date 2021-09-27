import { useState } from "react"
import styled from "styled-components"
import { PROTOCOL } from "../../constants/locations"
import useGetData from "../../hooks/useGetData"
import Countdown from "../Countdown/Countdown"
import SAnchorButton from "../../styled/AnchorButton"
import { convertHMSToMS } from "../../utils"

const Section = styled.section`
text-align: center;
min-height: 306px;
position: relative;
min-height: 306px;

> * {
  margin: 60px 0;
}
`

const Header = styled.h1`
font-size: ${({theme}) => theme.fontSizes.regular};
line-height: normal;
`

const AnchorButton = styled(SAnchorButton)`
width: 60%;
margin-left: auto;
margin-right: auto;
`

const Promoter = () => {
  const { data, errorMessage } = useGetData()
  const [gameOver, setGameOver] = useState(false)

  if(errorMessage) return <p>{errorMessage}</p>
  if(data == null) return <p>loading...</p>
  const { cash_value, optin_URL, countdown_duration } = data
  const countdownMilliseconds = gameOver
    ? 0
    : convertHMSToMS(countdown_duration)

  const handleCountdownCompletion = () => {
    setGameOver(true)
  }

  return (
    <Section>
      {!gameOver && <Header>Get your free £{cash_value} now</Header>}
      <Countdown
        milliseconds={countdownMilliseconds}
        onComplete={handleCountdownCompletion}
      />
      {!gameOver && (
        <AnchorButton href={`${PROTOCOL}://${optin_URL}`}>Opt in</AnchorButton>
      )}
    </Section>
  )
}

export default Promoter
