const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll(".animate");

  function revealElements() {
    elements.forEach(function (el) {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); // Run once on load

});




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

