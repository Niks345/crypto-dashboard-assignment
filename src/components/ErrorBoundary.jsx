import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    handleReload = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center text-center p-6">
                    <h2>⚠️ Something went wrong</h2>
                    <p>{this.state.error?.message}</p>
                    <button
                        onClick={this.handleReload}
                        style={{
                            marginTop: "16px",
                            padding: "8px 16px",
                            background: "#007bff",
                            color: "#fff",
                            borderRadius: "6px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;