import React from "react";
import "./styles/_App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import CaseStudy from "./components/pages/CaseStudy";
import MyWork from "./components/pages/MyWork";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <Router>
      <Header></Header>

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
