import { render } from "@testing-library/react"
import FallbackUi from "../FallbackUI/FallbackUI"
import ErrorBoundary from './ErrorBoundary'

jest.mock('../FallbackUI/FallbackUI')

describe('<ErrorBoundary />', () => {
  const text = 'some text'
  beforeEach(() => {
    ;(FallbackUi as jest.Mock).mockReturnValue(() => <>FallbackUi</>)
  })

  it('renders <FallbackUi /> when there is an error', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
    const ErroringChild = () => { throw new Error() }
    const { queryByText } = render(
      <ErrorBoundary>
        <>{text}</>
        <ErroringChild />
      </ErrorBoundary>
    )

    expect(FallbackUi).toHaveBeenCalledWith({ errorCode: 1 }, expect.anything())
    expect(queryByText(text)).toBeNull()
    spy.mockRestore()
  })

  it('renders the child when there is no error', () => {
    const Child = () => <>{text}</>
    const { getByText } = render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    )

    expect(FallbackUi).not.toHaveBeenCalled()
    getByText(text)
  })
})
