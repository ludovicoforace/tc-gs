import { darkTheme } from "../../constants/themes"
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"
import Layout from "../Layout/Layout"
import Promoter from "../Promoter/Promoter"
import ThemeProvider from "../ThemeProvider/ThemeProvider"

const App = () => (
  <ErrorBoundary>
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Promoter />
      </Layout>
    </ThemeProvider>
  </ErrorBoundary>
)

export default App
