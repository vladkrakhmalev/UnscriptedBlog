import { Component, ErrorInfo, ReactNode, Suspense } from "react";

interface IProps {
  errorComponent: ReactNode
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<IProps, ErrorBoundaryState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state
    const { children, errorComponent } = this.props

    if (hasError)
      return <Suspense fallback="">
        {errorComponent}
      </Suspense>
    
    return children
  }
}

export default ErrorBoundary