import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* layout for all pages */}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
