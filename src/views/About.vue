<template>
  <main class="about-page">

    <!-- =========================
         HERO
    ========================= -->
    <section class="about-hero">
      <div class="container hero-grid">

        <div class="hero-text">
          <p class="eyebrow">OUR STORY</p>

          <h1>
            Crafted for<br />
            every step<br />
            you take.
          </h1>

          <p class="lead">
            SOLEA was born from a simple belief — that the right
            pair of shoes doesn't just complete an outfit.
            It changes how you walk through the world.
          </p>

          <div class="hero-actions">
            <RouterLink to="/men" class="btn-primary">
              Shop Collection
            </RouterLink>

            <a href="#story" class="btn-link">
              Our Story ↓
            </a>
          </div>
        </div>

        <div class="hero-image">
          <img :src="heroImages.heroSale" alt="SOLEA featured collection" />
          <div class="hero-image-accent"></div>
        </div>

      </div>
    </section>


    <!-- =========================
         STATS
    ========================= -->
    <section class="stats">
      <div class="container stats-grid">

        <div class="stat">
          <h3>16+</h3>
          <p>Curated Styles</p>
        </div>

        <div class="stat">
          <h3>2K+</h3>
          <p>Happy Customers</p>
        </div>

        <div class="stat">
          <h3>100%</h3>
          <p>Quality Checked</p>
        </div>

        <div class="stat">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>

      </div>
    </section>


    <!-- =========================
         STORY
    ========================= -->
    <section class="story" id="story">
      <div class="container story-grid">

        <div class="story-image">
          <img :src="heroImages.menShoe" alt="SOLEA craftsmanship" />
        </div>

        <div class="story-text">
          <p class="eyebrow">THE BEGINNING</p>

          <h2>
            A wardrobe essential,
            <span>reimagined.</span>
          </h2>

          <p>
            We started SOLEA because we were tired of choosing
            between shoes that looked good and shoes that felt
            good. So we built a brand around both.
          </p>

          <p>
            Every pair in our collection is hand-selected for
            craftsmanship, comfort, and longevity. Nothing
            trendy-for-a-season. Only pieces you'll still
            love wearing two years from now.
          </p>

          <div class="story-signature">
            <div class="signature-line"></div>
            <div>
              <strong>The SOLEA Team</strong>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- =========================
         VALUES
    ========================= -->
    <section class="values">
      <div class="container">

        <div class="values-heading">
          <p class="eyebrow">WHAT WE STAND FOR</p>
          <h2>Three things we never compromise on.</h2>
        </div>

        <div class="values-grid">

          <div class="value-card">
            <div class="value-icon">
              <i class="bi bi-gem"></i>
            </div>
            <h3>Quality First</h3>
            <p>
              We reject more than we accept. If it doesn't
              feel right in our hands, it doesn't reach yours.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <i class="bi bi-truck"></i>
            </div>
            <h3>Fast Delivery</h3>
            <p>
              From our store to your door — quick, reliable
              delivery across Nigeria, tracked end-to-end.
            </p>
          </div>

          <div class="value-card">
            <div class="value-icon">
              <i class="bi bi-heart"></i>
            </div>
            <h3>Real Service</h3>
            <p>
              Real people. Real answers. A team that actually
              cares about your order and your experience.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- =========================
         PHILOSOPHY QUOTE
    ========================= -->
    <section class="philosophy">
      <div class="container">
        <p class="quote-mark">"</p>
        <blockquote>
          The right pair of shoes doesn't just carry you —
          it <em>carries you further</em>.
        </blockquote>
        <p class="quote-source">— The SOLEA Philosophy</p>
      </div>
    </section>


    <!-- =========================
         TESTIMONIALS
    ========================= -->
    <section class="testimonials">
      <div class="container">

        <div class="testimonials-heading">
          <p class="eyebrow">FROM OUR CUSTOMERS</p>
          <h2>What people are saying.</h2>
        </div>

        <div class="testimonials-grid">

          <div class="testimonial">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p>
              "The leather loafers I bought are the most
              comfortable shoes I've owned. Shipping was fast
              and the packaging felt premium."
            </p>
            <div class="reviewer">
              <strong>Adaeze O.</strong>
              <span>Lagos</span>
            </div>
          </div>

          <div class="testimonial">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p>
              "I've ordered three pairs now. Quality is
              consistent, sizes are accurate, and the customer
              service actually responds."
            </p>
            <div class="reviewer">
              <strong>Chinedu M.</strong>
              <span>Abuja</span>
            </div>
          </div>

          <div class="testimonial">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p>
              "Finally a Nigerian shoe brand that gets it right.
              The heels I ordered were elegant AND wearable
              all day. Will be back."
            </p>
            <div class="reviewer">
              <strong>Fatima A.</strong>
              <span>Port Harcourt</span>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- =========================
         FINAL CTA
    ========================= -->
    <section class="final-cta">
      <div class="container">
        <p class="eyebrow light">READY WHEN YOU ARE</p>
        <h2>Your next pair is waiting.</h2>
        <p class="cta-sub">
          Explore the full SOLEA collection and find the one.
        </p>

        <div class="cta-actions">
          <RouterLink to="/men" class="btn-light">
            Shop Men
          </RouterLink>
          <RouterLink to="/women" class="btn-light">
            Shop Women
          </RouterLink>
        </div>
      </div>
    </section>

  </main>
