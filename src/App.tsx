import React from "react";
import "./styles/_App.scss";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import CaseStudy from "./components/pages/CaseStudy";
import MyWork from "./components/pages/MyWork";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  const [buttonVisible, setVisibile] = useState(false);
  let backToTop = () => {
    window.scrollTo(0, 0);
  };
  let showButton = () => {
    console.log("HI!!!");
    if (buttonVisible) {
      return (
        <button onClick={backToTop} className="back-to-top">
          <img src="./arrow-active.svg" alt="Back to top" />
        </button>
      );
    } else return <></>;
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 1000) {
      setVisibile(true);
    } else setVisibile(false);
  });
  return (
    <Router>
      <Header></Header>

      {showButton()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/my-work" element={<MyWork />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
