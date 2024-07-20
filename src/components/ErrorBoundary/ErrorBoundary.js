import PropTypes from 'prop-types';
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.logErrorToMyService(error, errorInfo);
  }

  // eslint-disable-next-line class-methods-use-this, react/no-unused-class-component-methods
  logErrorToMyService(error, errorInfo) {
    console.error('Caught an error:', error, errorInfo);
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
