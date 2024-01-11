import React from "react";
import Menu from "./Menu";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerMenu">
        <Menu name="Anasayfa" />
        <Menu name="Blog" />
        <Menu name="Salon Kirala" />
        <Menu name="İletişim" />
      </div>
      <div className="headerRadio"></div>
      <div className="headerMedia"></div>
    </div>
  );
}

export default Header;
