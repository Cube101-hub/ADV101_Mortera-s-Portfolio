window.Portfolio = window.Portfolio || {};

  window.Portfolio.initializeInteractions = function initializeInteractions({ page, nav, readingProgress }) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

    const carousel = page.querySelector(".about-carousel");
    if (carousel) {
      const track = carousel.querySelector(".carousel-track");
      const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
      const dotsContainer = carousel.querySelector(".carousel-dots");
      const previousButton = carousel.querySelector(".carousel-previous");
      const nextButton = carousel.querySelector(".carousel-next");
      let currentSlide = 0;
      let carouselTimer;

      slides.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Go to photo ${index + 1}`);
        dot.addEventListener("click", () => showSlide(index));
        dotsContainer.append(dot);
      });

      function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        slides.forEach((slide, slideIndex) => {
          slide.setAttribute(
            "aria-hidden",
            slideIndex === currentSlide ? "false" : "true",
          );
        });
        Array.from(dotsContainer.children).forEach((dot, dotIndex) => {
          if (dotIndex === currentSlide) {
            dot.setAttribute("aria-current", "true");
          } else {
            dot.removeAttribute("aria-current");
          }
        });
      }

      function startCarousel() {
        if (!prefersReducedMotion && slides.length > 1) {
          carouselTimer = window.setInterval(() => showSlide(currentSlide + 1), 4500);
        }
      }

      previousButton.addEventListener("click", () => {
        showSlide(currentSlide - 1);
        window.clearInterval(carouselTimer);
        startCarousel();
      });
      nextButton.addEventListener("click", () => {
        showSlide(currentSlide + 1);
        window.clearInterval(carouselTimer);
        startCarousel();
      });
      carousel.addEventListener("mouseenter", () => window.clearInterval(carouselTimer));
      carousel.addEventListener("mouseleave", startCarousel);

      showSlide(0);
      startCarousel();
    }
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

  function setActiveSectionLink(targetId) {
    sectionLinks.forEach((link) => {
      if (targetId && link.hash === `#${targetId}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  setActiveSectionLink("about");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);

        if (activeEntry) {
          setActiveSectionLink(activeEntry.target.id);
          return;
        }

        const visibleSection = observedSections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0;
        });

        if (visibleSection) {
          setActiveSectionLink(visibleSection.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );

    observedSections.forEach((section) => sectionObserver.observe(section));
  } else {
    setActiveSectionLink("about");
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
};
