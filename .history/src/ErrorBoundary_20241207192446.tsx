import React, { Suspense } from 'react'
import { useLoaderData } from 'react-router-dom'

// ErrorBoundary 컴포넌트 구현
class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong during loading data!</h1>
    }
    return this.props.children
  }
}
