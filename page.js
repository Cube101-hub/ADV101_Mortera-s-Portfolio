window.Portfolio = window.Portfolio || {};

  window.Portfolio.renderPage = function renderPage() {
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
    createLink("GitHub", "#github"),
    createLink("Contact", "#contact"),
  );
  header.append(brand, nav);

  const main = createElement("main");
  const hero = createElement("section", "hero");
  hero.id = "home";

  const heroContent = createElement("div", "hero-content");
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
  const heroHighlights = createElement("div", "hero-highlights");
  const ageHighlight = createElement("div", "hero-highlight");
  ageHighlight.append(
    createElement("strong", "", "20"),
    createElement("span", "", "years old"),
  );
  const studentHighlight = createElement("div", "hero-highlight");
  studentHighlight.append(
    createElement("strong", "", "BSIT"),
    createElement("span", "", "student"),
  );
  const locationHighlight = createElement("div", "hero-highlight");
  locationHighlight.append(
    createElement("strong", "", "Davao"),
    createElement("span", "", "Philippines"),
  );
  heroHighlights.append(ageHighlight, studentHighlight, locationHighlight);
  heroContent.append(heroHighlights);

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
  const aboutText = createElement("div", "about-text");
  aboutText.append(
    createElement("p", "eyebrow", "A little about me"),
    createElement("h2", "section-heading", "Learning today, building for tomorrow."),
    createElement(
      "p",
      "about-copy",
      "I’m Jhames, a BSIT student from Mandug, Davao City. I’m working toward a future in technology and making the most of every opportunity to learn. This is my starting point—and I’m excited for what comes next.",
    ),
  );

  const carousel = createElement("div", "about-carousel");
  carousel.setAttribute("aria-label", "Photo carousel");
  carousel.setAttribute("aria-roledescription", "carousel");

  const carouselTrack = createElement("div", "carousel-track");
  const photos = [
    { src: "assets/profile.jpg", alt: "Jhames Lawrence portrait" },
  ];

  photos.forEach((photo, index) => {
    const slide = createElement("figure", "carousel-slide");
    slide.setAttribute("aria-hidden", index === 0 ? "false" : "true");
    const image = createElement("img");
    image.src = photo.src;
    image.alt = photo.alt;
    image.loading = index === 0 ? "eager" : "lazy";
    slide.append(image);
    carouselTrack.append(slide);
  });

  const carouselControls = createElement("div", "carousel-controls");
  const previousButton = createElement("button", "carousel-button carousel-previous", "‹");
  previousButton.type = "button";
  previousButton.setAttribute("aria-label", "Previous photo");
  const carouselDots = createElement("div", "carousel-dots");
  const nextButton = createElement("button", "carousel-button carousel-next", "›");
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Next photo");
  carouselControls.append(previousButton, carouselDots, nextButton);
  carousel.append(carouselTrack, carouselControls);

  const aboutLayout = createElement("div", "about-layout");
  aboutLayout.append(aboutText, carousel);
  about.append(aboutLayout);

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

  const github = createElement("section", "section contact-section github-section");
  github.id = "github";
  const githubIntro = createElement("div");
  githubIntro.append(
    createElement("p", "eyebrow", "My work"),
    createElement("h2", "section-heading", "Visit my GitHub."),
    createElement(
      "p",
      "contact-copy",
      "Explore my repositories, projects, and learning journey on GitHub.",
    ),
  );
  const githubLink = createLink(
    "Visit GitHub Profile",
    "https://github.com/Cube101-hub",
    "button",
  );
  githubLink.target = "_blank";
  githubLink.rel = "noopener noreferrer";
  github.append(githubIntro, githubLink);

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

  main.append(hero, about, background, github, contact);

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

    return { page, nav, readingProgress };
};