</template>


<script setup>
import menShoe from '../assets/images/hero/men-shoe.jpg'
import womenShoe from '../assets/images/hero/women-shoe.jpg'
import heroSale from '../assets/images/hero/hero-sale.jpg'

const heroImages = {
  menShoe,
  womenShoe,
  heroSale
}
</script>


<style scoped>

/* =========================
   GLOBAL PAGE
========================= */

.about-page {
  background: #ffffff;
  overflow-x: hidden;
}

.eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2.5px;
  color: #20a899;
  margin-bottom: 18px;
  text-transform: uppercase;
}

.eyebrow.light {
  color: #20a899;
}


/* =========================
   HERO
========================= */

.about-hero {
  padding: 100px 0 120px;
  background: linear-gradient(180deg, #fafaf8 0%, #ffffff 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-text h1 {
  font-size: clamp(2.8rem, 5.5vw, 4.8rem);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -2.5px;
  color: #111111;
  margin-bottom: 28px;
  animation: fadeUp 0.8s ease both;
}

.lead {
  font-size: 17px;
  line-height: 1.8;
  color: #555555;
  max-width: 520px;
  margin-bottom: 40px;
  animation: fadeUp 0.8s ease 0.15s both;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  animation: fadeUp 0.8s ease 0.3s both;
}

.btn-primary {
  display: inline-block;
  padding: 16px 32px;
  background: #111111;
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #20a899;
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(32, 168, 153, 0.3);
}

.btn-link {
  color: #111111;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid #111111;
  padding-bottom: 3px;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.btn-link:hover {
  color: #20a899;
  border-color: #20a899;
}


/* Hero image */

.hero-image {
  position: relative;
  animation: fadeIn 1s ease 0.2s both;
}

.hero-image img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
  position: relative;
  z-index: 2;
}

.hero-image-accent {
  position: absolute;
  top: 30px;
  right: -30px;
  width: 100%;
  height: 100%;
  border: 2px solid #20a899;
  border-radius: 12px;
  z-index: 1;
}


/* =========================
   STATS
========================= */

.stats {
  padding: 70px 0;
  background: #111111;
  color: #ffffff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat h3 {
  font-size: 48px;
  font-weight: 800;
  color: #20a899;
  margin-bottom: 8px;
  letter-spacing: -1.5px;
}

.stat p {
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #cccccc;
  font-weight: 500;
}


/* =========================
   STORY
========================= */

.story {
  padding: 130px 0;
  background: #ffffff;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 90px;
  align-items: center;
}

.story-image img {
  width: 100%;
  height: 620px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.story-text h2 {
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -1.5px;
  color: #111111;
  margin-bottom: 28px;
}

.story-text h2 span {
  color: #20a899;
}

.story-text p {
  font-size: 16px;
  line-height: 1.85;
  color: #555555;
  margin-bottom: 22px;
}

.story-signature {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 40px;
}

.signature-line {
  width: 50px;
  height: 2px;
  background: #20a899;
}

.story-signature strong {
  display: block;
  font-size: 15px;
  color: #111111;
  margin-bottom: 3px;
}

.story-signature span {
  font-size: 13px;
  color: #777777;
}


/* =========================
   VALUES
========================= */

.values {
  padding: 100px 0;
  background: #f7f7f5;
}

.values-heading {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 70px;
}

.values-heading h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.value-card {
  background: #ffffff;
  padding: 45px 35px;
  border-radius: 12px;
  border: 1px solid #eeeeee;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
}

.value-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(32, 168, 153, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.value-icon i {
  font-size: 24px;
  color: #20a899;
}

.value-card h3 {
  font-size: 19px;
  margin-bottom: 14px;
  color: #111111;
  font-weight: 700;
}

.value-card p {
  font-size: 14.5px;
  line-height: 1.7;
  color: #666666;
}


/* =========================
   PHILOSOPHY QUOTE
========================= */

.philosophy {
  padding: 120px 0;
  background: #ffffff;
  text-align: center;
}

.quote-mark {
  font-size: 120px;
  line-height: 0.5;
  color: #20a899;
  font-family: Georgia, serif;
  margin-bottom: 20px;
  opacity: 0.3;
}

.philosophy blockquote {
  font-size: clamp(1.5rem, 2.8vw, 2.3rem);
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: #111111;
  max-width: 780px;
  margin: 0 auto 25px;
  font-style: normal;
}

.philosophy blockquote em {
  color: #20a899;
  font-style: italic;
}

.quote-source {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #999999;
  font-weight: 600;
}


/* =========================
   TESTIMONIALS
========================= */

.testimonials {
  padding: 100px 0;
  background: #fafaf8;
}

.testimonials-heading {
  text-align: center;
  margin-bottom: 60px;
}

.testimonials-heading h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.testimonial {
  background: #ffffff;
  padding: 40px 32px;
  border-radius: 12px;
  border: 1px solid #eeeeee;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.testimonial:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.07);
}

.stars {
  display: flex;
  gap: 3px;
  margin-bottom: 20px;
}

.stars i {
  font-size: 13px;
  color: #f5a623;
}

.testimonial p {
  font-size: 15px;
  line-height: 1.75;
  color: #444444;
  margin-bottom: 26px;
  font-style: italic;
}

.reviewer strong {
  display: block;
  font-size: 14px;
  color: #111111;
  margin-bottom: 3px;
}

.reviewer span {
  font-size: 12px;
  color: #888888;
  letter-spacing: 1px;
  text-transform: uppercase;
}


/* =========================
   FINAL CTA
========================= */

.final-cta {
  padding: 120px 0;
  background: #111111;
  color: #ffffff;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.final-cta::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 700px;
  height: 700px;
  background: radial-gradient(
    circle,
    rgba(32, 168, 153, 0.18) 0%,
    transparent 65%
  );
  pointer-events: none;
}

.final-cta .container {
  position: relative;
  z-index: 2;
}

.final-cta h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  margin-bottom: 20px;
}

.cta-sub {
  font-size: 16px;
  color: #cccccc;
  margin-bottom: 40px;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}

.btn-light {
  padding: 16px 34px;
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.btn-light:hover {
  background: #20a899;
  border-color: #20a899;
  transform: translateY(-3px);
}


/* =========================
   ANIMATIONS
========================= */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


/* =========================
   TABLET
========================= */

@media (max-width: 991px) {

  .about-hero {
    padding: 70px 0 80px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .hero-image img {
    height: 500px;
  }

  .hero-image-accent {
    display: none;
  }

  .stats {
    padding: 55px 0;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;
  }

  .stat h3 {
    font-size: 38px;
  }

  .story {
    padding: 80px 0;
  }

  .story-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .story-image img {
    height: 480px;
  }

  .values,
  .testimonials {
    padding: 70px 0;
  }

  .values-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .philosophy {
    padding: 80px 0;
  }

  .final-cta {
    padding: 80px 0;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 576px) {

  .about-hero {
    padding: 50px 0 60px;
  }

  .hero-text h1 {
    letter-spacing: -1.5px;
  }

  .hero-actions {
    gap: 20px;
  }

  .btn-primary {
    padding: 14px 26px;
    font-size: 12px;
  }

  .hero-image img {
    height: 380px;
  }

  .stats {
    padding: 45px 0;
  }

  .stat h3 {
    font-size: 32px;
  }

  .stat p {
    font-size: 11px;
  }

  .story {
    padding: 60px 0;
  }

  .story-image img {
    height: 380px;
  }

  .story-text h2 {
    letter-spacing: -1px;
  }

  .values,
  .testimonials {
    padding: 55px 0;
  }

  .values-heading {
    margin-bottom: 45px;
  }

  .value-card,
  .testimonial {
    padding: 30px 24px;
  }

  .philosophy {
    padding: 60px 0;
  }

  .quote-mark {
    font-size: 80px;
  }

  .final-cta {
    padding: 65px 0;
  }

  .btn-light {
    padding: 13px 24px;
    font-size: 12px;
  }
}

</style>