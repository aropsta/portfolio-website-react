import "../../styles/_case-study.scss";
import breakPointObserver from "../../breakPointObserver";
import React, { useEffect, useState } from "react";

const breakPoints = {
  small: "(max-width:880px)",
  desktop: "(min-width:880px)",
};

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

  let expandImage = (event: React.MouseEvent, src: String | null) => {
    event.preventDefault();

    //if overlay is not already open
    if (!document.getElementById("overlay")) {
      //  document.body.classList.add("disable-scroll");

      //disable scroll  behaviour for body and root
      document.getElementById("root")?.classList.add("disable-scroll");
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
        document.getElementById("root")?.classList.remove("disable-scroll");
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
        {getImg("top")};<h2 className="section-title">Overview</h2>
        <p className="section-content">
          CodeProject is a community for users to view, create and interact with articles on various
          technology and software.
          {returnBreak()}
          <br />
          The aim of this project is to bring this decade-old site up to date with modern UI design
          principles.
          <br />
          <br />A cluttered interface, lack of consistent scaling and many other questionable design
          decisions is what we are set to resolve.
        </p>
        {getImg("bottom")}
      </section>
      <section className="study-section analysis">
        <h2 className="section-title">Analysis - The old design</h2>
        <button
          data-larger="./analysis.png"
          className="img-btn"
          aria-label="Click to enlarge image"
          onClick={(e) => {
            expandImage(e, "./analysis.png");
          }}>
          <img src="./analysis.png" alt="Old design of the home page" />
        </button>
        <p className="section-content">
          One of the first things to stand out to a UI designer would be the contrast, or the lack
          there of. Much of the typography has a similiar styling in terms of weight and colour.
          <br />
          <br />
          The old design correctly used scale and colour to help users discern the visual hierarchy
          on the page. This falls short however and doesn’t provide enough contrast between the
          different elements on the page. An improvment on the design could be incorporating
          different font weights. More details will be provided in the redesign.
          <br />
          <br />
          In terms of visual heirarchy and colour, the old design seems tolerable and may be given a
          pass. The use of whitespace is also apparent and provides acceptable clarity for the
          content of the page. However a great deal is neglected when we consider contrast,
          typographic and content scaling.
          <br />
          <br />
          Let's break things down by section
        </p>
      </section>
    </>
  );
}
