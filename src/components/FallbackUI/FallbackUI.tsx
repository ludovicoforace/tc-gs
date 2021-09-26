import { Contact } from '../../types'
import { userErrors } from '../../constants/errors'

interface Props {
  errorCode: keyof typeof userErrors
}

const FallbackUI = ({ errorCode }: Props) => {
  const { name, message } = userErrors[errorCode]

  return (
    <div role="alert">
      <h1>{name}</h1>
      <pre>Error code: {errorCode}</pre>
      <p>{message}</p>
      <p>Please report the error code at <a href={`mailto:${Contact.Email}`}>{Contact.Email}</a> and try to reload the page</p>
    </div>
  )
}

export default FallbackUI
