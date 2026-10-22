const styles = `
  :root {
    --color-ink: #23374d;
    --color-muted: #5c6876;
    --color-terracotta: #bd6848;
    --color-blue: #557e9b;
    --color-sage: #648b78;
    --color-gold: #c49a50;
    --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
    --transition-smooth: 420ms var(--ease-smooth);
    color-scheme: light;
    font-family: "Segoe UI", "Helvetica Neue", sans-serif;
    color: var(--color-ink);
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
    transition:
      color var(--transition-smooth),
      background var(--transition-smooth),
      border-color var(--transition-smooth),
      box-shadow var(--transition-smooth),
      opacity var(--transition-smooth),
      transform var(--transition-smooth),
      filter var(--transition-smooth),
      outline-color var(--transition-smooth),
      outline-offset var(--transition-smooth);
  }

  body {
    min-width: 320px;
    margin: 0;
    line-height: 1.7;
    background:
      radial-gradient(ellipse at 5% 15%, rgb(223 205 185 / 28%), transparent 28rem),
      radial-gradient(ellipse at 96% 55%, rgb(191 213 218 / 20%), transparent 30rem),
      #f7f3ec;
  }

  .reading-progress {
    position: fixed;
    inset: 0 auto auto 0;
    z-index: 10;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    background: linear-gradient(90deg, var(--color-terracotta), var(--color-gold), var(--color-sage));
    transition: transform 100ms linear;
    pointer-events: none;
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
    border-bottom: 1px solid rgb(85 126 155 / 24%);
    background: rgb(247 243 236 / 94%);
    backdrop-filter: blur(14px);
  }

  .brand {
    color: var(--color-ink);
    font-size: 1.1rem;
    font-weight: 750;
    letter-spacing: -0.04em;
    text-decoration: none;
    transition: color 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .brand:hover {
    color: #bd6848;
  }

  .nav {
    display: flex;
    gap: clamp(16px, 4vw, 36px);
  }

  .nav a {
    position: relative;
    padding: 8px 0;
    color: var(--color-muted);
    font-size: 0.94rem;
    text-decoration: none;
    transition: color 320ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nav a:focus-visible,
  .brand:focus-visible,
  .button:focus-visible {
    outline: 3px solid #d39b55;
    outline-offset: 5px;
  }

  .nav a:hover {
    transform: translateY(-1px);
  }

  .nav a:hover,
  .nav a[aria-current="location"] {
    color: #23374d;
  }

  .nav a[aria-current="location"]::after {
    position: absolute;
    right: 0;
    bottom: 1px;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: #bd6848;
    content: "";
    transform: scaleX(1);
  }

  .nav a::after {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nav a:hover::after {
    transform: scaleX(1);
  }

  :where(.motion-ready) .reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 850ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 850ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  :where(.motion-ready) .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
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
    border: 1px solid rgb(255 255 255 / 32%);
    border-radius: 28px;
    background:
      radial-gradient(ellipse at 90% 5%, rgb(190 111 78 / 28%), transparent 34%),
      radial-gradient(ellipse at 8% 100%, rgb(91 145 151 / 23%), transparent 42%),
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
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border: 1px solid rgb(189 104 72 / 22%);
    border-radius: 999px;
    background: rgb(189 104 72 / 8%);
    margin: 0 0 18px;
    color: #a65b40;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .hero .eyebrow {
    border-color: rgb(239 182 158 / 28%);
    background: rgb(239 182 158 / 10%);
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
    border: 1px solid #a95438;
    border-radius: 10px;
    background: linear-gradient(135deg, #c77a56, #a95438);
    color: #fff;
    font-size: 0.95rem;
    font-weight: 650;
    text-decoration: none;
    box-shadow: 0 7px 18px rgb(91 48 32 / 14%);
    transition: background 420ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .button:hover {
    transform: translateY(-4px) scale(1.035);
    border-color: #d18a62;
    background: linear-gradient(135deg, #d99570, #b65f40);
    box-shadow: 0 16px 32px rgb(91 48 32 / 28%), 0 0 0 5px rgb(189 104 72 / 12%);
  }

  .button:active {
    transform: translateY(-1px) scale(0.98);
    transition-duration: 140ms;
  }

  .hero-photo {
    position: relative;
    height: 350px;
    overflow: hidden;
    padding: 9px;
    border: 2px solid rgb(239 182 158 / 58%);
    border-radius: 26px;
    background: linear-gradient(145deg, rgb(255 255 255 / 18%), rgb(255 255 255 / 6%));
    box-shadow: 0 20px 45px rgb(8 20 34 / 30%), 0 0 0 6px rgb(239 182 158 / 9%), inset 0 1px rgb(255 255 255 / 30%);
    transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 520ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .hero-photo:hover {
    transform: translateY(-5px) rotate(0.5deg);
    border-color: #efb69e;
    box-shadow: 0 28px 52px rgb(8 20 34 / 36%), 0 0 0 8px rgb(239 182 158 / 13%);
  }

  .hero-photo img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 17px;
    object-fit: cover;
    object-position: center 48%;
    transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 650ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .hero-photo:hover img {
    transform: scale(1.035);
    filter: saturate(1.08);
  }

  .photo-caption {
    position: absolute;
    right: 18px;
    bottom: 18px;
    left: 18px;
    width: fit-content;
    padding: 6px 11px;
    border: 1px solid rgb(255 255 255 / 28%);
    border-radius: 999px;
    background: rgb(23 43 66 / 78%);
    color: #fff;
    font-size: 0.76rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    backdrop-filter: blur(8px);
  }

  .section {
    padding: clamp(58px, 9vw, 92px) 0;
    border-top: 1px solid rgb(85 126 155 / 25%);
  }

  .section-heading {
    position: relative;
    width: fit-content;
    margin-bottom: 30px;
    color: #23374d;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 650;
    letter-spacing: -0.045em;
    line-height: 1.2;
  }

  .section-heading::after {
    display: block;
    width: 48px;
    height: 3px;
    margin-top: 12px;
    border-radius: 3px;
    background: linear-gradient(90deg, #bd6848, #d39b55);
    content: "";
    transition: width 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .section-heading:hover::after {
    width: 82px;
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
    counter-reset: detail-card;
  }

  .detail-card {
    --card-accent: var(--color-terracotta);
    position: relative;
    min-height: 116px;
    padding: 23px 25px;
    overflow: hidden;
    border: 1px solid #e3d9ce;
    border-radius: 14px;
    background: linear-gradient(145deg, rgb(255 255 255 / 94%), rgb(255 255 255 / 74%));
    box-shadow: 0 5px 18px rgb(54 49 41 / 4%);
    transition: transform 460ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 460ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 460ms cubic-bezier(0.22, 1, 0.36, 1),
      background 460ms cubic-bezier(0.22, 1, 0.36, 1);
    counter-increment: detail-card;
  }

  .detail-card:nth-child(4n + 2) {
    --card-accent: var(--color-blue);
  }

  .detail-card:nth-child(4n + 3) {
    --card-accent: var(--color-sage);
  }

  .detail-card:nth-child(4n + 4) {
    --card-accent: var(--color-gold);
  }

  .detail-card::after {
    position: absolute;
    top: 17px;
    right: 20px;
    color: var(--card-accent);
    content: "0" counter(detail-card);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .detail-card::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background: var(--card-accent);
    content: "";
    opacity: 0;
    transition: opacity 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .detail-card:hover {
    transform: translateY(-5px);
    border-color: var(--card-accent);
    background: #fff;
    box-shadow: 0 14px 30px rgb(54 49 41 / 12%);
  }

  .detail-card:hover::before {
    opacity: 1;
  }

  .detail-card:hover .detail-label {
    color: var(--card-accent);
  }

  .detail-label {
    display: block;
    margin-bottom: 7px;
    color: #7b756e;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 360ms cubic-bezier(0.22, 1, 0.36, 1);
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
    border: 1px solid rgb(189 104 72 / 27%);
    border-radius: 22px;
    background:
      radial-gradient(ellipse at 95% 5%, rgb(198 122 89 / 18%), transparent 32%),
      radial-gradient(ellipse at 5% 95%, rgb(85 126 155 / 12%), transparent 38%),
      #efe5da;
    box-shadow: 0 16px 38px rgb(54 49 41 / 7%);
    transition: border-color 420ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .contact-section:hover {
    border-color: rgb(189 104 72 / 55%);
    box-shadow: 0 20px 44px rgb(54 49 41 / 11%);
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
    border-top: 1px solid rgb(85 126 155 / 25%);
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
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }

    :where(.motion-ready) .reveal {
      opacity: 1;
      transform: none;
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

const readingProgress = createElement("div", "reading-progress");
readingProgress.setAttribute("aria-hidden", "true");
document.body.append(readingProgress);

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
heroPhoto.append(
  profileImage,
  createElement("span", "photo-caption", "Davao City · Philippines"),
);
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

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const animatedElements = Array.from(
  page.querySelectorAll(
    ".site-header, .hero > *, .section > *, .detail-card, .site-footer > *",
  ),
);

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  animatedElements.forEach((element) => element.classList.add("reveal"));
  document.documentElement.classList.add("motion-ready");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
  );

  animatedElements.forEach((element) => revealObserver.observe(element));
}

const sectionLinks = Array.from(nav.querySelectorAll("a"));
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        sectionLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-25% 0px -60% 0px" },
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

function updateReadingProgress() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress =
    scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  readingProgress.style.transform = `scaleX(${Math.min(progress, 1)})`;
}

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();
