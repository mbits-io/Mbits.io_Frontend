import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Config from "../Config";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import logo from "../assets/img/logo.png";

export default function PageHeader(props) {
  const [pageData, setPageData] = useState(null);
  const [menuClass, setMenuClass] = useState("sub-menu open");

  useEffect(() => {
    axios.get(Config.API_URL + "pages?page_status=true").then((response) => {
      setPageData(response.data);
    });
  }, []);

  const toggleMenu = () => {
    if (menuClass === "sub-menu open") {
      setMenuClass("sub-menu open oppenned");
    } else {
      setMenuClass("sub-menu open");
    }
  };

  return (
    <>
      <header className="tob-bar-fix nav-down responsive-nav hidden-lg show-md hidden-md">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <div>
                <button
                  className="c-hamburger c-hamburger--htx"
                  onClick={toggleMenu}
                >
                  <span>toggle menu</span>
                </button>
                <div className={menuClass}>
                  <MobileMenu pageData={pageData} menuClass={menuClass} mainProps={props.mainProps} />
                </div>
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
      <div className="i_p_sec hidden-lg hidden-xs" onclick="myFunction(this)">
        <div className="bar_ipad1"></div>
        <div className="bar_ipad2"></div>
        <div className="bar_ipad3"></div>
      </div>

      <Sidebar pageData={pageData} />
    </>
  );
}
