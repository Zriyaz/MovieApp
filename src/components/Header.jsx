import React from "react";
import "./style.css";
import Logo from "../assets/logo.png";
import { Search } from "../icons/Search";
const Header = () => {
  return (
    <header className="header">
      <div style={{ width: "100%", height: "40px" }}>
        <img src={Logo} alt="" />
      </div>
      <div>
        <input type="text" />
        <span>
          <Search />
        </span>
      </div>
    </header>
  );
};

export default Header;
