import React from "react";
import Header from "../Header";
import MenuHeader from "../MenuHeader";
import "./style.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <MenuHeader />
      {props.children}
    </div>
  );
};

export default Layout;
