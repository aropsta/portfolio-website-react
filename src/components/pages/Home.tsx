import React, { FormEvent, RefObject, useEffect, useRef, useState, useCallback } from "react";
import { HashLink } from "react-router-hash-link";
import "../../styles/home.scss";
import breakPointObserver from "../../breakPointObserver";
import Form from "../Form";

let quotes = [
  {
    title: "code",
    content:
      "Should be legible and functional first and foremost. Then performant and concise second",
  },
  {
    title: "C/C++",
    content: "My first and most favourite programming languages",
  },
  {
    title: "food",
    content: "LOVE sweets. Hate chilli. Everything else is the same to me",
  },
  {
    title: "my weakness",
    content: "A perfectionist attitute toward things. Can slow down my progress",
  },
  {
    title: "my strength",
    content:
      "Perserverance. Once a decision is made, it will be seen through to its end...Most of the time",
  },
  {
    title: "music",
    content:
      "I played the flute in high school. Can also play piano. Study and work have made me put it away for now. I miss it",
  },
  {
    title: "strawberries",
    content: "I used to think it was the most overrated fruit. That title now belongs to cherries",
  },
  {
    title: "myself",
    content:
      "I try my best not to pretend. I would like to speak my mind as often as I get the chance",
  },
  {
    title: "Linux",
    content: "I use arch btw",
  },
];

