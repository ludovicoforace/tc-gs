import styled from 'styled-components'
import ReactCountdown, { CountdownRenderProps } from 'react-countdown'

const Span = styled.span`
font-size: ${({theme}) => theme.fontSizes.large};
font-weight: bold;
line-height: normal;
`

const renderer = ({ formatted: { hours, minutes, seconds } }: CountdownRenderProps) => {
  return <Span>{hours} : {minutes} : {seconds}</Span>
}

interface Props {
  milliseconds: number
  onComplete: () => void
}

const Countdown = ({ milliseconds, onComplete }: Props) => (
  <ReactCountdown
    date={Date.now() + milliseconds}
    renderer={renderer}
    onComplete={onComplete}
  />
)

export default Countdown
