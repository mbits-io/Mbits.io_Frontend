import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import logo from "../assets/img/logo.png";

export default function Header(props) {
  
  const [menuClass, setMenuClass] = useState("sub-menu open");
  const [mainMenuClass, setMainMenuClass] = useState("c-hamburger c-hamburger--htx");
  
  const toggleMenu = () => {
    if (menuClass === "sub-menu open") {
      setMenuClass("sub-menu open oppenned");
      setMainMenuClass("c-hamburger c-hamburger--htx is-active");
    } else {
      setMenuClass("sub-menu open");
      setMainMenuClass("c-hamburger c-hamburger--htx");
    }
  };

  return (
    <header className="tob-bar-fix nav-down responsive-nav hidden-lg hidden-md">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <div>
              <button
                type="button"
                className={mainMenuClass}
                onClick={toggleMenu}
              >
                <span>toggle menu</span>
              </button>
              <nav className={menuClass}>
                <MobileMenu pageData={props.pageData} menuClass={menuClass} mainProps={props.mainProps} />
              </nav>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="new_mobile_logo">
              <img src={logo} alt="logo-pik" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
