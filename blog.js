'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

if (navbar && navTogglers.length) {
  const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }

  addEventOnElements(navTogglers, "click", toggleNav);
}



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

if (header || backTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      if (header) header.classList.add("active");
      if (backTopBtn) backTopBtn.classList.add("active");
    } else {
      if (header) header.classList.remove("active");
      if (backTopBtn) backTopBtn.classList.remove("active");
    }
  });
}



/**
 * SLIDER
 */

/**
 * NEXT SLIDE
 */
/**
 * PREVIOUS SLIDE
 */
/**
 * RESPONSIVE
 */
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

if (slider && sliderContainer && (sliderPrevBtn || sliderNextBtn)) {
  let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items")) || 1;
  let totalSlidableItems = Math.max(0, sliderContainer.childElementCount - totalSliderVisibleItems);

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  }

  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;
    currentSlidePos = slideEnd ? 0 : currentSlidePos + 1;
    moveSliderItem();
  }

  const slidePrev = function () {
    currentSlidePos = (currentSlidePos <= 0) ? totalSlidableItems : currentSlidePos - 1;
    moveSliderItem();
  }

  if (sliderNextBtn) sliderNextBtn.addEventListener("click", slideNext);
  if (sliderPrevBtn) sliderPrevBtn.addEventListener("click", slidePrev);

  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items")) || 1;
    totalSlidableItems = Math.max(0, sliderContainer.childElementCount - totalSliderVisibleItems);
    moveSliderItem();
  });
}