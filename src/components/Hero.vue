<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import heroData from '../data/hero.json'

import MenShoe from '../assets/images/hero/men-shoe.jpg'
import heroSale from '../assets/images/hero/hero-sale.jpg'
import WomenShoe from '../assets/images/hero/women-shoe.jpg'


const images = {
  'men-shoe.jpg': MenShoe,
  'hero-sale.jpg': heroSale,
  'women-shoe.jpg': WomenShoe
}


const slides = heroData.map(slide => ({
  ...slide,
  image: images[slide.image]
}))


const currentSlide = ref(0)

let slideTimer


function nextSlide() {
  currentSlide.value =
    (currentSlide.value + 1) % slides.length
}


function previousSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}


function goToSlide(index) {
  currentSlide.value = index
}


function startSlider() {
    stopSlider()
    slideTimer = setInterval(() => {
      nextSlide()
    }, 5000)
}


function stopSlider() {
  clearInterval(slideTimer)
}


onMounted(() => {
  startSlider()
})


onUnmounted(() => {
  stopSlider()
})
</script>


<template>

  <section
    class="hero"
    @mouseenter="stopSlider"
    @mouseleave="startSlider"
  >

    <!-- HERO SLIDES -->

    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="hero-slide"
      :class="{
        active: currentSlide === index,
        'dark-theme': slide.theme === 'dark',
        'light-theme': slide.theme === 'light'
      }"
    >

      <!-- TEXT -->

      <div class="hero-content">

        <p class="hero-category">
          {{ slide.category }}
        </p>

        <h1>
          {{ slide.title }}
        </h1>

        <p class="hero-description">
          {{ slide.description }}
        </p>

        <RouterLink
          :to="slide.link"
          class="hero-button"
        >
          {{ slide.button }}

          <i class="bi bi-arrow-right"></i>
        </RouterLink>

      </div>


      <!-- IMAGE -->

      <div class="hero-image">

        <img
          :src="slide.image"
          :alt="slide.category"
        />

      </div>

    </div>


    <!-- HERO CONTROLS -->

    <div class="hero-controls">

      <!-- SLIDE NUMBER -->

      <div class="slide-number">

        <span>
          {{ slides[currentSlide].number }}
        </span>

        <span class="number-divider">
          /
        </span>

        <span>
          {{ String(slides.length).padStart(2, '0') }}
        </span>

      </div>


      <!-- INDICATORS -->

      <div class="indicators">

        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        >
        </button>

      </div>


      <!-- ARROWS -->

      <div class="hero-arrows">

        <button
          class="arrow-button"
          @click="previousSlide"
          aria-label="Previous slide"
        >
          <i class="bi bi-arrow-left"></i>
        </button>

        <button
          class="arrow-button"
          @click="nextSlide"
          aria-label="Next slide"
        >
          <i class="bi bi-arrow-right"></i>
        </button>

      </div>

    </div>


    <!-- SCROLL INDICATOR -->

    <div class="scroll-indicator">

      <span>
        SCROLL
      </span>

      <i class="bi bi-chevron-down"></i>

    </div>

  </section>

</template>


<style scoped>

.hero {
  position: relative;

  width: 100%;
  height: 680px;

  overflow: hidden;

  background: #f5f3ef;
}


/* =========================
   SLIDES
========================= */

.hero-slide {
  position: absolute;

  inset: 0;

  display: flex;

  opacity: 0;
  visibility: hidden;

  transition:
    opacity 0.8s ease,
    visibility 0.8s ease;
}


.hero-slide.active {
  opacity: 1;
  visibility: visible;
}


/* =========================
   HERO CONTENT
========================= */

.hero-content {
  width: 48%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 60px 7%;

  position: relative;

  z-index: 2;

  box-sizing: border-box;
}


/* CATEGORY */

.hero-category {
  margin: 0 0 18px;

  color: #20a899;

  font-size: 0.75rem;

  font-weight: 700;

  letter-spacing: 2px;

  text-transform: uppercase;

  animation: textFade 0.8s ease;
}


/* TITLE */

.hero-content h1 {
  max-width: 600px;

  margin: 0;

  color: #171717;

  font-size: clamp(3rem, 5vw, 5.5rem);

  line-height: 0.95;

  font-weight: 800;

  letter-spacing: -3px;

  animation: titleSlide 0.9s ease;
}


/* DESCRIPTION */

.hero-description {
  max-width: 450px;

  margin: 28px 0 35px;

  color: #555555;

  font-size: 1rem;

  line-height: 1.7;

  animation: descriptionSlide 1s ease;
}


/*  BUTTON */

.hero-button {
  width: fit-content;

  display: inline-flex;

  align-items: center;

  gap: 12px;

  padding: 15px 25px;

  background: #20a899;

  color: #ffffff;

  text-decoration: none;

  font-size: 0.75rem;

  font-weight: 700;

  letter-spacing: 1px;

  transition:
    transform 0.3s ease,
    background 0.3s ease,
    gap 0.3s ease;

  animation: buttonSlide 1.1s ease;
}


