import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{minHeight: '590px'}}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
