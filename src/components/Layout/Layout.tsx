import PageBoundaires from "../../styled/PageBoundary";

interface Props {
  children: React.ReactChild | React.ReactChild[]
}

const Layout = ({ children }: Props) => (
  <>
    <header>
      <PageBoundaires>
        <h1>Header</h1>
      </PageBoundaires>
    </header>
    <PageBoundaires>
        {children}
      <footer>Footer</footer>
    </PageBoundaires>
  </>
)

export default Layout
