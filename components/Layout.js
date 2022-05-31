import Navbar from "./Navbar";
import Head from "next/head";

import Footer from "./Footer";
import Contact from "./Contact";
import MainCallToAction from "./MainCallToAction";

const Layout = ({ children, isOpen, toggle }) => {
  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Contact toggle={toggle} isOpen={isOpen} />
      <div>
        <main>{children}</main>
      </div>
      <MainCallToAction />
      <Footer />
    </>
  );
};

export default Layout;
