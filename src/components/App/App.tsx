import { darkTheme } from "../../constants/themes";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <h1>App</h1>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App;
