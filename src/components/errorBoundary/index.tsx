import React from "react";

export default class ErrorBoundary extends React.Component {
  public state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
