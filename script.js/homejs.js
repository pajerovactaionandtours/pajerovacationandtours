/* =========================================================
   HOME / GLOBAL JS
   Clean full version
========================================================= */


const music = document.getElementById("bgmusic");

function startMusic() {
  music.play().catch(() => {});
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("scroll", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("keydown", startMusic, { once: true });

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  /* ================= HERO SLIDER ================= */
  const heroSlides = document.querySelectorAll(".hero-slide");

  if (heroSlides.length) {
    let heroIndex = 0;

    setInterval(() => {
      heroSlides[heroIndex].classList.remove("active");
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add("active");
    }, 4000);
  }

  /* ================= TESTIMONIAL SLIDER ================= */
  const tsTrack = document.querySelector(".ts-track");
  const tsDots = document.querySelectorAll(".ts-dots span");

  if (tsTrack && tsDots.length) {
    let tsIndex = 0;

    function showTestimonialSlide(i) {
      tsTrack.style.transform = `translateX(-${i * 100}%)`;
      tsDots.forEach(dot => dot.classList.remove("active"));
      tsDots[i].classList.add("active");
    }

    setInterval(() => {
      tsIndex = (tsIndex + 1) % tsDots.length;
      showTestimonialSlide(tsIndex);
    }, 4000);

    tsDots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        tsIndex = i;
        showTestimonialSlide(tsIndex);
      });
    });
  }

  /* ================= HOW WE WORK ANIMATION ================= */
  const elements = document.querySelectorAll(".how-text, .how-image");

  if (elements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));
  }

  /* ================= STEP ANIMATION ================= */
  const steps = document.querySelectorAll(".hiw-step");

  if (steps.length) {
    function revealSteps() {
      steps.forEach(step => {
        const top = step.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          step.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", revealSteps);
    revealSteps();
  }

  /* ================= HOW IT WORKS IMAGE SLIDER ================= */
  const hiwTrack = document.querySelector(".hiw-track");
  const hiwSlides = document.querySelectorAll(".hiw-track img");

  if (hiwTrack && hiwSlides.length) {
    let hiwIndex = 0;
    const totalHiwSlides = hiwSlides.length;

    function moveHiwSlider() {
      hiwIndex = (hiwIndex + 1) % totalHiwSlides;
      hiwTrack.style.transform = `translateX(-${hiwIndex * 100}%)`;
    }

    setInterval(moveHiwSlider, 4000);
  }

  /* ================= MOBILE NAV ================= */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    navItems.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });
  }

  /* ================= REVIEW SLIDER ================= */
  const reviewTrack = document.querySelector(".reviews-track");
  const reviewSlides = document.querySelectorAll(".review-card");
  const nextBtn = document.querySelector(".review-btn.next");
  const prevBtn = document.querySelector(".review-btn.prev");

  if (reviewTrack && reviewSlides.length && nextBtn && prevBtn) {
    let reviewIndex = 0;
    const totalReviewSlides = reviewSlides.length;

    function updateReviewSlider() {
      reviewTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      reviewIndex = (reviewIndex + 1) % totalReviewSlides;
      updateReviewSlider();
    });

    prevBtn.addEventListener("click", () => {
      reviewIndex = (reviewIndex - 1 + totalReviewSlides) % totalReviewSlides;
      updateReviewSlider();
    });

    setInterval(() => {
      reviewIndex = (reviewIndex + 1) % totalReviewSlides;
      updateReviewSlider();
    }, 6000);
  }

  /* ================= ALL TOURS ================= */
  const tours = [
    {
      title: "Dunn’s River Falls Adventure",
      meta: "Waterfalls • Family friendly • 4-6 hours",
      price: "From $79",
      link: "contact.html",
      images: [
        "images/tours/tour1-1.jpg",
        "images/tours/tour1-2.jpg",
        "images/tours/tour1-3.jpg"
      ]
    },
    {
      title: "Blue Hole & Secret Falls",
      meta: "Nature • Swim spots • Half-day",
      price: "From $89",
      link: "contact.html",
      images: [
        "images/tours/tour2-1.jpg",
        "images/tours/tour2-2.jpg",
        "images/tours/tour2-3.jpg"
      ]
    },
    {
      title: "Negril Beach Day Trip",
      meta: "Beach • Sunset • Chill day",
      price: "From $69",
      link: "contact.html",
      images: [
        "images/tours/tour3-1.jpg",
        "images/tours/tour3-2.jpg",
        "images/tours/tour3-3.jpg"
      ]
    },
    {
      title: "Bob Marley Museum Experience",
      meta: "Culture • Guided tour • 2-4 hours",
      price: "From $59",
      link: "contact.html",
      images: [
        "images/tours/tour4-1.jpg",
        "images/tours/tour4-2.jpg",
        "images/tours/tour4-3.jpg"
      ]
    },
    {
      title: "ATV Jungle Ride",
      meta: "Adventure • Off-road • 2-3 hours",
      price: "From $99",
      link: "contact.html",
      images: [
        "images/tours/tour5-1.jpg",
        "images/tours/tour5-2.jpg",
        "images/tours/tour5-3.jpg"
      ]
    },
    {
      title: "River Rafting (Bamboo Raft)",
      meta: "Relax • Scenic river • 2-3 hours",
      price: "From $85",
      link: "contact.html",
      images: [
        "images/tours/tour6-1.jpg",
        "images/tours/tour6-2.jpg",
        "images/tours/tour6-3.jpg"
      ]
    },
    {
      title: "Kingston City Highlights",
      meta: "City • Food stops • Half-day",
      price: "From $75",
      link: "contact.html",
      images: [
        "images/tours/tour7-1.jpg",
        "images/tours/tour7-2.jpg",
        "images/tours/tour7-3.jpg"
      ]
    },
    {
      title: "Luminous Lagoon Night Tour",
      meta: "Night • Glow water • 2-3 hours",
      price: "From $65",
      link: "contact.html",
      images: [
        "images/tours/tour8-1.jpg",
        "images/tours/tour8-2.jpg",
        "images/tours/tour8-3.jpg"
      ]
    },
    {
      title: "Rose Hall Great House",
      meta: "History • Sunset option • 2-3 hours",
      price: "From $55",
      link: "contact.html",
      images: [
        "images/tours/tour9-1.jpg",
        "images/tours/tour9-2.jpg",
        "images/tours/tour9-3.jpg"
      ]
    },
    {
      title: "Catamaran Cruise (Snorkel + Drinks)",
      meta: "Cruise • Snorkeling • Party vibe",
      price: "From $109",
      link: "contact.html",
      images: [
        "images/tours/tour10-1.jpg",
        "images/tours/tour10-2.jpg",
        "images/tours/tour10-3.jpg"
      ]
    }
  ];

  const grid = document.getElementById("toursGrid");

  if (grid) {
    grid.innerHTML = tours.map((tour, cardIndex) => {
      const dotsHtml = tour.images.map((_, slideIndex) => {
        return `<button class="tour-dot ${slideIndex === 0 ? "active" : ""}" data-card="${cardIndex}" data-slide="${slideIndex}" aria-label="Slide ${slideIndex + 1}"></button>`;
      }).join("");

      const imagesHtml = tour.images.map(src => {
        return `<img src="${src}" alt="${tour.title}">`;
      }).join("");

      return `
        <article class="tour-card" data-card="${cardIndex}" data-slide="0">
          <div class="tour-slider">
            <div class="tour-track">
              ${imagesHtml}
            </div>

            <button class="tour-nav prev" data-dir="-1" aria-label="Previous slide">&#10094;</button>
            <button class="tour-nav next" data-dir="1" aria-label="Next slide">&#10095;</button>

            <div class="tour-dots">
              ${dotsHtml}
            </div>
          </div>

          <div class="tour-info">
            <h3 class="tour-title">${tour.title}</h3>
            <div class="tour-meta">${tour.meta}</div>

            <div class="tour-cta-row">
              <div class="tour-price">${tour.price}</div>
              <a class="tour-btn" href="${tour.link}">Book Now</a>
            </div>
          </div>
        </article>
      `;
    }).join("");

    const cards = [...document.querySelectorAll(".tour-card")];

    function setTourSlide(cardEl, slideIndex) {
      const track = cardEl.querySelector(".tour-track");
      const dots = [...cardEl.querySelectorAll(".tour-dot")];
      const total = dots.length;

      let i = slideIndex;
      if (i < 0) i = total - 1;
      if (i >= total) i = 0;

      track.style.transform = `translateX(${-i * 100}%)`;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === i);
      });

      cardEl.dataset.slide = String(i);
    }

    cards.forEach(card => {
      setTourSlide(card, 0);

      setInterval(() => {
        if (card.matches(":hover")) return;
        const current = parseInt(card.dataset.slide || "0", 10);
        setTourSlide(card, current + 1);
      }, 3500);
    });

    document.addEventListener("click", function (e) {
      const navBtn = e.target.closest(".tour-nav");
      if (!navBtn) return;

      const card = e.target.closest(".tour-card");
      if (!card) return;

      const direction = parseInt(navBtn.dataset.dir, 10);
      const current = parseInt(card.dataset.slide || "0", 10);
      setTourSlide(card, current + direction);
    });

    document.addEventListener("click", function (e) {
      const dot = e.target.closest(".tour-dot");
      if (!dot) return;

      const cardIndex = parseInt(dot.dataset.card, 10);
      const slideIndex = parseInt(dot.dataset.slide, 10);

      const card = document.querySelector(`.tour-card[data-card="${cardIndex}"]`);
      if (!card) return;

      setTourSlide(card, slideIndex);
    });
  }
});
