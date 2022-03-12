import "../../styles/_case-study.scss";
import breakPointObserver from "../../breakPointObserver";
import React, { useEffect, useState } from "react";

import caseStudyReport from "../../case-study.json";

const breakPoints = {
  small: "(max-width:880px)",

  laptop: "(min-width:880px and max-width:1000px",
  desktop: "(min-width:880px)",
};

let oldDesign = caseStudyReport["oldDesign"];
let newDesign = caseStudyReport["newDesign"];

export default function CaseStudy() {
  const [breakPoint, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);

  let getImg = (where: String) => {
    switch (where) {
      case "top": {
        if (breakPoint === "small") {
          return <img src="./codeproject.png" alt="codeproject website logo" />;
        } else return <></>;
      }
      case "bottom": {
        if (breakPoint === "small") return <></>;
        else return <img src="./codeproject.png" alt="codeproject website logo" />;

        break;
      }
    }
    if (breakPoint === "small") {
      return <img src="./codeproject.png" alt="codeproject website logo" />;
    }
  };

  let returnBreak = () => {
    if (breakPoint === "small") return <br />;
  };

  let getBtnImg = (src: string) => {
    return (
      <button
        data-larger={src}
        className="img-btn"
        aria-label="Click to enlarge image"
        onClick={(e) => {
          expandImage(e, src);
        }}>
        <img src={src} alt="Old design of the home page" />
      </button>
    );
  };

  let expandImage = (event: React.MouseEvent, src: String | null) => {
    event.preventDefault();

    //if overlay is not already open
    if (!document.getElementById("overlay")) {
      //  document.body.classList.add("disable-scroll");

      //disable scroll  behaviour for body and root
      //document.getElementById("root")?.classList.add("disable-scroll");
      document.body.classList.add("disable-scroll");

      //create and add overlay
      let overlay = document.createElement("div");
      overlay.setAttribute("id", "overlay");
      overlay.setAttribute("class", "overlay");
      //IE7
      //overlay.id = "overlay";
      //overlay.className = "overlay;"
      //create and add image

      overlay.onclick = () => {
        closeOverlay();
      };

      document.body.appendChild(overlay);
      //add dark backgroud to overlay
      document.getElementById("overlay")?.classList.add("blur");

      let img = document.createElement("img");
      img.src = src as string;
      img.setAttribute("id", "img");
      // set tabindex, for focus
      img.setAttribute("tabindex", "-1");
      // style image
      // IE7
      // img.className = "overlayimg";

      img.onclick = () => {
        closeOverlay();
      };

      img.addEventListener("keydown", (event) => {
        let key = event.key;

        if (document.getElementById("overlay")) {
          if (key === "Escape" || key === "Enter") {
            closeOverlay();
          }
        }
      });

      overlay.appendChild(img);

      // focus on image in overlay
      img.focus();

      let closeOverlay = () => {
        //document.body.classList.remove("disable-scroll");
        document.body.classList.remove("disable-scroll");
        let img = document.getElementById("img");
        overlay?.parentNode?.removeChild(overlay);
        img?.parentNode?.removeChild(img);
      };
    }
  };

  return (
    <>
      <h1 className="main-title">Code project | website redesign</h1>

      <section className="overview study-section">
        {getImg("top")};<h2 className="section-title">{oldDesign.overview.title}</h2>
        <p className="section-content">
          {oldDesign.overview.p1}
          {returnBreak()}
          <br />
          {oldDesign.overview.p2}
          <br />
          {returnBreak()}
          {oldDesign.overview.p3}
        </p>
        {getImg("bottom")}
      </section>

      <section className="study-section analysis">
        <h2 className="section-title">{oldDesign.analysis.title}</h2>
        {getBtnImg("./analysis.png")}
        <p className="section-content">
          {oldDesign.analysis.p1}
          <br />
          <br />
          {oldDesign.analysis.p2}
          <br />
          <br />
          {oldDesign.analysis.p3}
          <br />
          <br />
          {oldDesign.analysis.p4}
        </p>
      </section>

      <section className="study-section article-title">
        <h2 className="section-title">{oldDesign.articleTitle.title}</h2>
        <p className="section-content">{oldDesign.articleTitle.p1}</p>
      </section>

      <section className="study-section ">
        <h2 className="section-title">{oldDesign.authorSection.title}</h2>
        {getBtnImg("./author-section.png")}
        <p className="section-content">
          {oldDesign.authorSection.p1}
          <br />
          <br />
          {oldDesign.authorSection.p2}
          <br />
          <br />
        </p>
        {getBtnImg("./about-the-author.png")}
        <p>
          {oldDesign.authorSection.p3}
          <br />
          <br />
          {oldDesign.authorSection.p4}
          <br />
          <br />
          {oldDesign.authorSection.p5}
          <br />
          <br />
          {oldDesign.authorSection.p6}
          <br />
          <br />
          {oldDesign.authorSection.p7}
          <br />
          <br />
          {oldDesign.authorSection.p8}
        </p>
      </section>

      <section className="study-section body">
        <h2 className="section-title">{oldDesign.body.title}</h2>
        {getBtnImg("./body.png")}
        <p className="section-content">
          {oldDesign.body.p1}
          <br />
          <br />
          {oldDesign.body.p2}
          <br />
          <br />
          {oldDesign.body.p3}
        </p>
      </section>

      <section className="study-section comments">
        <h2 className="section-title">{oldDesign.comments.title}</h2>
        <p className="section-content">{oldDesign.analysis.p1}</p>
        {getBtnImg("./comments.png")}
        <p>
          {oldDesign.comments.p2}
          <br />
          <br />
          {oldDesign.comments.p3}
          <br />
          <br />
          {oldDesign.comments.p4}
          <br />
          <br />
          {oldDesign.comments.p5}
          <br />
          <br />
          {oldDesign.comments.p6}
          <br />
          <br />
          {oldDesign.comments.p7}
          {oldDesign.comments.p8}
          <br />
          <br />
          {oldDesign.comments.p9}
          <br />
          <br />
          {oldDesign.comments.p10}
        </p>
      </section>

      <section className="study-section article-aside">
        <h2 className="section-title">{oldDesign.aside.title}</h2>
        <p className="section-content">
          {oldDesign.aside.p1}
          <br />
          <br />
          {oldDesign.aside.p2}
        </p>

        {getBtnImg("./aside.png")}
      </section>

      <section className="study-section article-footer">
        <h2 className="section-title">{oldDesign.footer.title}</h2>
        <p className="section-content">
          {oldDesign.footer.p1}
          <br />
          <br />
          {oldDesign.footer.p2}
          <br />
          <br />
          {oldDesign.footer.p3}
        </p>
        {getBtnImg("./footer.png")}
        <p>
          <br />
          {oldDesign.footer.p4}
        </p>
      </section>

      <h2 className="improved">
        <span className="sr-only">The improved design</span>codeproject.com
      </h2>

      {getBtnImg("./newdesign-1.png")}
      {getBtnImg("./newdesign-2.png")}
      {getBtnImg("./newdesign-3.png")}
      <section className="study-section ">
        <h2 className="section-title">{oldDesign.articleTitle.title}</h2>
        {getBtnImg("./analysis.png")}
        <p className="section-content">
          {oldDesign.analysis.p1}
          <br />
          <br />
          {oldDesign.analysis.p2}
          <br />
          <br />
          {oldDesign.analysis.p3}
          <br />
          <br />
          {oldDesign.analysis.p4}
        </p>
      </section>

      <section className="study-section ">
        <h2 className="section-title">{oldDesign.articleTitle.title}</h2>
        {getBtnImg("./analysis.png")}
        <p className="section-content">
          {oldDesign.analysis.p1}
          <br />
          <br />
          {oldDesign.analysis.p2}
          <br />
          <br />
          {oldDesign.analysis.p3}
          <br />
          <br />
          {oldDesign.analysis.p4}
        </p>
      </section>

      <section className="study-section ">
        <h2 className="section-title">{oldDesign.articleTitle.title}</h2>
        {getBtnImg("./analysis.png")}
        <p className="section-content">
          {oldDesign.analysis.p1}
          <br />
          <br />
          {oldDesign.analysis.p2}
          <br />
          <br />
          {oldDesign.analysis.p3}
          <br />
          <br />
          {oldDesign.analysis.p4}
        </p>
      </section>

      <section className="study-section ">
        <h2 className="section-title">{oldDesign.articleTitle.title}</h2>
        {getBtnImg("./analysis.png")}
        <p className="section-content">
          {oldDesign.analysis.p1}
          <br />
          <br />
          {oldDesign.analysis.p2}
          <br />
          <br />
          {oldDesign.analysis.p3}
          <br />
          <br />
          {oldDesign.analysis.p4}
        </p>
      </section>

      <section className="study-section ">
        <h2 className="section-title">{oldDesign.articleTitle.title}</h2>
        {getBtnImg("./analysis.png")}
        <p className="section-content">
          {oldDesign.analysis.p1}
          <br />
          <br />
          {oldDesign.analysis.p2}
          <br />
          <br />
          {oldDesign.analysis.p3}
          <br />
          <br />
          {oldDesign.analysis.p4}
        </p>
      </section>
    </>
  );
}
