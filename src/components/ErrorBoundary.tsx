import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorCode?: string;
  errorMessage?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: any): State {
    return {
      hasError: true,
      errorCode: error.code || 'UNKNOWN_ERROR',
      errorMessage: error.message || 'An unexpected error occurred'
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private getErrorMessage(): string {
    switch (this.state.errorCode) {
      case 'CARD_FLIP_ERROR':
        return 'Unable to flip the card. Please try refreshing the page.';
      case 'STEP_UPDATE_ERROR':
        return 'Unable to update the current step. Please try again.';
      default:
        return 'Something unexpected happened. Please refresh the page.';
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            {this.getErrorMessage()}
          </p>
          <div className="space-y-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </button>
            <button
              className="px-4 py-2 ml-4 text-blue-600 hover:text-blue-700 
                transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => window.location.reload()}
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 