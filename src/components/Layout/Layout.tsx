import React from "react";
import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

type LayoutProps = {
  h1: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
