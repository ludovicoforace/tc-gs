import { darkTheme } from "../../constants/themes";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import Layout from "../Layout/Layout";
import ThemeProvider from "../ThemeProvider/ThemeProvider";

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <Layout>
          <p>Content</p>
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App;
