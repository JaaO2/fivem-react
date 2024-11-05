import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorDesc: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Wystąpił błąd:", error, errorInfo);
    this.setState({ errorDesc: error.toString() + " " + errorInfo.componentStack });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Błąd: {this.state.errorDesc}</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
