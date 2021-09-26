import { render } from "@testing-library/react"
import { userErrors } from "../../constants/errors"
import { Contact } from "../../types"
import FallbackUi from "./FallbackUI"

describe('<FallbackUi />', () => {
  it('renders the component correctly', () => {
    const props: React.ComponentProps<typeof FallbackUi> = { errorCode: 1 }
    const { name, message } = userErrors[props.errorCode]
    const { getByText } = render(<FallbackUi {...props} />)

    getByText(name)
    getByText(`Error code: ${props.errorCode}`)
    getByText(message)
    getByText(Contact.Email)
    expect(getByText(Contact.Email)).toHaveAttribute('href', `mailto:${Contact.Email}`)
  })
})
