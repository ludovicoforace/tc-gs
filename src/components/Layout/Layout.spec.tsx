import { render } from "@testing-library/react"
import Layout from "./Layout"

jest.mock('../Header/Header', () => () => <>Header</>)

describe('<Layout />', () => {
  it('wraps children components within the layout', () => {
    const text = 'text'
    const Child = () => <>{text}</>

    const { getByText } = render(
      <Layout>
        <Child />
      </Layout>
    )

    getByText(/text/)
  })
})
