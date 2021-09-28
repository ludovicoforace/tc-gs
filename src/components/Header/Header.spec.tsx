import { render } from "@testing-library/react"
import { getIsScreenRetina } from "../../utils"
import Header from "./Header"

// Jest official workaround, link below
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: () => ({
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }),
});

jest.mock('../../utils', () => ({
  getIsScreenRetina: jest.fn()
}))

describe('<Header />', () => {
  const renderComponent = () => render(<Header />)
  let mockGetIsScreenRetina: jest.Mock

  beforeEach(() => {
    mockGetIsScreenRetina = getIsScreenRetina as jest.Mock
  })

  it('renders the regular image with non retina screens', () => {
    mockGetIsScreenRetina.mockReturnValue(false)
    const { getByAltText } = renderComponent()
    const image = getByAltText('header image') as HTMLImageElement
    expect(image.src).toContain('top_image_scale_1x.png')
  })

  it('renders the retina image with retina screens', () => {
    mockGetIsScreenRetina.mockReturnValue(true)
    const { getByAltText } = renderComponent()
    const image = getByAltText('header image') as HTMLImageElement
    expect(image.src).toContain('top_image_scale_2x.png')
  })
})