let galleryItems = [
  {
    tite: "base apparel",
    site: "https://623c06ff2783f00009e0543c--naughty-visvesvaraya-8e9d40.netlify.app/",
    code: "https://github.com/aropsta/base-apparel-coming-soon_react",
    src: "./my-work/base-apparel.jpg",
  },
  {
    tite: "time tracking dashboard",
    site: "https://61f3836f34bc9a0007fbbacf--jolly-hopper-43a522.netlify.app/",
    code: "https://github.com/aropsta/time-tracking-dashboard-main",
    src: "./my-work/time-tracking.jpg",
  },
  {
    tite: "tip calculator",
    site: "https://aropsta.github.io/tip-calculator-app-main/",
    code: "https://github.com/aropsta/tip-calculator-app-main",
    src: "./my-work/tip-calculator.jpg",
  },
  {
    tite: "four-card feature section",
    site: "https://aropsta.github.io/four-card-feature-section-master/",
    code: "https://github.com/aropsta/four-card-feature-section-master",
    src: "./my-work/four-card.jpg",
  },
  {
    tite: "three-column preview card",
    site: "https://aropsta.github.io/3-column-preview-card-component-main/",
    code: "https://github.com/aropsta/3-column-preview-card-component-main",
    src: "./my-work/three-column.jpg",
  },
  {
    tite: "single price grid component",
    site: "https://aropsta.github.io/single-price-grid-component-master/",
    code: "https://github.com/aropsta/single-price-grid-component-master",
    src: "./my-work/single-price.jpg",
  },
  {
    tite: "order summary component",
    site: "https://aropsta.github.io/order-summary-component-main/",
    code: "https://github.com/aropsta/order-summary-component-main",
    src: "./my-work/order-summary.jpg",
  },
  {
    tite: "my website",
    site: "base apparel",
    code: "base apparel",
    src: "./my-work/my-site.png",
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

  let nextQuote = () => {
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
        <h2 className="section-title">My skills</h2>
        <div className="divider">
          <section className="text-block card blur">
            <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M532 1108l152 152-52 52h-56v-96h-96v-56zm414-390q14 13-3 30l-291 291q-17 17-30 3-14-13 3-30l291-291q17-17 30-3zm-274 690l544-544-288-288-544 544v288h288zm608-608l92-92q28-28 28-68t-28-68l-152-152q-28-28-68-28t-68 28l-92 92zm384-384v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
            </svg>
            <h2 className="title">Design</h2>
            <p>
              UI designer skilled in optimizing work processes to enhance user experiences and
              deliver products that are simple and easy to use
            </p>
          </section>

          <section className="text-block card blur">
            <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-928-896q8-11 21-12.5t24 6.5l51 38q11 8 12.5 21t-6.5 24l-182 243 182 243q8 11 6.5 24t-12.5 21l-51 38q-11 8-24 6.5t-21-12.5l-226-301q-14-19 0-38zm802 301q14 19 0 38l-226 301q-8 11-21 12.5t-24-6.5l-51-38q-11-8-12.5-21t6.5-24l182-243-182-243q-8-11-6.5-24t12.5-21l51-38q11-8 24-6.5t21 12.5zm-620 461q-13-2-20.5-13t-5.5-24l138-831q2-13 13-20.5t24-5.5l63 10q13 2 20.5 13t5.5 24l-138 831q-2 13-13 20.5t-24 5.5z" />
            </svg>
            <h3 className="title">Develop</h3>
            <p>
              Coder who has a keen interest for optimization and performance. Experienced in WCAG
              2.1 with responsiveness and accessibility always in mind
            </p>
          </section>

          <section className="text-block card blur">
            <svg width="69" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M832 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 10 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 9-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z" />
            </svg>
            <h3 className="title">Self-sufficient</h3>
            <p>
              Able to operate autonomously and take initiative when most practical. Always within
              the scope of project outcomes
            </p>
          </section>

          <section className="text-block card blur">
            <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M529 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-1024-1277q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm704 384q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z" />
            </svg>
            <h3 className="title">Collaborate</h3>
            <p>
              I am capable team member, with proven leadership skills in academic roles. Experienced
              in utilizing collaborative tools git and figma jam
            </p>
          </section>
        </div>

        <section className="technical">
          <h3>Tenchincal skills</h3>
          <ul>
            <li className="skill">JavaScript</li>
            <li className="skill">C</li>
            <li className="skill">HTML</li>
            <li className="skill">WAI-ARIA</li>
            <li className="skill">SQL</li>
            <li className="skill">C++</li>
            <li className="skill">UML</li>
            <li className="skill">CSS</li>
            <li className="skill">SASS</li>
            <li className="skill">React</li>
            <li className="skill">TypeScript</li>
            <li className="skill">Java</li>
            <li className="skill">jQuery</li>
            <li className="skill">Git</li>
            <li className="skill">Figma</li>
          </ul>
        </section>
        <a className="cta" href="#work">
          view my work
        </a>
      </section>

      <section className="about-me section">
        <h3 className="section-title">About me</h3>
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
            be used to express I will always be interested,
            <br />
          </p>
          {getImg("bottom")}
        </section>

        <section className="functional">
          <h3>Functional skills</h3>
          <p className="">
            <b>Clear communicative ability</b>—Demonstrated in group projects and previous roles
          </p>
          <p>
            <b>Adaptive Learner</b>—Proven by initiative and drive shown in academic career
          </p>
          <p>
            <b>Strong problem-solving</b> capability—gained from technical and math related units
          </p>
          <p>
            Ability to <b>effectively conceptualize</b> and materialize thoughts and idea’s
          </p>
        </section>
        <section className="questionaire">
          <h3 className="section-title">What I think of...</h3>

          <article className="question-card">
            <p className="title">{quotes[quoteIndex].title}</p>
            <p className="content">"{quotes[quoteIndex].content}"</p>
            <button aria-label="Next quote" onClick={nextQuote}></button>
          </article>
        </section>
      </section>

      <section className="my-work section" id="work">
        <h2 className="section-title">My work</h2>
        <p>A sample of my web projects</p>
        <ul>
          <li>
            <a
              aria-label={`Go to ${galleryItems[0].tite}`}
              target="_black"
              rel="noopener noreferrer"
              href={galleryItems[0].site}>
              <img src="./my-work/base-apparel.jpg" alt="" />
            </a>
          </li>
          <li>
            <a
              aria-label={`Go to ${galleryItems[0].tite}`}
              target="_black"
              rel="noopener noreferrer"
              href={galleryItems[2].site}>
              <img src="./my-work/tip-calculator.jpg" alt="" />
            </a>
          </li>
          <li>
            <a
              aria-label={`Go to ${galleryItems[0].tite}`}
              target="_black"
              rel="noopener noreferrer"
              href={galleryItems[1].site}>
              <img src="./my-work/time-tracking.jpg" alt="" />
            </a>
          </li>
        </ul>
        <HashLink to="/my-work#work-showcase" className="cta">
          view more
        </HashLink>
      </section>

      <section id="contact" className="contact">
        <Form></Form>
      </section>

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

export default Home;