.hero-button i {
  transition: transform 0.3s ease;
}


.hero-button:hover {
  background: #178f84;

  gap: 17px;

  transform: translateY(-3px);
}


.hero-button:hover i {
  transform: translateX(3px);
}


/* 
   IMAGE
= */

.hero-image {
  width: 52%;

  height: 100%;

  overflow: hidden;
}


.hero-image img {
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;

  object-position: center;

  transform: scale(1.03);
}


/* Image animation */

.hero-slide.active .hero-image img {
  animation: heroZoom 6s ease forwards;
}


@keyframes heroZoom {

  from {
    transform: scale(1.03);
  }

  to {
    transform: scale(1.1);
  }

}


/* 
   TEXT ANIMATIONS
 */

@keyframes textFade {

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

}


@keyframes titleSlide {

  from {
    opacity: 0;

    transform: translateY(30px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }

}


@keyframes descriptionSlide {

  from {
    opacity: 0;

    transform: translateY(20px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }

}


@keyframes buttonSlide {

  from {
    opacity: 0;

    transform: translateY(20px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }

}


/* CONTROLS */

.hero-controls {
  position: absolute;

  left: 7%;

  bottom: 45px;

  width: 86%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  z-index: 10;
}


/* SLIDE NUMBER */

.slide-number {
  display: flex;

  align-items: center;

  gap: 8px;

  color: #171717;

  font-size: 0.75rem;

  font-weight: 700;

  letter-spacing: 1px;
}


.number-divider {
  opacity: 0.4;
}


/* INDICATORS */

.indicators {
  display: flex;

  align-items: center;

  gap: 8px;
}


.indicator {
  width: 25px;

  height: 2px;

  padding: 0;

  border: none;

  background: #c7c7c7;

  cursor: pointer;

  transition:
    width 0.3s ease,
    background 0.3s ease;
}


.indicator.active {
  width: 45px;

  background: #20a899;
}


/* =========================
   ARROWS
========================= */

.hero-arrows {
  display: flex;

  gap: 8px;
}


.arrow-button {
  width: 45px;

  height: 45px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid #d6d6d6;

  background: rgba(255, 255, 255, 0.85);

  color: #171717;

  cursor: pointer;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}


.arrow-button:hover {
  background: #20a899;

  color: #ffffff;

  transform: translateY(-2px);
}


/* =========================
   SCROLL INDICATOR
========================= */

.scroll-indicator {
  position: absolute;

  right: 35px;

  bottom: 45px;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 8px;

  z-index: 10;
}


.scroll-indicator span {
  color: #555555;

  font-size: 0.55rem;

  letter-spacing: 2px;

  writing-mode: vertical-rl;
}


.scroll-indicator i {
  color: #20a899;

  font-size: 0.8rem;

  animation: scrollBounce 1.5s infinite;
}


@keyframes scrollBounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

}


/* =========================
   TABLET
========================= */

@media (max-width: 991px) {

  .hero {
    height: 600px;
  }


  .hero-content {
    padding: 40px 5%;
  }


  .hero-content h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }


  .hero-description {
    font-size: 0.9rem;
  }


  .hero-controls {
    left: 5%;

    width: 90%;
  }

}


/*  MOBILE */
@media (max-width: 767px) {
  .hero {
    height: 720px;
  }

  .hero-slide {
    flex-direction: column;
  }

  .hero-image {
    order: 1;
    width: 100%;
    height: 420px;
  }


  .hero-content {
    order: 2;
    width: 100%;
    height: 300px;
    padding: 35px 25px 85px;
  }


  .hero-content h1 {
    max-width: 500px;

    font-size: 2.6rem;

    letter-spacing: -1.5px;
  }


  .hero-description {
    margin: 18px 0 25px;

    font-size: 0.85rem;

    line-height: 1.6;
  }


  .hero-button {
    padding: 13px 20px;
  }


  .hero-controls {
    left: 25px;
    bottom: 25px;
    width: calc(100% - 50px);
  }


  .slide-number {
    display: none;
  }


  .hero-arrows {
    gap: 5px;
  }


  .arrow-button {
    width: 38px;
    height: 38px;
  }


  .indicator {
    width: 18px;
  }


  .indicator.active {
    width: 32px;
  }


  .scroll-indicator {
    display: none;
  }

}


/* =========================
   480px
========================= */

@media (max-width: 480px) {

  .hero {
    height: 670px;
  }


  .hero-image {
    height: 350px;
  }


  .hero-content {
    height: 320px;

    padding: 30px 20px 80px;
  }


  .hero-category {
    margin-bottom: 12px;
    font-size: 0.65rem;
    letter-spacing: 1.5px;
  }


  .hero-content h1 {
    font-size: 2.15rem;
    line-height: 1;
  }


  .hero-description {
    margin: 16px 0 22px;
    font-size: 0.8rem;
  }


  .hero-button {
    padding: 12px 18px;
    font-size: 0.65rem;
  }


  .hero-controls {
    left: 20px;
    bottom: 22px;
    width: calc(100% - 40px);
  }

}

</style>