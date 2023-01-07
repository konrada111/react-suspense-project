import React, { Component, ErrorInfo, ReactNode } from "react"

interface ErrorBoundaryProps {
  children?: ReactNode
  fallback?: string
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
  }

  public static defaultProps: ErrorBoundaryProps = {
    fallback: "Sorry.. there was an error",
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <p>{this.props.fallback}</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary
