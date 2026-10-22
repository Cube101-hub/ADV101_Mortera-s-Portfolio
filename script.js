const styles = `
  :root {
    color-scheme: light;
    font-family: "Segoe UI", "Helvetica Neue", sans-serif;
    color: #263445;
    background: #f7f3ec;
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
      radial-gradient(ellipse at 5% 15%, rgb(223 205 185 / 28%), transparent 28rem),
      #f7f3ec;
  }

  a {
    color: inherit;
  }

  a:focus-visible {
    outline: 3px solid #c77a59;
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
    border-bottom: 1px solid rgb(35 55 77 / 10%);
    background: rgb(247 243 236 / 94%);
    backdrop-filter: blur(14px);
  }

  .brand {
    color: #23374d;
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
    color: #5c6876;
    font-size: 0.94rem;
    text-decoration: none;
    transition: color 160ms ease;
  }

  .nav a:hover {
    color: #23374d;
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
    border: 1px solid rgb(255 255 255 / 14%);
    border-radius: 28px;
    background:
      radial-gradient(ellipse at 90% 5%, rgb(190 111 78 / 28%), transparent 34%),
      linear-gradient(125deg, #172b42 0%, #233b57 58%, #2e4a68 100%);
    box-shadow: 0 24px 65px rgb(35 55 77 / 17%);
    color: #f9faf5;
  }

  .hero::before,
  .hero::after {
    position: absolute;
    z-index: -1;
    border: 1px solid rgb(255 235 218 / 12%);
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
    color: #a65b40;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .hero .eyebrow {
    color: #efb69e;
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
    color: #d8e0e9;
    font-size: clamp(1.05rem, 2vw, 1.2rem);
  }

  .button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    padding: 11px 21px;
    border: 1px solid #bd6848;
    border-radius: 8px;
    background: #bd6848;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 650;
    text-decoration: none;
    transition: background-color 160ms ease, transform 160ms ease;
  }

  .button:hover {
    transform: translateY(-2px);
    background: #a95438;
  }

  .hero-photo {
    height: 350px;
    overflow: hidden;
    padding: 9px;
    border: 1px solid rgb(255 235 218 / 34%);
    border-radius: 24px;
    background: linear-gradient(145deg, rgb(255 255 255 / 18%), rgb(255 255 255 / 6%));
    box-shadow: 0 20px 45px rgb(8 20 34 / 30%), inset 0 1px rgb(255 255 255 / 30%);
  }

  .hero-photo img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 17px;
    object-fit: cover;
    object-position: center 48%;
  }

  .section {
    padding: clamp(58px, 9vw, 92px) 0;
    border-top: 1px solid rgb(35 55 77 / 12%);
  }

  .section-heading {
    margin-bottom: 30px;
    color: #23374d;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 650;
    letter-spacing: -0.045em;
    line-height: 1.2;
  }

  .about-copy {
    max-width: 700px;
    margin-bottom: 0;
    color: #5c6876;
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
    border: 1px solid #e8dfd4;
    border-radius: 14px;
    background: rgb(255 255 255 / 76%);
    box-shadow: 0 5px 18px rgb(54 49 41 / 4%);
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .detail-card::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3px;
    background: #c47756;
    content: "";
    opacity: 0;
    transition: opacity 180ms ease;
  }

  .detail-card:hover {
    transform: translateY(-3px);
    border-color: #dfc7b6;
    box-shadow: 0 12px 28px rgb(54 49 41 / 9%);
  }

  .detail-card:hover::before {
    opacity: 1;
  }

  .detail-label {
    display: block;
    margin-bottom: 7px;
    color: #7b756e;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .detail-value {
    margin: 0;
    color: #2c435b;
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
      radial-gradient(ellipse at 95% 5%, rgb(198 122 89 / 18%), transparent 32%),
      #efe5da;
  }

  .contact-section::after {
    position: absolute;
    top: -120px;
    right: 14%;
    width: 260px;
    height: 260px;
    border: 1px solid rgb(35 55 77 / 13%);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  .contact-section .section-heading {
    margin-bottom: 10px;
  }

  .contact-copy {
    margin: 0;
    color: #5c6876;
  }

  .site-footer {
    padding: 23px 0 30px;
    border-top: 1px solid rgb(35 55 77 / 12%);
    color: #7b756e;
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

    .hero-photo {
      width: min(100%, 350px);
      height: 320px;
      justify-self: center;
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

const heroPhoto = createElement("div", "hero-photo");
const profileImage = createElement("img");
profileImage.src = "assets/profile.jpg";
profileImage.alt = "Jhames Lawrence by the sea";
heroPhoto.append(profileImage);
hero.append(heroContent, heroPhoto);

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
