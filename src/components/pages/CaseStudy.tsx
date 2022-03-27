import "../../styles/_case-study.scss";
import breakPointObserver from "../../breakPointObserver";
import React, { ChangeEventHandler, FormEvent, FormEventHandler, useEffect, useState } from "react";

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
  const [buttonVisible, setVisibile] = useState(false);
  const [contentsVisible, setContents] = useState(false);
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);

  const closeContents = () => {
    setContents(false);
  };

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

  let getBtnImg = (src: string, cName: string) => {
    return (
      <button
        data-larger={src}
        className="img-btn"
        aria-label="Click to enlarge image"
        onClick={(e) => {
          expandImage(e, src);
        }}>
        <img
          className={cName}
          width={100}
          height={100}
          src={src}
          alt="Old design of the home page"
        />
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

  let backToTop = () => {
    window.scrollTo(0, 0);
  };

  let showButton = () => {
    if (!buttonVisible) {
      return <></>;
    } else
      return (
        <button aria-label="Back to top" onClick={backToTop} className="back-to-top">
          <svg
            aria-hidden="true"
            focusable="false"
            width="64"
            height="64"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className="blur"
              fill="#516163"
              d="M1293 1139l102-102q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l307-307 307 307q19 19 45 19t45-19zm371-243q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
            />
          </svg>
        </button>
      );
  };

  let contentsBanner = () => {
    if (breakPoint === "small") {
      if (!contentsVisible) {
        document.body.classList.remove("disable-scroll");
        return (
          <button className="tbc" onClick={() => setContents(true)}>
            Table of contents
          </button>
        );
      } else {
        document.body.classList.add("disable-scroll");
        return <></>;
      }
    } else return <></>;
  };

  let contentsCloseBtn = () => {
    if (breakPoint === "small")
      return (
        <button
          aria-label="Close Table of contents"
          onClick={closeContents}
          className={`${contentsVisible ? "btn-hide" : "btn-show"}`}>
          <svg
            aria-hidden="true"
            focusable="false"
            width="42"
            height="42"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" />
          </svg>
        </button>
      );
    else return <></>;
  };

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 1000) {
      setVisibile(true);
    } else setVisibile(false);
  });

  const getClass = () => {
    if (breakPoint === "small") {
      if (contentsVisible) return "show";
      else return "hidden";
    }
  };

  const imageSlider = () => {
    const slide = (e: React.ChangeEvent) => {
      const input = e.target as HTMLInputElement;
      const clippedImg = document.querySelector(".img2") as HTMLImageElement;

      const newValue = `${input.value}%`;
      clippedImg.style.setProperty("--exposure", newValue);
    };
    return (
      <div className="img-compare">
        <img className="img1" src="./new-design1.png" alt="Old website design" />
        <span className="wrapper">
          <img className="img2" src="./old-design1.png" alt="New website design" />
        </span>
        <label>
          <span className="sr-only">Select what percentage of old image to show</span>
          <input onChange={(e) => slide(e)} type="range" min={0} max={100} />
        </label>
      </div>
    );
  };
  let counter = [0, 1, 2];
  const imageItems = [
    {
      tite: "AdoredTv",
      site: "https://adoredtv.com/",
      src: "./adoredtv.png",
    },
    {
      tite: "The Verge",
      site: "https://www.theverge.com/tech",
      src: "./theverge.png",
    },
    {
      tite: "ANANDTECH",
      site: "https://www.anandtech.com/",
      src: "./anandtech.png",
    },
  ];
  const [active, setActiveSite] = useState(0);

  let nextGalleryItem = () => {
    if (active < imageItems.length - 1) {
      return setActiveSite((previous) => previous + 1);
    } else setActiveSite(0);
  };
  let counterClick = (index: number) => {
    setActiveSite(index);
  };
  let prevGalleryItem = () => {
    if (active > 0) {
      return setActiveSite((previous) => previous - 1);
    } else setActiveSite(imageItems.length - 1);
  };
  let getFillColour = (index: number) => {
    if (active === index) return "#ffcc00";
    else return "#000000";
  };

  const imgGallery = () => {
    return (
      <section className="image-gallery2">
        <h2>{imageItems[active].tite} </h2>
        <img src={imageItems[active].src} alt="click to enlarge image" />

        <button onClick={nextGalleryItem} className="next"></button>
        <button onClick={prevGalleryItem} className="prev"></button>
        <span className="counter">
          {counter.map((item, index) => {
            return (
              <svg
                key={index}
                onClick={() => counterClick(index)}
                width="24"
                height="24"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill={getFillColour(index)}
                  d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                />
              </svg>
            );
          })}
        </span>
      </section>
    );
  };
  return (
    <>
      <h1 className="main-title">Code project | website redesign</h1>
      <main className="order">
        {contentsBanner()}
        <section className={`contents ${getClass()}`}>
          {contentsCloseBtn()}
          <h2 className="title-contents">Table of contents</h2>
          <ul>
            <li>
              <h2 className="title">1 Introduction</h2>
              <ul>
                <a onClick={closeContents} href="#overview" className="sub-title">
                  1.1 Overview
                </a>
              </ul>
            </li>

            <li>
              <h2 className="title">2 The old design</h2>
              <ul>
                <a onClick={closeContents} href="#analysis" className="sub-title">
                  2.1 Analysis
                </a>
                <a onClick={closeContents} href="#article-title" className="sub-title">
                  2.2 Article title
                </a>
                <a onClick={closeContents} href="#author-section" className="sub-title">
                  2.3 Author section
                </a>
                <a onClick={closeContents} href="#body" className="sub-title">
                  2.4 The body
                </a>
                <a onClick={closeContents} href="#comments" className="sub-title">
                  2.5 Commnets and discussions
                </a>
                <a onClick={closeContents} href="#aside" className="sub-title">
                  2.6 Article aside
                </a>
                <a onClick={closeContents} href="#footer" className="sub-title">
                  2.7 Footer
                </a>
              </ul>
            </li>

            <li>
              <h2 className="title">3 The redesign</h2>

              <ul>
                <a onClick={closeContents} href="#redesign" className="sub-title">
                  3.1 Updated and improved
                </a>
                <a onClick={closeContents} href="#research" className="sub-title">
                  3.2 Research
                </a>
                <a onClick={closeContents} href="#conclusions" className="sub-title">
                  3.3 Research conclusions
                </a>
                <a onClick={closeContents} href="#wireframe" className="sub-title">
                  3.4 Wireframe stage
                </a>
                <a onClick={closeContents} href="#navigation" className="sub-title">
                  3.5 Navigation
                </a>
                <a onClick={closeContents} href="#header" className="sub-title">
                  3.6 Article header
                </a>
                <a onClick={closeContents} href="#new-body" className="sub-title">
                  3.7 The body
                </a>
                <a onClick={closeContents} href="#article-footer" className="sub-title">
                  3.8 Article Footer
                </a>
                <a onClick={closeContents} href="#new-author" className="sub-title">
                  3.9 About section
                </a>
                <a onClick={closeContents} href="#new-comments" className="sub-title">
                  3.10 Comments and discussions
                </a>
                <a onClick={closeContents} href="#new-footer" className="sub-title">
                  3.11 Footer
                </a>
                <a onClick={closeContents} href="#finale" className="sub-title">
                  3.12 Final thoughts
                </a>
              </ul>
            </li>
          </ul>
        </section>

        <section className="case-study">
          <section className="overview study-section">
            {getImg("top")}
            <h2 id="overview" className="section-title">
              {oldDesign.overview.title}
            </h2>
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
            <h2 id="analysis" className="section-title">
              {oldDesign.analysis.title}
            </h2>
            {getBtnImg("./analysis.png", "analysis-img")}
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
            <h2 id="article-title" className="section-title">
              {oldDesign.articleTitle.title}
            </h2>
            <p className="section-content">{oldDesign.articleTitle.p1}</p>
          </section>

          <section className="study-section author-section">
            <h2 id="author-section" className="section-title">
              {oldDesign.authorSection.title}
            </h2>
            {getBtnImg("./author-section.png", "author-img")}

            <p className="section-content">
              {oldDesign.authorSection.p1}
              <br />
              <br />
              {oldDesign.authorSection.p2}
              <br />
              <br />
            </p>
            <div>
              <p className="section-content">
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
              </p>

              {getBtnImg("./about-the-author.png", "author-img2")}
            </div>
            <p className="section-content">
              <br />
              <br />
              {oldDesign.authorSection.p7}
              <br />
              <br />
              {oldDesign.authorSection.p8}
            </p>
          </section>

          <section className="study-section body">
            <h2 id="body" className="section-title">
              {oldDesign.body.title}
            </h2>
            <div>
              <p className="section-content">
                {oldDesign.body.p1}
                <br />
                <br />
                {oldDesign.body.p2}
                <br />
                <br />
                {oldDesign.body.p3}
              </p>
              {getBtnImg("./body.png", "body-img")}
            </div>
          </section>

          <section className="study-section comments">
            <h2 id="comments" className="section-title">
              {oldDesign.comments.title}
            </h2>
            <p className="section-content">{oldDesign.comments.p1}</p>
            <div>
              <p className="section-content">
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
              </p>
              {getBtnImg("./comments.png", "comments-img")}
            </div>

            <p className="section-content">
              {oldDesign.comments.p7}
              <br />
              <br />
              {oldDesign.comments.p8}
              <br />
              <br />
              {oldDesign.comments.p9}
              <br />
              <br />
              {oldDesign.comments.p10}
              <br />
              <br />
              {oldDesign.comments.p11}
            </p>
          </section>

          <section className="study-section article-aside">
            <h2 id="aside" className="section-title">
              {oldDesign.aside.title}
            </h2>
            <p className="section-content">
              {oldDesign.aside.p1}
              <br />
              <br />
              {oldDesign.aside.p2}
            </p>

            {getBtnImg("./aside.png", "aside-img")}
          </section>

          <section className="study-section article-footer">
            <h2 id="footer" className="section-title">
              {oldDesign.footer.title}
            </h2>
            <p className="section-content">
              {oldDesign.footer.p1}
              <br />
              <br />
              {oldDesign.footer.p2}
              <br />
              <br />
              {oldDesign.footer.p3}
            </p>
            {getBtnImg("./footer.png", "footer-img")}
            <p className="section-content">
              <br />
              {oldDesign.footer.p4}
            </p>
          </section>

          <h2 id="redesign" className="improved">
            <span className="sr-only">The improved design</span>The codeproject.com
          </h2>
          {imageSlider()}
          {/* {getBtnImg("./newdesign-1.png")}
          {getBtnImg("./newdesign-2.png")}
          {getBtnImg("./newdesign-3.png")} */}
          <section className="study-section research">
            <h2 id="research" className="section-title">
              {newDesign.research.title}
            </h2>
            <p className="section-content">
              {newDesign.research.p1}
              <br />
              <br />
              {newDesign.research.p2}
            </p>
            {imgGallery()}
            <p className="section-content">
              {newDesign.research.p3}
              <br />
            </p>
            {/*Image button make*/}
            <p className="section-content">{newDesign.research.p4}</p>
          </section>
          <section className="study-section conclusions">
            <h2 id="conclusions" className="section-title">
              {newDesign.conclusions.title}
            </h2>
            <p className="section-content">
              {newDesign.conclusions.p1}
              <br />
              <br />
              {newDesign.conclusions.p2}
              <br />
              <br />
              {newDesign.conclusions.p3}
              <br />
              <br />
              {newDesign.conclusions.p4}
              <br />
              <br />
              {newDesign.conclusions.p5}
              <br />
              <br />
              {newDesign.conclusions.p6}
              <br />
              <br />
              {newDesign.conclusions.p7}
              <br />
              <br />
              {newDesign.conclusions.p8}
              <br />
              <br />
              {newDesign.conclusions.p9}
              <br />
              <br />
              {newDesign.conclusions.p10}
              <br />
              <br />
              {newDesign.conclusions.p11}
            </p>
          </section>
          <section className="study-section wireframe">
            <h2 id="wireframe" className="section-title">
              {newDesign.wireframe.title}
            </h2>
            {getBtnImg("./wireframe.jpg", "wireframe-img")}
            <p className="section-content">
              {newDesign.wireframe.p1}
              <br />
              {newDesign.wireframe.p2}
              <br />
              <br />
              {newDesign.wireframe.p3}
              <br />
              {newDesign.wireframe.p4}
              <br />
              <br />
              {newDesign.wireframe.p5}
            </p>
          </section>
          <section className="study-section navigation">
            <h2 id="navigation" className="section-title">
              {newDesign.navigation.title}
            </h2>
            {getBtnImg("./new-header.png", "new-header-img")}
            <p className="section-content">
              {newDesign.navigation.p1}
              <br />
              <br />
              {newDesign.navigation.p2}
              <br />
              <br />
              {newDesign.navigation.p3}
              <br />
              <br />
              {newDesign.navigation.p4}
              <br />
              <br />
              {newDesign.navigation.p5}
              <br />
              <br />
              {newDesign.navigation.p6}
            </p>
          </section>
          <section className="study-section header">
            <h2 id="header" className="section-title">
              {newDesign.header.title}
            </h2>
            {getBtnImg("./new-header2.png", "new-header2-img")}
            <p className="section-content">
              {newDesign.header.p1}
              <br />
              <br />
              {newDesign.header.p2}
              <br />
              <br />
              {newDesign.header.p3}
            </p>
          </section>
          <section className="study-section new-body">
            <h2 id="new-body" className="section-title">
              {newDesign.body.title}
            </h2>
            {getBtnImg("./new-body.png", "new-body-img")}
            <p className="section-content">
              {newDesign.body.p1}
              <br />
              <br />
              {newDesign.body.p2}
              <br />
              <br />
              {newDesign.body.p3}
              <br />
              <br />
              {newDesign.body.p4}
            </p>
          </section>
          <section className="study-section new-article-footer">
            <h2 id="article-footer" className="section-title">
              {newDesign.articleFooter.title}
            </h2>
            {getBtnImg("./share.png", "share-img")}
            <p className="section-content">
              {newDesign.articleFooter.p1}
              <br />
              <br />
              {newDesign.articleFooter.p2}
              <br />
              <br />
              {newDesign.articleFooter.p3}
            </p>
          </section>
          <section className="study-section about">
            <h2 id="new-author" className="section-title">
              {newDesign.about.title}
            </h2>
            {getBtnImg("./new-about-author.png", "new-author-img")}
            <p className="section-content">
              {newDesign.about.p1}
              <br />
              <br />
              {newDesign.about.p2}
              <br />
              <br />
              {newDesign.about.p3}
              <br />
              <br />
              {newDesign.about.p4}
            </p>
          </section>
          <section className="study-section new-comments">
            <h2 id="new-comments" className="section-title">
              {newDesign.comments.title}
            </h2>
            {getBtnImg("./new-comments.png", "new-comments-img")}
            <p className="section-content">
              {newDesign.comments.p1}
              <br />
              <br />
              {newDesign.comments.p2}
              <br />
              <br />
              {newDesign.comments.p3}
              <br />
              <br />
              {newDesign.comments.p4}
              <br />
              <br />
              {newDesign.comments.p5}
              <br />
              <br />
              {newDesign.comments.p6}
              <br />
              <br />
              {newDesign.comments.p7}
              <br />
              <br />
              {newDesign.comments.p8}
              <br />
              <br />
              {newDesign.comments.p9}
              <br />
              <br />
              {newDesign.comments.p10}
              <br />
              <br />
              {newDesign.comments.p11}
              <br />
              <br />
              {newDesign.comments.p12}
              <br />
              <br />
              {newDesign.comments.p13}
              <br />
              <br />
              {newDesign.comments.p14}
              <br />
              <br />
              {newDesign.comments.p15}
              <br />
              <br />
              {newDesign.comments.p16}
              <br />
              <br />
              {newDesign.comments.p17}
              <br />
              <br />
              {newDesign.comments.p18}
              <br />
              <br />
              {newDesign.comments.p19}
            </p>
          </section>
          <section className="study-section new-footer">
            <h2 id="new-footer" className="section-title">
              {newDesign.footer.title}
            </h2>
            {getBtnImg("./new-footer.png", "new-footer-img")}
            <p className="section-content">
              {newDesign.footer.p1}
              <br />
              <br />
              {newDesign.footer.p2}
              <br />
              <br />
              {newDesign.footer.p3}
              <br />
              <br />
              {newDesign.footer.p4}
              <br />
              <br />
              {newDesign.footer.p5}
              <br />
              <br />
              {newDesign.footer.p6}
            </p>
          </section>
          <section className="study-section finale">
            <h2 id="finale" className="section-title">
              {newDesign.finale.title}
            </h2>
            <p className="section-content">
              {newDesign.finale.p1}
              <br />
              <br />
              {newDesign.finale.p2}
              <br />
              <br />
              {newDesign.finale.p3}
              <br />
              <br />
              {newDesign.finale.p4}
              <br />
              <br />
              {newDesign.finale.p5}
            </p>
          </section>
          {showButton()}
        </section>
      </main>

      <footer>
        <a
          href="https://www.linkedin.com/in/arob-d-90ba60192/"
          target="_blank"
          rel="noopener noreferrer">
          <span className="sr-only">LinkedIn</span>
          <svg
            width="64"
            height="64"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false">
            <path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
          </svg>
        </a>
        <a href="https://github.com/aropsta" target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Github</span>
          <svg
            width="64"
            height="64"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false">
            <path d="M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5t-203.5 84.5h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5h-224q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
          </svg>
        </a>
      </footer>
    </>
  );
}
