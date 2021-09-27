import styled from 'styled-components'
import ReactCountdown, { CountdownRenderProps, CountdownTimeDelta } from 'react-countdown'

const Span = styled.span<{countdownCompleted: boolean}>`
font-size: ${({theme}) => theme.fontSizes.large};
font-weight: bold;
line-height: normal;

${({countdownCompleted}) => countdownCompleted && `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`}
`

const renderer = ({ formatted: { hours, minutes, seconds }, completed }: CountdownRenderProps) => {
  return <Span countdownCompleted={completed}>{hours} : {minutes} : {seconds}</Span>
}

interface Props {
  milliseconds: number
  onTick: (props: CountdownTimeDelta) => void
  onComplete: () => void
}

const Countdown = ({ milliseconds, onTick, onComplete }: Props) => (
  <ReactCountdown
    date={Date.now() + milliseconds}
    renderer={renderer}
    onTick={onTick}
    onComplete={onComplete}
  />
)

export default Countdown
