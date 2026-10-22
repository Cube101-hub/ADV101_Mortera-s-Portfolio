const styles = `
  :root {
    color-scheme: light;
    font-family: "Segoe UI", "Helvetica Neue", sans-serif;
    color: #20312c;
    background: #f5f4ee;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    margin: 0;
    line-height: 1.7;
    background:
      radial-gradient(ellipse at 5% 15%, rgb(222 231 216 / 35%), transparent 28rem),
      #f5f4ee;
  }

  a {
    color: inherit;
  }

  a:focus-visible {
    outline: 3px solid #78a992;
    outline-offset: 4px;
    border-radius: 4px;
  }

  .page {
    width: min(100% - 40px, 1040px);
    margin: 0 auto;
  }

  .site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 82px;
    gap: 24px;
    position: sticky;
    top: 0;
    z-index: 5;
    border-bottom: 1px solid rgb(32 61 50 / 8%);
    background: rgb(245 244 238 / 92%);
    backdrop-filter: blur(14px);
  }

  .brand {
    color: #234c3c;
    font-size: 1.1rem;
    font-weight: 750;
    letter-spacing: -0.04em;
    text-decoration: none;
  }

  .nav {
    display: flex;
    gap: clamp(16px, 4vw, 36px);
  }

  .nav a {
    color: #53635d;
    font-size: 0.94rem;
    text-decoration: none;
    transition: color 160ms ease;
  }

  .nav a:hover {
    color: #234c3c;
  }

  .hero {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(230px, 0.7fr);
    align-items: center;
    gap: 54px;
    min-height: 510px;
    margin-top: 30px;
    padding: clamp(44px, 8vw, 88px);
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 28px;
    background:
      radial-gradient(ellipse at 90% 5%, rgb(129 164 124 / 30%), transparent 34%),
      linear-gradient(125deg, #18382d 0%, #244c3b 58%, #2e5b45 100%);
    box-shadow: 0 24px 65px rgb(31 62 47 / 13%);
    color: #f9faf5;
  }

  .hero::before,
  .hero::after {
    position: absolute;
    z-index: -1;
    border: 1px solid rgb(231 241 224 / 10%);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  .hero::before {
    top: -200px;
    right: -120px;
    width: 520px;
    height: 520px;
  }

  .hero::after {
    top: -140px;
    right: -60px;
    width: 400px;
    height: 400px;
  }

  .eyebrow {
    margin: 0 0 18px;
    color: #547b68;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .hero .eyebrow {
    color: #b9d0b4;
  }

  h1,
  h2,
  p {
    margin-top: 0;
  }

  h1 {
    max-width: 680px;
    margin-bottom: 20px;
    color: #fff;
    font-size: clamp(2.6rem, 7vw, 5.2rem);
    font-weight: 650;
    letter-spacing: -0.065em;
    line-height: 1.06;
  }

  .hero-copy {
    max-width: 570px;
    margin-bottom: 30px;
    color: #d2ded5;
    font-size: clamp(1.05rem, 2vw, 1.2rem);
  }

  .button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    padding: 11px 21px;
    border: 1px solid #315d49;
    border-radius: 8px;
    background: #315d49;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 650;
    text-decoration: none;
    transition: background-color 160ms ease, transform 160ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
    background: #234c3c;
  }

  .hero-note {
    position: relative;
    display: grid;
    min-height: 290px;
    place-content: center;
    padding: 36px;
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 20%);
    border-radius: 24px;
    background: linear-gradient(145deg, rgb(255 255 255 / 13%), rgb(255 255 255 / 5%));
    box-shadow: inset 0 1px rgb(255 255 255 / 13%);
    text-align: center;
  }

  .hero-note-mark {
    position: relative;
    display: grid;
    width: 132px;
    height: 132px;
    place-items: center;
    margin: 0 auto 22px;
    border: 1px solid rgb(255 255 255 / 32%);
    border-radius: 50%;
    background:
      radial-gradient(circle at 34% 28%, rgb(255 255 255 / 28%), transparent 34%),
      linear-gradient(145deg, #aac19d, #75967b);
    box-shadow: 0 16px 35px rgb(11 35 24 / 26%), inset 0 1px rgb(255 255 255 / 40%);
    color: #19372b;
    font-size: 2.6rem;
    font-weight: 800;
    letter-spacing: -0.08em;
  }

  .hero-note-mark::after {
    position: absolute;
    right: -12px;
    bottom: 7px;
    width: 20px;
    height: 20px;
    border: 4px solid #244c3b;
    border-radius: 50%;
    background: #d9c58f;
    content: "";
  }

  .hero-note p {
    margin: 0;
    color: #edf2e9;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
  }

  .section {
    padding: clamp(58px, 9vw, 92px) 0;
    border-top: 1px solid rgb(32 61 50 / 11%);
  }

  .section-heading {
    margin-bottom: 30px;
    color: #203d32;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 650;
    letter-spacing: -0.045em;
    line-height: 1.2;
  }

  .about-copy {
    max-width: 700px;
    margin-bottom: 0;
    color: #596861;
    font-size: 1.08rem;
  }

  .details-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .detail-card {
    position: relative;
    min-height: 116px;
    padding: 23px 25px;
    overflow: hidden;
    border: 1px solid #e8e8df;
    border-radius: 14px;
    background: rgb(255 255 255 / 76%);
    box-shadow: 0 5px 18px rgb(38 59 42 / 3%);
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .detail-card::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3px;
    background: #789477;
    content: "";
    opacity: 0;
    transition: opacity 180ms ease;
  }

  .detail-card:hover {
    transform: translateY(-3px);
    border-color: #d3ddcf;
    box-shadow: 0 12px 28px rgb(38 59 42 / 8%);
  }

  .detail-card:hover::before {
    opacity: 1;
  }

  .detail-label {
    display: block;
    margin-bottom: 7px;
    color: #718078;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .detail-value {
    margin: 0;
    color: #29483a;
    font-size: 1.02rem;
    font-weight: 600;
  }

  .contact-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    margin-bottom: 42px;
    padding: clamp(35px, 6vw, 60px);
    overflow: hidden;
    border: 0;
    border-radius: 22px;
    background:
      radial-gradient(ellipse at 95% 5%, rgb(129 164 124 / 24%), transparent 32%),
      #e8ede3;
  }

  .contact-section::after {
    position: absolute;
    top: -120px;
    right: 14%;
    width: 260px;
    height: 260px;
    border: 1px solid rgb(46 91 69 / 12%);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  .contact-section .section-heading {
    margin-bottom: 10px;
  }

  .contact-copy {
    margin: 0;
    color: #596861;
  }

  .site-footer {
    padding: 23px 0 30px;
    border-top: 1px solid rgb(32 61 50 / 11%);
    color: #718078;
    font-size: 0.88rem;
  }

  .site-footer p {
    margin: 0;
  }

  @media (max-width: 700px) {
    .page {
      width: min(100% - 36px, 560px);
    }

    .site-header {
      min-height: 74px;
    }

    .brand {
      font-size: 1rem;
    }

    .nav {
      gap: 15px;
    }

    .nav a {
      font-size: 0.86rem;
    }

    .hero {
      grid-template-columns: 1fr;
      gap: 34px;
      min-height: auto;
      margin-top: 20px;
      padding: 42px 30px;
      border-radius: 22px;
    }

    .hero-note {
      min-height: 230px;
    }

    .details-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .detail-card {
      min-height: auto;
      padding: 19px 21px;
    }
  }

  @media (max-width: 430px) {
    .site-header {
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
      padding: 13px 0;
    }

    .contact-section {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (max-width: 430px) {
    .hero {
      padding: 36px 23px;
    }

    .hero-note {
      min-height: 205px;
      padding: 26px;
    }

    .hero-note-mark {
      width: 108px;
      height: 108px;
      font-size: 2.2rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function createLink(label, href, className) {
  const link = createElement("a", className, label);
  link.href = href;
  return link;
}

function createDetail(label, value) {
  const card = createElement("div", "detail-card");
  card.append(
    createElement("span", "detail-label", label),
    createElement("p", "detail-value", value),
  );
  return card;
}

const stylesheet = createElement("style");
stylesheet.textContent = styles;
document.head.append(stylesheet);

const page = createElement("div", "page");
const header = createElement("header", "site-header");
const brand = createLink("JLM.", "#home", "brand");
const nav = createElement("nav", "nav");
nav.setAttribute("aria-label", "Main navigation");
nav.append(
  createLink("About", "#about"),
  createLink("Background", "#background"),
  createLink("Contact", "#contact"),
);
header.append(brand, nav);

const main = createElement("main");
const hero = createElement("section", "hero");
hero.id = "home";

const heroContent = createElement("div");
heroContent.append(
  createElement("p", "eyebrow", "BSIT student · Davao City"),
  createElement("h1", "", "Jhames Lawrence V. Mortera"),
  createElement(
    "p",
    "hero-copy",
    "I’m a 20-year-old Information Technology student at Holy Cross of Davao College, learning and growing one step at a time.",
  ),
  createLink("Get in touch", "tel:+639093660602", "button"),
);

const heroNote = createElement("aside", "hero-note");
heroNote.setAttribute("aria-label", "A little about me");
heroNote.append(
  createElement("div", "hero-note-mark", "JM"),
  createElement("p", "", "Curious mind.\nFuture in tech."),
);
heroNote.lastChild.style.whiteSpace = "pre-line";
hero.append(heroContent, heroNote);

const about = createElement("section", "section");
about.id = "about";
about.append(
  createElement("p", "eyebrow", "A little about me"),
  createElement("h2", "section-heading", "Learning today, building for tomorrow."),
  createElement(
    "p",
    "about-copy",
    "I’m Jhames, a BSIT student from Mandug, Davao City. I’m working toward a future in technology and making the most of every opportunity to learn. This is my starting point—and I’m excited for what comes next.",
  ),
);

const background = createElement("section", "section");
background.id = "background";
background.append(
  createElement("p", "eyebrow", "My background"),
  createElement("h2", "section-heading", "The basics"),
);
const details = createElement("div", "details-grid");
details.append(
  createDetail("Full name", "Jhames Lawrence V. Mortera"),
  createDetail("Age", "20 years old"),
  createDetail("Education", "BSIT student"),
  createDetail("School", "Holy Cross of Davao College"),
  createDetail("Location", "Mandug, Davao City"),
);
background.append(details);

const contact = createElement("section", "section contact-section");
contact.id = "contact";
const contactIntro = createElement("div");
contactIntro.append(
  createElement("p", "eyebrow", "Say hello"),
  createElement("h2", "section-heading", "Let’s connect."),
  createElement("p", "contact-copy", "Feel free to reach out by phone."),
);
contact.append(
  contactIntro,
  createLink("Call 0909 366 0602", "tel:+639093660602", "button"),
);

main.append(hero, about, background, contact);

const footer = createElement("footer", "site-footer");
footer.append(
  createElement(
    "p",
    "",
    `© ${new Date().getFullYear()} Jhames Lawrence V. Mortera`,
  ),
);

page.append(header, main, footer);
document.body.append(page);
