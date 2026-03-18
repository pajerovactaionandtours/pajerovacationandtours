/* =========================================================
   HOME / GLOBAL JS
   Clean full version
========================================================= */


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
      title: "Dunn's River Falls & Park and Blue Hole Island Gully Combo",
      meta: "Dunn's River Falls & Park and Blue Hole Island Gully  Combo • 4-6 hours",
      price: "From $",
      link: "contact.html",
      images: [
        "All In One Full Day Tour in Saint Ann Garden Parish Jamaica/dunnrivergallery1.jpg",
        "All In One Full Day Tour in Saint Ann Garden Parish Jamaica/Pvt # 11023 Bob Marley.jpgg",
        "All In One Full Day Tour in Saint Ann Garden Parish Jamaica/PVT my COACH # 12.jpg"
      ]
    },
    {
      title: "All In One Full Day Tour in Saint Ann Garden Parish Jamaica",
      meta: "All In One Full Day Tour in Saint Ann Garden Parish Jamaica • 4-6 hours",
      price: "From $147",
      link: "contact.html",
      images: [
        "Blue Hole Island Gully and Glistening Water Lagoons night Tour/luminous laggon Jamaica.jpg",
        "image tours/greengrotto1.png",
        "image tours\Bobmarley.jpgimages/tours/tour1-3.jpg"
      ]
    },
    {
      title: "Blue Hole Island Gully and Glistening Water Lagoons night Tour",
      meta: "Blue Hole Island Gully and Glistening Water Lagoons  night Tour • Chill day",
      price: "From $135",
      link: "contact.html",
      images: [
        "image tours\BAMBOO-RAFTING.jpg",
        "image tours/greengrotto1.png",
        "image tours\Bobmarley.jpgimages/tours/tour1-3.jpg"
      ]
    },
    {
      title: "Blue Hole Secret Falls and Ocho Rios Highlight View Scenic Fern Gully",
      meta: "Culture • Guided tour • 4.30 hours",
      price: "From $132",
      link: "contact.html",
      images: [
          "imagetours\green-grotto.jpg",
        "imagetours\green-grotto.jpg",
        "imagetours\green-grotto.jpg.jpg"
      ]
    },
    {
      title: "Bob Marley Birth Place and Resting Place 9 Miles Jamaica",
      meta: "Bob Marley Birth Place and Resting Place 9 Miles Jamaica • 2-3 hours",
      price: "From $132",
      link: "contact.html",
      images: [
       "Bob Marley Birth Place and Resting Place 9 Miles Jamaica/biob marley 9 miles real .jpeg",
        "image tours/greengrotto1.png",
        "image tours\Bobmarley.jpgimages/tours/tour1-3.jpg"
      ]
    },
    {
      title: "Dunn's River Falls and Ocho Rios Highlight View Scenic Fern Gully",
      meta: "Dunn's River Falls and Ocho Rios Highlight Scenic Fern Gully• 4 hours",
      price: "From $132",
      link: "contact.html",
      images: [
          "image tours\BAMBOO-RAFTING.jpg",
        "image tours/greengrotto1.png",
        "image tours\Bobmarley.jpgimages/tours/tour1-3.jpg"
      ]
    },
    {
      title: "Green Grotto Caves and Dunn's River Falls and Park Combo",
      meta: "Green Grotto Caves and  Dunn's River Falls & Park Combo",
      price: "From $132",
      link: "contact.html",
      images: [
        "image tours\BAMBOO-RAFTING.jpg",
        "image tours/greengrotto1.png",
        "image tours\Bobmarley.jpgimages/tours/tour1-3.jpg"
      ]
    },
    {
      title: "Green Grotto Caves and Blue Hole Island Gully Falls",
      meta: "Green Grotto Caves and Blue Hole Island Gully Falls • 5 hours",
      price: "From $132",
      link: "contact.html",
      images: [
     "image tours\BAMBOO-RAFTING.jpg",
        "image tours/greengrotto1.png",
        "image tours\Bobmarley.jpgimages/tours/tour1-3.jpg"
      ]
    },
    {
      title: "Green Grotto Caves and White River Calypso Tubing Combo",
      meta: "Green Grotto Caves and White River Calypso Tubing Combo • 5 hours",
      price: "From $137",
      link: "contact.html",
      images: [
         "image tours\BAMBOO-RAFTING.jpg",
        "image tours/greengrotto1.png",
        "image tours\Bobmarley.jpgimages/tours/tour1-3.jpg"
      ]
    },
    {
      title: "White River Tubing and Ocho Rios Highlight View Scenic Fern Gully",
      meta: "White River Tubing and Ocho Rios Highlight View Scenic Fern Gully • 4 Hours",
      price: "From $132",
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
