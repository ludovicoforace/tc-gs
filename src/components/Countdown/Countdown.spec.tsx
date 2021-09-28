import { render } from '@testing-library/react'
import { darkTheme } from '../../constants/themes'
import ThemeProvider from '../ThemeProvider/ThemeProvider'
import Countdown from './Countdown'

jest.mock('../../styled/GlobalStyle', () => () => <>GlobalStyle</>)

describe('<Countdown />', () => {
  const renderComponent = (ms: number) => render(
    <ThemeProvider theme={darkTheme}>
      <Countdown
        milliseconds={ms}
        onTick={(jest.fn())}
        onComplete={jest.fn()}
      />
    </ThemeProvider>
  )

  it('renders time in HH:MM:SS format from 3600000 milliseconds', () => {
    const { getByText } = renderComponent(3600000)
    getByText(/01 : 00 : 00/)
  })

  it('renders time in HH:MM:SS format from 60000 milliseconds', () => {
    const { getByText } = renderComponent(60000)
    getByText(/00 : 01 : 00/)
  })

  it('renders time in HH:MM:SS format from 1000 milliseconds', () => {
    const { getByText } = renderComponent(1000)
    getByText(/00 : 00 : 01/)
  })

  it('renders time in HH:MM:SS format from 5112000 milliseconds', () => {
    const { getByText } = renderComponent(5112000)
    getByText(/01 : 25 : 12/)
  })
})
