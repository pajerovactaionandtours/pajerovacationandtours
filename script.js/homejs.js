
let index = 0;

const track = document.querySelector(".ts-track");
const dots = document.querySelectorAll(".ts-dots span");

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

// Auto slide every 4 seconds
setInterval(() => {
  index++;

  if (index >= dots.length) {
    index = 0;
  }

  showSlide(index);
}, 4000);

// Click on dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

  /* =================How we work  ================= */

const elements = document.querySelectorAll('.how-text, .how-image');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold:0.3 });

elements.forEach(el=>{
  observer.observe(el);
});

window.addEventListener("DOMContentLoaded", () => {

  /* ================= STEP ANIMATION ================= */

  const steps = document.querySelectorAll(".hiw-step");

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


  /* ================= IMAGE SLIDER (FIXED) ================= */

  const hiwTrack = document.querySelector(".hiw-track");
  const slides = document.querySelectorAll(".hiw-track img");

  let index = 0;
  const totalSlides = slides.length;

  function moveSlider() {
    index++;

    if (index >= totalSlides) {
      index = 0;
    }

    hiwTrack.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(moveSlider, 4000);

});











document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  links.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

});


  /* ================= Review Section================= */


document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".reviews-track");
  const slides = document.querySelectorAll(".review-card");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let index = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  // Auto Slide
  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlider();
  }, 6000);

});

 /* =================  aLL TOURS   ================= */




document.addEventListener("DOMContentLoaded", () => {
  const tours = [
    {
      title: "Dunn’s River Falls Adventure",
      meta: "Waterfalls • Family friendly • 4-6 hours",
      price: "From $79",
      link: "contact.html",
      images: ["images/tours/tour1-1.jpg", "images/tours/tour1-2.jpg", "images/tours/tour1-3.jpg"]
    },
    {
      title: "Blue Hole & Secret Falls",
      meta: "Nature • Swim spots • Half-day",
      price: "From $89",
      link: "contact.html",
      images: ["images/tours/tour2-1.jpg", "images/tours/tour2-2.jpg", "images/tours/tour2-3.jpg"]
    },
    {
      title: "Negril Beach Day Trip",
      meta: "Beach • Sunset • Chill day",
      price: "From $69",
      link: "contact.html",
      images: ["images/tours/tour3-1.jpg", "images/tours/tour3-2.jpg", "images/tours/tour3-3.jpg"]
    },
    {
      title: "Bob Marley Museum Experience",
      meta: "Culture • Guided tour • 2-4 hours",
      price: "From $59",
      link: "contact.html",
      images: ["images/tours/tour4-1.jpg", "images/tours/tour4-2.jpg", "images/tours/tour4-3.jpg"]
    },
    {
      title: "ATV Jungle Ride",
      meta: "Adventure • Off-road • 2-3 hours",
      price: "From $99",
      link: "contact.html",
      images: ["images/tours/tour5-1.jpg", "images/tours/tour5-2.jpg", "images/tours/tour5-3.jpg"]
    },
    {
      title: "River Rafting (Bamboo Raft)",
      meta: "Relax • Scenic river • 2-3 hours",
      price: "From $85",
      link: "contact.html",
      images: ["images/tours/tour6-1.jpg", "images/tours/tour6-2.jpg", "images/tours/tour6-3.jpg"]
    },
    {
      title: "Kingston City Highlights",
      meta: "City • Food stops • Half-day",
      price: "From $75",
      link: "contact.html",
      images: ["images/tours/tour7-1.jpg", "images/tours/tour7-2.jpg", "images/tours/tour7-3.jpg"]
    },
    {
      title: "Luminous Lagoon Night Tour",
      meta: "Night • Glow water • 2-3 hours",
      price: "From $65",
      link: "contact.html",
      images: ["images/tours/tour8-1.jpg", "images/tours/tour8-2.jpg", "images/tours/tour8-3.jpg"]
    },
    {
      title: "Rose Hall Great House",
      meta: "History • Sunset option • 2-3 hours",
      price: "From $55",
      link: "contact.html",
      images: ["images/tours/tour9-1.jpg", "images/tours/tour9-2.jpg", "images/tours/tour9-3.jpg"]
    },
    {
      title: "Catamaran Cruise (Snorkel + Drinks)",
      meta: "Cruise • Snorkeling • Party vibe",
      price: "From $109",
      link: "contact.html",
      images: ["images/tours/tour10-1.jpg", "images/tours/tour10-2.jpg", "images/tours/tour10-3.jpg"]
    }
  ];

  const grid = document.getElementById("toursGrid");
  if (!grid) return;

  // Build cards
  grid.innerHTML = tours.map((t, idx) => {
    const dots = t.images.map((_, i) =>
      `<button class="tour-dot ${i === 0 ? "active" : ""}" data-card="${idx}" data-slide="${i}" aria-label="Slide ${i+1}"></button>`
    ).join("");

    const imgs = t.images.map(src => `<img src="${src}" alt="${t.title}">`).join("");

    return `
      <article class="tour-card" data-card="${idx}">
        <div class="tour-slider">
          <div class="tour-track">${imgs}</div>

          <button class="tour-nav prev" data-dir="-1" aria-label="Previous slide">&#10094;</button>
          <button class="tour-nav next" data-dir="1" aria-label="Next slide">&#10095;</button>

          <div class="tour-dots">${dots}</div>
        </div>

        <div class="tour-info">
          <h3 class="tour-title">${t.title}</h3>
          <div class="tour-meta">${t.meta}</div>

          <div class="tour-cta-row">
            <div class="tour-price">${t.price}</div>
            <a class="tour-btn" href="${t.link}">Book Now</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Slider logic
  const cards = [...document.querySelectorAll(".tour-card")];

  function setSlide(cardEl, slideIndex) {
    const track = cardEl.querySelector(".tour-track");
    const dots = [...cardEl.querySelectorAll(".tour-dot")];
    const total = dots.length;

    let i = slideIndex;
    if (i < 0) i = total - 1;
    if (i >= total) i = 0;

    track.style.transform = `translateX(${-i * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === i));
    cardEl.dataset.slide = String(i);
  }

  // Init each card
  cards.forEach(card => {
    card.dataset.slide = "0";
    setSlide(card, 0);

    // Autoplay (pause on hover)
    const interval = setInterval(() => {
      if (card.matches(":hover")) return;
      const curr = parseInt(card.dataset.slide || "0", 10);
      setSlide(card, curr + 1);
    }, 3500);

    card.dataset.interval = String(interval);
  });

  // Arrow click
  document.addEventListener("click", (e) => {
    const navBtn = e.target.closest(".tour-nav");
    if (!navBtn) return;

    const card = e.target.closest(".tour-card");
    if (!card) return;

    const dir = parseInt(navBtn.dataset.dir, 10);
    const curr = parseInt(card.dataset.slide || "0", 10);
    setSlide(card, curr + dir);
  });

  // Dot click
  document.addEventListener("click", (e) => {
    const dot = e.target.closest(".tour-dot");
    if (!dot) return;

    const cardIndex = parseInt(dot.dataset.card, 10);
    const slideIndex = parseInt(dot.dataset.slide, 10);

    const card = document.querySelector(`.tour-card[data-card="${cardIndex}"]`);
    if (!card) return;

    setSlide(card, slideIndex);
  });
});