/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const ErrorBoundary = (WrappedComponent) => {
  return class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({
        error,
        errorInfo,
      });
    }

    render() {
      const { errorInfo, error } = this.state;
      if (errorInfo) {
        return (
          <div>
            <h2>Error</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {error && error.toString()}
              <br />
              {errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  }
}


export default ErrorBoundary;
