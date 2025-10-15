import { ThemeProvider } from "./styles/ThemeProvider";
import { Dashboard } from './components/dashboard/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import "./styles/App.css";

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
