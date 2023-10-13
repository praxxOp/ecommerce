import React from "react";
import Menu from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Menu.main}>
      <h1>KICKUP.</h1>
      <h1>HOME</h1>
      <h1>MARKETPLACE</h1>
      <h1>CONTACT</h1>
    </div>
  );
};

export default Navbar;
