import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { PROTOCOL } from "../../constants/locations"
import { darkTheme } from "../../constants/themes"
import useGetData from "../../hooks/useGetData"
import { sleep } from "../../utils"
import ThemeProvider from "../ThemeProvider/ThemeProvider"
import Promoter from "./Promoter"

// Jest official workaround, link below
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }),
});

const sessionStorageMock = (() => {
  let store: Record<string, string> = {
    'whatever': 'i want'
  }
  return {
    getItem(key: string) {
      return store[key] || null
    },
    setItem(key: string, value: string) {
      store[key] = value.toString()
    }
  }
})()

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
})

jest.mock('../../hooks/useGetData')

describe('<Promoter />', () => {
  const renderComponent = () => render(
    <ThemeProvider theme={darkTheme}>
      <Promoter />
    </ThemeProvider>
  )
  let spyGetItem: jest.SpyInstance
  let spySetItem: jest.SpyInstance

  beforeEach(() => {
    spyGetItem = jest.spyOn(sessionStorage, 'getItem')
    spySetItem = jest.spyOn(sessionStorage, 'setItem')
  })

  afterEach(() => {
    spyGetItem.mockRestore()
    spySetItem.mockRestore()
  })

  it('renders the correct view when the game is not over', () => {
    const mockData = {
      cash_value: 10,
      optin_URL: 'www.jackpotjoy.com',
      countdown_duration: '1:25:12'
    }
    ;(useGetData as jest.Mock).mockReturnValue({
      data: mockData,
      errorMessage: ''
    })
    const { getByText } = renderComponent()
    const sentence = new RegExp(`Get your free £${mockData.cash_value} now`)
    const button = getByText('Opt in') as HTMLAnchorElement

    getByText(sentence)
    getByText(/01 : 25 : 12/)
    expect(button.href).toBe(`${PROTOCOL}://${mockData.optin_URL}`)
    expect(spyGetItem).toHaveBeenCalledWith('game_over')
  })

  it('renders the correct view while loading', () => {
    ;(useGetData as jest.Mock).mockReturnValue({
      data: null,
      errorMessage: ''
    })
    const { queryByText, getByText } = renderComponent()
    const sentence = new RegExp(`Get your free £10 now`)

    getByText('loading...')
    expect(queryByText(sentence)).not.toBeInTheDocument()
    expect(queryByText(/01 : 25 : 12/)).not.toBeInTheDocument()
    expect(queryByText('Opt in')).not.toBeInTheDocument()
    expect(spyGetItem).toHaveBeenCalledWith('game_over')
  })

  it('renders the error message when we failing to get the data', () => {
    const errorMessage = 'Some HTTP error'

    ;(useGetData as jest.Mock).mockReturnValue({
      data: null,
      errorMessage: 'Some HTTP error'
    })
    const { queryByText, getByText } = renderComponent()
    const sentence = new RegExp(`Get your free £10 now`)

    getByText(errorMessage)
    expect(queryByText(sentence)).not.toBeInTheDocument()
    expect(queryByText(/01 : 25 : 12/)).not.toBeInTheDocument()
    expect(queryByText('Opt in')).not.toBeInTheDocument()
    expect(queryByText('loading...')).not.toBeInTheDocument()
    expect(spyGetItem).toHaveBeenCalledWith('game_over')
  })

  it('renders the countdown alone when the countdown expires', async () => {
    const mockData = {
      cash_value: 10,
      optin_URL: 'www.jackpotjoy.com',
      countdown_duration: '0:0:1'
    }
    ;(useGetData as jest.Mock).mockReturnValue({
      data: mockData,
      errorMessage: ''
    })
    const { getByText, queryByText } = renderComponent()
    await act(async () => {
      await sleep(1000)
    })
    const sentence = new RegExp(`Get your free £${mockData.cash_value} now`)

    getByText(/00 : 00 : 00/)
    expect(queryByText(sentence)).not.toBeInTheDocument()
    expect(queryByText('Opt in')).not.toBeInTheDocument()
    expect(queryByText('loading...')).not.toBeInTheDocument()
    expect(spySetItem.mock.calls).toEqual([
      ['countdown_duration', '0:0:0'],
      ['game_over', 'game_over']
    ])
    expect(spyGetItem).toHaveBeenCalledWith('game_over')
  })

  it('renders the countdown alone when we get no hours, minutes and seconds from data', () => {
    const mockData = {
      cash_value: 10,
      optin_URL: 'www.jackpotjoy.com',
      countdown_duration: '0:0:0'
    }
    ;(useGetData as jest.Mock).mockReturnValue({
      data: mockData,
      errorMessage: ''
    })
    const { getByText, queryByText } = renderComponent()
    const sentence = new RegExp(`Get your free £${mockData.cash_value} now`)

    getByText(/00 : 00 : 00/)
    expect(queryByText(sentence)).not.toBeInTheDocument()
    expect(queryByText('Opt in')).not.toBeInTheDocument()
    expect(queryByText('loading...')).not.toBeInTheDocument()
    expect(spyGetItem).toHaveBeenCalledWith('game_over')
  })
})
