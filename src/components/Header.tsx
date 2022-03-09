import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import "../styles/_header.scss";

import breakPointObserver from "../breakPointObserver";

const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "My work",
    url: "my-work",
    cName: "nav-links",
  },
  {
    title: "Case study",
    url: "case-study",
    cName: "nav-links",
  },
  {
    title: "Contact",
    url: "contact",
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

  const closeMobileMenu = () => {
    setClick(false);
  };

  const menuClick = () => {
    setClick(!click);
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
        {MenuItems.map((item, index) => {
          return (
            <li onClick={closeMobileMenu} className="nav-item" key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) => {
                  return isActive ? `${item.cName} active-link` : `${item.cName}`;
                }}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <menu className="menu-icon" onClick={menuClick}>
        <li>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </li>
      </menu>
    </nav>
  );
}
