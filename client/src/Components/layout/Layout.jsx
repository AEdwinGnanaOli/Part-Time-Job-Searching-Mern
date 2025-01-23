import React from "react";
import Header from "../Header";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
function Layout({ children, title,  }) {
  return (
    <div>
      <Header />
      <div className="main" style={{ minHeight: "100vh",overflow:'hidden' }}>
        {children}
      </div>
      <Footer />
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content="width=device-width" />
        <meta name="keywords" />
        <meta name="author" />
        <title>{title}</title>
      </Helmet>
    </div>
  );
}
Layout.defaultProps = {
  title: "Food Truck-App",
  keyword: "HTML,CSS,REACT,JAVASCRIPT,NODE.JS MERN STACK",
  author: "Edwin"
};

export default Layout;
