<script setup>
import { ref } from 'vue'

import { cartCount } from '../stores/cart'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>


<template>
  <nav class="navbar">
    <div class="container navbar-container">

      <!-- Logo -->
      <RouterLink to="/" class="logo" @click="closeMenu">
        SOLEA
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="nav-links">
        <RouterLink to="/"  class="nav-link"  
          exact-active-class="active">
          Home
        </RouterLink>

        <RouterLink to="/men" class="nav-link"
          active-class="active"  >
          Men
        </RouterLink>

        <RouterLink to="/women"
          class="nav-link"
          active-class="active"
        >
          Women
        </RouterLink>

        <RouterLink
          to="/about"
          class="nav-link"
          active-class="active"
        >
          About Us
        </RouterLink>

        <RouterLink to="/cart" class="cart-link">
           <i class="bi bi-cart3"></i>
          <span v-if="cartCount > 0" class="cart-count">
            {{ cartCount }}
          </span>
        </RouterLink>

        
      </div>


      <!-- Mobile Menu Button -->
      <button
        class="menu-button"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"  >

      <i :class="menuOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      class="mobile-menu"
      :class="{ 'menu-open': menuOpen }" >

      <RouterLink
        to="/"
        class="mobile-link"
        exact-active-class="active"
        @click="closeMenu"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/men"
        class="mobile-link"
        active-class="active"
        @click="closeMenu"
      >
        Men
      </RouterLink>

      <RouterLink
        to="/women"
        class="mobile-link"
        active-class="active"
        @click="closeMenu"
      >
        Women
      </RouterLink>

      <RouterLink
        to="/about"
        class="mobile-link"
        active-class="active"
        @click="closeMenu"
      >
        About Us
      </RouterLink>

      <RouterLink
        to="/cart"
        class="mobile-link"
        active-class="active"
        @click="closeMenu">
        🛒 Cart
        <span v-if="cartCount > 0">
         ({{ cartCount }})
        </span>
      </RouterLink>

    

    </div>
  </nav>
</template>
<style scoped>

.navbar {
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  position: sticky;
  top: 0;
  z-index: 1000;
}


/* Main Navbar */

.navbar-container {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* Logo */

.logo {
  color: #111111;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
}


/* Desktop Links */

.nav-links {
  display: flex;
  align-items: center;
  gap: 35px;
}


.nav-link {
  position: relative;
  color: #222222;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 8px 0;
}


/* Underline */

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #111111;
  transition: width 0.3s ease;
}


/* Hover */

.nav-link:hover::after {
  width: 100%;
}


/* Active page */
.nav-link.active::after {
  width: 100%;
}



.cart-link {
  position: relative;
  color: #111111;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.cart-link:hover {
  color: #555555;
}

.cart-count {
  position: absolute;
  top: -2px;
  right: -5px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 50%;
  background: #111111;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}


/* Mobile button */

.menu-button {
  display: none;
  border: none;
  background: transparent;
  color: #111111;
  font-size: 1.5rem;
  cursor: pointer;
}


/* Mobile menu */
.mobile-menu {
  display: none;
}




/*  TABLET*/
@media (max-width: 991px) {

  .nav-links {
    gap: 25px;
  }

}


/* 
   MOBILE
 */

@media (max-width: 767px) {

  .navbar-container {
    min-height: 70px;
  }


  .nav-links {
    display: none;
  }

  .menu-button {
    display: block;
  }


  .mobile-menu {
    display: flex;
    flex-direction: column;
    background: #ffffff;

    max-height: 0;
    overflow: hidden;
    opacity: 0;

    transition:
      max-height 0.35s ease,
      opacity 0.25s ease;

    border-top: 1px solid transparent;
  }


  .mobile-menu.menu-open {
    max-height: 300px;
    opacity: 1;
    border-top: 1px solid #eeeeee;
  }


  .mobile-link {
    color: #222222;
    text-decoration: none;
    padding: 16px 20px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 1px solid #eeeeee;

    transition:
      background 0.3s ease,
      padding-left 0.3s ease;
  }


  .mobile-link:hover {
    background: #f7f7f7;
    padding-left: 28px;
  }


  .mobile-link.active {
    background: #f3f3f3;
  }

}


/* =========================
   SMALL MOBILE - 480px
========================= */

@media (max-width: 480px) {

  .navbar-container {
    min-height: 65px;
  }


  .logo {
    font-size: 1.25rem;
    letter-spacing: 1.5px;
  }


  .menu-button {
    font-size: 1.35rem;
  }


  .mobile-link {
    padding: 15px 16px;
    font-size: 0.85rem;
  }


  .mobile-link:hover {
    padding-left: 24px;
  }

}

</style>