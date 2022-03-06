import { getByTitle } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import breakPointObserver from "../../breakPointObserver";
import "../../styles/_home.scss";
import Header from "../Header";

let quotes = [
  {
    title: "code",
    content:
      "It is easy to sit up and take notice, what’s difficult is getting up adn taking action",
  },
  {
    title: "bro",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis illum quam sequi praesentium totam necessitatibus impedit eveniet quisquam itaque.",
  },
  {
    title: "kent",
    content:
      "It is easy to sit up and take notice, what’s difficult is getting up adn taking action",
  },
  {
    title: "meant",
    content:
      "It is easy to sit up and take notice, what’s difficult is getting up adn taking action",
  },
];
const breakPoints = {
  small: "(max-width:880px)",
  desktop: "(min-width:880px)",
};

function Home() {
  let [quoteIndex, setIndex] = useState(0);
  const [breakPoint, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);

  let getTitle = () => {
    return quotes[quoteIndex].title;
  };
  let getContent = () => {
    return quotes[quoteIndex].content;
  };

  let nextQuote = () => {
    console.log("Passing: " + quoteIndex);
    if (quoteIndex < quotes.length - 1) {
      return setIndex((previous) => previous + 1);
    } else setIndex(0);
  };

  let getImg = (where: String) => {
    switch (where) {
      case "top": {
        if (breakPoint === "small") {
          return <img src="./portrait.jpg" alt="" />;
        } else return <></>;
      }
      case "bottom": {
        if (breakPoint === "small") return <></>;
        else return <img src="./portrait.jpg" alt="" />;

        break;
      }
    }
    if (breakPoint === "small") {
      return <img src="./portrait.jpg" alt="" />;
    }
  };
  return (
    <>
      <section className="photo-section">
        <h1 className="blur">
          Hi! I'm <span>Arob</span>
        </h1>
        <img src="./mobile-avatar.png" alt="" />
        <p className="blur"> &lt; Front-end Developer &gt;</p>
      </section>

      <section className="introduction-section section">
        <h1 className="section-title">My skills</h1>
        <div className="divider">
          <section className="text-block card blur">
            <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M532 1108l152 152-52 52h-56v-96h-96v-56zm414-390q14 13-3 30l-291 291q-17 17-30 3-14-13 3-30l291-291q17-17 30-3zm-274 690l544-544-288-288-544 544v288h288zm608-608l92-92q28-28 28-68t-28-68l-152-152q-28-28-68-28t-68 28l-92 92zm384-384v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
            </svg>
            <h2 className="title">Design</h2>
            <p>
              I can create mockups, wireframes, basic logos or design system, based on an underlying
              product image
            </p>
          </section>

          <section className="text-block card blur">
            <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-928-896q8-11 21-12.5t24 6.5l51 38q11 8 12.5 21t-6.5 24l-182 243 182 243q8 11 6.5 24t-12.5 21l-51 38q-11 8-24 6.5t-21-12.5l-226-301q-14-19 0-38zm802 301q14 19 0 38l-226 301q-8 11-21 12.5t-24-6.5l-51-38q-11-8-12.5-21t6.5-24l182-243-182-243q-8-11-6.5-24t12.5-21l51-38q11-8 24-6.5t21 12.5zm-620 461q-13-2-20.5-13t-5.5-24l138-831q2-13 13-20.5t24-5.5l63 10q13 2 20.5 13t5.5 24l-138 831q-2 13-13 20.5t-24 5.5z" />
            </svg>
            <h2 className="title">Develop</h2>
            <p>
              Solid development foundation in various technolgies: <b>Typescript</b>, <b>Reactjs</b>{" "}
              Javascript, semnatic and accessible HTML, css <b>and much more</b> (refer to resume)
            </p>
          </section>
          <section className="text-block card blur">
            <svg width="69" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M832 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 10 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 9-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
            </svg>
            <h2 className="title">Self-sufficient</h2>
            <p>
              Can operate autonomously with little direction, take the inititive to make decsions
              and escalte/inquire when required. All according to project outcomes
            </p>
          </section>
          <section className="text-block card blur">
            <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M529 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-1024-1277q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm704 384q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z" />
            </svg>
            <h2 className="title">Collaborate</h2>
            <p>
              I am capable team member, with proven leadership skills in academic roles. Experienced
              in utilizing collabrative tools git and figma jam
            </p>
          </section>
        </div>
        <a className="cta">view my work</a>
      </section>

      <section className="about-me section">
        <h1 className="section-title">About me</h1>
        <section className="description">
          {getImg("top")}
          <p>
            There has always been so much that I want to express. But have been limited through my
            lack of knowledge and skills.
            <br />
            <br />
            From a young age this had led me persue those things that would help me build myself and
            better express myself.
            <br />
            <br />
            From coding to drawing, playing and creating music, and even math and science. If it can
            be used to express, I will always be interested,
            <br />
          </p>
          {getImg("bottom")}
        </section>

        <section className="questionaire">
          <h2>What I think of...</h2>

          <article className="question-card">
            <p className="title">{getTitle()}</p>
            <p className="content">"{getContent()}"</p>
            <button onClick={nextQuote}></button>
          </article>
        </section>
      </section>
    </>
  );
}

export default Home;
