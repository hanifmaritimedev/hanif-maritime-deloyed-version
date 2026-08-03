import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper hm-site-shell">
      <Header />
      <main className="hm-site-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
