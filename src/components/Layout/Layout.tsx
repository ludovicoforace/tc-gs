import PageBoundaires from "../../styled/PageBoundary";
import Header from "../Header/Header";

interface Props {
  children: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => (
  <>
    <header>
      <PageBoundaires>
        <Header />
      </PageBoundaires>
    </header>
    <PageBoundaires>
        {children}
    </PageBoundaires>
  </>
)

export default Layout
