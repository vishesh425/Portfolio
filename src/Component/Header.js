import "../Css/style.css";
import line from "../assets/svg/ham-menu.svg";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const [isSmallMenuActive, setIsSmallMenuActive] = useState(false);

  const toggleSmallMenu = () => {
    setIsSmallMenuActive(!isSmallMenuActive);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont dynamicBgClr">
            <img
              src="./assets/png/john-doe.png"
              alt="Vishesh Parmar Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Vishesh Parmar</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link to="/" className="header__link">
                             Home
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="./#about" className="header__link">
                About
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="./#projects" className="header__link">
                            Projects
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link to="./#contact" className="header__link">
                             Contact
              </Link>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleSmallMenu}>
            <img
              src={line}
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
          </div>
        </div>
      </div>
      {/* <div className="header__sm-menu" > */}
      <div
        className={`header__sm-menu ${
          isSmallMenuActive ? "header__sm-menu--active" : ""
        }`}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
