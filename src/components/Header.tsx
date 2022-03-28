import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "../styles/header.scss";

import breakPointObserver from "../breakPointObserver";
import { HashLink } from "react-router-hash-link";

const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "My work",
    url: "/my-work",
    cName: "nav-links",
  },
  {
    title: "Case study",
    url: "/case-study",
    cName: "nav-links",
  },
  {
    title: "Contact",
    url: "/#contact",
    cName: "nav-links",
  },
];

const breakPoints = {
  small: "(max-width:880px)",
  desktop: "(min-width:880px)",
};

export default function Header() {
  const [click, setClick] = useState(false);

  const [breakPoint, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);

  document.body.addEventListener("onlcick", () => {
    closeMobileMenu();
  });

  const closeMobileMenu = () => {
    setClick(false);
  };

  const menuClick = () => {
    setClick(!click);
  };

  const toggleScroll = (a: boolean) => {
    if (a) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  let addBlurBackground = () => {
    if (breakPoint === "small") return "blur";
    else return "";
  };

  return (
    <nav className="navbar glass-effect">
      <Link className="navbar-logo" to="/" onClick={closeMobileMenu}>
        Arob Deng
      </Link>
      <ul className={click ? `nav-menu active ${addBlurBackground()}` : "nav-menu effect"}>
        <li onClick={closeMobileMenu} className="nav-item">
          <NavLink
            to={MenuItems[0].url}
            className={({ isActive }) => {
              return isActive ? `${MenuItems[0].cName} active-link` : `${MenuItems[0].cName}`;
            }}>
            {MenuItems[0].title}
          </NavLink>
        </li>
        <li onClick={closeMobileMenu} className="nav-item">
          <NavLink
            to={MenuItems[1].url}
            className={({ isActive }) => {
              return isActive ? `${MenuItems[1].cName} active-link` : `${MenuItems[1].cName}`;
            }}>
            {MenuItems[1].title}
          </NavLink>
        </li>
        <li onClick={closeMobileMenu} className="nav-item">
          <NavLink
            to={MenuItems[2].url}
            className={({ isActive }) => {
              return isActive ? `${MenuItems[2].cName} active-link` : `${MenuItems[2].cName}`;
            }}>
            {MenuItems[2].title}
          </NavLink>
        </li>
        <li onClick={closeMobileMenu} className="nav-item">
          <HashLink to={MenuItems[3].url} className={MenuItems[3].cName}>
            {MenuItems[3].title}
          </HashLink>
        </li>
      </ul>
      <menu className="menu-icon" onClick={menuClick}>
        <li>
          <i
            className={
              click ? `fas fa-times ${toggleScroll(true)} ` : `fas fa-bars ${toggleScroll(false)}}`
            }></i>
        </li>
      </menu>
    </nav>
  );
}
