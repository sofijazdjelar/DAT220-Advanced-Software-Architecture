import Header from "./header.jsx";

const withLayout = Page => {
  return () => (
    <>
      <Header />
      <Page />
    </>
  );
};

export default withLayout;
