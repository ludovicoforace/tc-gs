import { useState } from "react"
import styled from "styled-components"
import { CountdownTimeDelta } from "react-countdown"
import useGetData from "../../hooks/useGetData"
import Countdown from "../Countdown/Countdown"
import SAnchorButton from "../../styled/AnchorButton"
import { convertHMSToMS } from "../../utils"
import { PROTOCOL } from "../../constants/locations"

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
  const [gameOver, setGameOver] = useState(
    Boolean(sessionStorage.getItem('game_over'))
  )

  if(errorMessage) return <p>{errorMessage}</p>
  if(data == null) return <p>loading...</p>

  const handleCountdownCompletion = () => {
    sessionStorage.setItem(
      'countdown_duration',
      '0:0:0'
    )
    sessionStorage.setItem('game_over', 'game_over')
    setGameOver(true)
  }

  const handleOnTick = (props: CountdownTimeDelta) => {
    const { hours, minutes, seconds } = props
    sessionStorage.setItem(
      'countdown_duration',
      `${hours}:${minutes}:${seconds}`
      )
    }

  const { cash_value, optin_URL, countdown_duration } = data
  const sessionDuration = sessionStorage.getItem('countdown_duration')
  const countdownMilliseconds = gameOver
    ? 0
    : (sessionDuration && convertHMSToMS(sessionDuration)) || convertHMSToMS(countdown_duration)

  return (
    <Section>
      {!gameOver && <Header>Get your free £{cash_value} now</Header>}
      <Countdown
        milliseconds={countdownMilliseconds}
        onTick={handleOnTick}
        onComplete={handleCountdownCompletion}
      />
      {!gameOver && (
        <AnchorButton href={`${PROTOCOL}://${optin_URL}`}>Opt in</AnchorButton>
      )}
    </Section>
  )
}

export default Promoter
