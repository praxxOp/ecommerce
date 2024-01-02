import React from "react";
import "./Navbar.css"
import Image from "next/image";
import cart from "./Fast Cart.png"

const Navbar = () => {
  return (
    <div className="main">
      <div className="main__logo">
      <h1>KICKUP.</h1>
      </div>
      <div className="main__section">
      <h1>HOME</h1>
      <h1>MARKETPLACE</h1>
      <h1>CONTACT</h1>
      <Image src={cart}
      height={10}
      width={10}/>
      </div>
    </div>
  );
};

export default Navbar;
