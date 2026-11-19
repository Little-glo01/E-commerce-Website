<script setup>
import { ref } from 'vue'


const email = ref('')
const subscribed = ref(false)

const handleSubscribe = () => {
  if (!email.value.trim()) return

  showToast('Thanks! Check your inbox for 10% off.', 'success')

  email.value = ''
  subscribed.value = true

  setTimeout(() => {
    subscribed.value = false
  }, 4000)
}
</script>


<template>
  <footer class="footer">

    <!--
    TOP: NEWSLETTER + LINKS -->
    <div class="footer-top">
      <div class="container footer-grid">

        <!-- BRAND -->
        <div class="footer-col brand-col">
          <RouterLink to="/" class="footer-logo">
            SOLEA
          </RouterLink>

          <p class="brand-tagline">
            Quality footwear for every step of your journey.
            Curated with care, delivered with pride.
          </p>

          <div class="socials">
            <a href="#" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" aria-label="TikTok">
              <i class="bi bi-tiktok"></i>
            </a>
          </div>
        </div>


        <!-- SHOP -->
        <div class="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><RouterLink to="/men">Men's Shoes</RouterLink></li>
            <li><RouterLink to="/women">Women's Shoes</RouterLink></li>
            <li><RouterLink to="/men">New Arrivals</RouterLink></li>
            <li><RouterLink to="/women">Sale</RouterLink></li>
          </ul>
        </div>


        <!-- HELP -->
        <div class="footer-col">
          <h4>Help</h4>
          <ul>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>


        <!-- NEWSLETTER -->
        <div class="footer-col newsletter-col">
          <h4>Join the List</h4>
          <p class="newsletter-text">
            Get 10% off your first order and early access
            to new drops.
          </p>

          <form
            class="newsletter-form"
            @submit.prevent="handleSubscribe"
          >
            <input
              v-model="email"
              type="email"
              placeholder="Your email address"
              class="newsletter-input"
              required
            />
            <button
              type="submit"
              class="newsletter-btn"
              aria-label="Subscribe"
            >
              <i class="bi bi-arrow-right"></i>
            </button>
          </form>

          <p v-if="subscribed" class="newsletter-success">
            <i class="bi bi-check-circle-fill"></i>
            Thanks! Check your inbox for the 10% code.
          </p>
        </div>

      </div>
    </div>


    <!-- =========================
         BOTTOM: LEGAL + PAYMENTS
    ========================= -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">

        <p class="copyright">
          © {{ new Date().getFullYear() }} SOLEA.
          All rights reserved.
        </p>

        <div class="payment-icons">
          <i class="bi bi-credit-card-2-front"></i>
          <i class="bi bi-credit-card"></i>
          <i class="bi bi-bank"></i>
          <i class="bi bi-shield-lock"></i>
        </div>

        <div class="legal-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>

      </div>
    </div>

  </footer>
</template>


<style scoped>

/* FOOTER BASE */
.footer {
  background: #111111;
  color: #cccccc;
  margin-top: 0;
}


/* 
   TOP GRID
= */
.footer-top {
  padding: 80px 0 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.6fr;
  gap: 60px;
}


/* =========================
   COLUMNS
========================= */
.footer-col h4 {
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 22px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 12px;
}

.footer-col a {
  color: #999999;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.25s ease, padding-left 0.25s ease;
}

.footer-col a:hover {
  color: #20a899;
  padding-left: 3px;
}


/* =========================
   BRAND COLUMN
========================= */
.footer-logo {
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.brand-tagline {
  font-size: 14px;
  line-height: 1.75;
  color: #999999;
  max-width: 300px;
  margin-bottom: 26px;
}

.socials {
  display: flex;
  gap: 12px;
}

.socials a {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #2a2a2a;
  border-radius: 50%;

  color: #cccccc;
  font-size: 15px;

  text-decoration: none;

  transition: all 0.3s ease;
}

.socials a:hover {
  background: #20a899;
  border-color: #20a899;
  color: #ffffff;
  transform: translateY(-3px);
  padding-left: 0;
}


/* =========================
   NEWSLETTER
========================= */
.newsletter-col {
  min-width: 0;
}

.newsletter-text {
  font-size: 14px;
  line-height: 1.75;
  color: #999999;
  margin-bottom: 20px;
}

.newsletter-form {
  display: flex;
  gap: 0;

  border: 1px solid #2a2a2a;
  border-radius: 8px;

  overflow: hidden;

  transition: border-color 0.3s ease;
}

.newsletter-form:focus-within {
  border-color: #20a899;
}

.newsletter-input {
  flex: 1;
  min-width: 0;
  height: 48px;

  padding: 0 16px;

  border: none;
  background: transparent;
  color: #ffffff;

  font-size: 14px;
  font-family: inherit;

  outline: none;
}

.newsletter-input::placeholder {
  color: #666666;
}

.newsletter-btn {
  width: 50px;
  height: 48px;

  border: none;
  background: #20a899;
  color: #ffffff;

  font-size: 16px;

  cursor: pointer;

  transition: background 0.3s ease;
}

.newsletter-btn:hover {
  background: #178f84;
}

.newsletter-success {
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 14px;

  color: #20a899;
  font-size: 13px;
  font-weight: 600;
}

.newsletter-success i {
  font-size: 15px;
}


/* =========================
   BOTTOM BAR
========================= */
.footer-bottom {
  border-top: 1px solid #1f1f1f;
  padding: 24px 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.copyright {
  font-size: 13px;
  color: #777777;
  margin: 0;
}

.payment-icons {
  display: flex;
  gap: 14px;
}

.payment-icons i {
  font-size: 20px;
  color: #666666;
  transition: color 0.25s ease;
}

.payment-icons i:hover {
  color: #20a899;
}

.legal-links {
  display: flex;
  gap: 22px;
}

.legal-links a {
  color: #777777;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.25s ease;
}

.legal-links a:hover {
  color: #20a899;
}


/* =========================
   TABLET
========================= */
@media (max-width: 991px) {

  .footer-top {
    padding: 60px 0 45px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 45px;
  }

  .brand-col,
  .newsletter-col {
    grid-column: span 2;
  }

  .brand-tagline {
    max-width: 100%;
  }
}


/* =========================
   MOBILE
========================= */
@media (max-width: 576px) {

  .footer-top {
    padding: 50px 0 35px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .brand-col,
  .newsletter-col {
    grid-column: span 1;
  }

  .footer-logo {
    font-size: 24px;
    letter-spacing: 2.5px;
  }

  .footer-bottom {
    padding: 22px 0;
  }

  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
    gap: 18px;
  }

  .legal-links {
    gap: 18px;
  }
}

</style>