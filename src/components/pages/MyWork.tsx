import React, { useState } from "react";
import "../../styles/_my-work.scss";

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

let counter = [0, 1, 2, 3, 4, 5, 6, 7];
export default function MyWork() {
  const [active, setActiveSite] = useState(0);

  let nextGalleryItem = () => {
    if (active < galleryItems.length - 1) {
      return setActiveSite((previous) => previous + 1);
    } else setActiveSite(0);
  };

  let prevGalleryItem = () => {
    if (active > 0) {
      return setActiveSite((previous) => previous - 1);
    } else setActiveSite(galleryItems.length - 1);
  };

  let getFillColour = (index: number) => {
    if (active === index) return "#ffcc00";
    else return "#000000";
  };

  let counterClick = (index: number) => {
    setActiveSite(index);
  };
  return (
    <>
      <main className="my-work-main">
        <header className="">
          <h1>Work showcase gallary </h1>
          <p>
            All sites are fully responsive and look great on all screen sizes and modern browsers
          </p>
        </header>

        <h2>{galleryItems[active].tite} </h2>
        <section className="image-gallery">
          <img src={galleryItems[active].src} alt="click to enlarge image" />

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
        <a href={galleryItems[active].site} target="_black" rel="noopener noreferrer">
          website <img src="./external-link.svg" alt="new window" width={16} height={16} />
        </a>
        <a href={galleryItems[active].code} target="_black" rel="noopener noreferrer">
          code <img src="./external-link.svg" alt="new window" width={16} height={16} />
        </a>
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
