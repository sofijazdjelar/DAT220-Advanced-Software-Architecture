import Header from "./header.jsx";

const Layout = props => (
  <>
    <Header />
    {props?.children}
  </>
);

export default Layout;
