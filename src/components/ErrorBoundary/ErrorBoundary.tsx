import { Component } from "react"
import FallbackUI from "../FallbackUI/FallbackUI"

interface Props {
  children: React.ReactChild | React.ReactChild[]
}

export default class ErrorBoundary extends Component<Props> {
  state = { isError: false }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props

    if(isError) return <FallbackUI errorCode={1}  />
    return children
  }
}
