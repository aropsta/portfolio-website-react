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
        <h1 className="section-title">What I do</h1>
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
              Using a mobile-first approach, I am able to create web pages, either from scratch or
              from a predefined design file or system. I like to prioritise correct semantics and
              accessible html markup according to WAI-ARIA standards
            </p>
          </section>
          <section className="text-block card blur">
            <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M532 1108l152 152-52 52h-56v-96h-96v-56zm414-390q14 13-3 30l-291 291q-17 17-30 3-14-13 3-30l291-291q17-17 30-3zm-274 690l544-544-288-288-544 544v288h288zm608-608l92-92q28-28 28-68t-28-68l-152-152q-28-28-68-28t-68 28l-92 92zm384-384v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
            </svg>
            <h2 className="title">Collaborate</h2>
            <p>
              I am capable team member. I have experience in utilizing collabrative tools such as
              git, and figma’s inbuilt jam system to meet project goals
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
