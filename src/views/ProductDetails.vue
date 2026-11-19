<template>
  <main class="product-page">
    <div class="container">

      <div v-if="product" class="product-layout">

        <!-- LEFT: Product Image -->
        <div class="product-gallery">

          <div class="main-image">
            <button
              class="gallery-arrow gallery-prev"
              @click="previousImage">
               ‹
            </button>
            <img
             :src="getImage(product.images[selectedImage])"
             :alt="product.name"
              @click="openLightbox"
            />

            <button
              class="gallery-arrow gallery-next"
             @click="nextImage"
            >
              ›
            </button>

          </div>

          <div class="thumbnail-list">

            <button
              v-for="(image, index) in product.images"
              :key="index"
              class="thumbnail"
              :class="{ active: selectedImage === index }"
              @click="selectedImage = index">
             <img
              :src="getImage(image)"
              :alt="product.name"
              />
            </button>

          </div>

        </div>


        <!-- RIGHT: Product Information -->
        <div class="product-info">

          <p class="category">
            {{ product.category }}
          </p>

          <h1>
            {{ product.name }}
          </h1>

          <div class="price">
            <span>
              ₦{{ product.price.toLocaleString() }}
            </span>

            <del v-if="product.isSale">
              ₦{{ product.oldPrice.toLocaleString() }}
            </del>
          </div>

          <p class="description">
            Step into style and comfort with this carefully selected
            SOLEA footwear piece. Designed to complement your everyday
            look with quality and confidence.
          </p>

          <div class="purchase-section">

            <div class="quantity-control">
              <button type="button" 
               @click="decreaseQuantity">
               -
              </button>

              <span>{{ quantity }}</span>

              <button type="button"  @click="increaseQuantity">
                +
              </button>
            </div>

            <button class="add-to-cart"
             @click="handleAddToCart">
              {{ addedToCart ? 'Added to Cart ✓' : 'Add to Cart' }}
            </button>

            <routerLink v-if="addedToCart" to="/cart" class=" view-cart-link">
              View Cart
            </routerLink>

          </div>

        </div>

      </div>

      <div v-else class="not-found">
        <h1>Product not found</h1>
      </div>

    </div>

    <!-- LIGHTBOX -->

    <div
      v-if="lightboxOpen && product"
      class="lightbox"
      @click.self="closeLightbox">

      <div class="lightbox-content">

        <button
          class="lightbox-close"
          @click="closeLightbox">
           ×
        </button>

        <div class="lightbox-main-image">

          <button
            class="lightbox-arrow lightbox-prev"
            @click="previousImage">
            ‹
          </button>

          <img
            :src="getImage(product.images[selectedImage])"
            :alt="product.name"
          />

          <button
            class="lightbox-arrow lightbox-next"
            @click="nextImage"
          >
            ›
          </button>

        </div>


        <div class="lightbox-thumbnails">

          <button
           v-for="(image, index) in product.images"
           :key="index"
           class="lightbox-thumbnail"
           :class="{ active: selectedImage === index }"
           @click="selectedImage = index" >
            <img
              :src="getImage(image)"
              :alt="product.name"
            />
          </button>

        </div>

      </div>
    </div>
  </main>
  
</template>



<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import menShoes from '../data/men.json'
import womenShoes from '../data/women.json'

import { addToCart } from '../stores/cart'
import { useToast } from '../composables/useToast'

const { showToast } = useToast()

const route = useRoute()


const selectedImage = ref(0)
const lightboxOpen = ref(false)
const quantity = ref(1)
const addedToCart = ref(false)

/* CURRENT PRODUCT*/

const product = computed(() => {

  const products =
    route.params.category === 'men'
      ? menShoes
      : womenShoes

  const found = products.find(
    shoe => shoe.id === Number(route.params.id)
  )

  if (!found) return null

  //  Safety net: if `images` is missing, use `image` alone
  return {
    ...found,
    images:
      found.images && found.images.length
        ? found.images
        : [found.image]
  }
})


/*  LIGHTBOX */

const openLightbox = () => {
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

//  QUANTITY

const increaseQuantity = () => {
   quantity.value++
}  
const decreaseQuantity = () => {
   if (quantity.value > 1) {
    quantity.value--
  }
} 

const handleAddToCart = () => {
  if (!product.value) return

  addToCart(
    product.value,
    quantity.value,
    route.params.category
  )

  addedToCart.value = true

  showToast(`${product.value.name} added to cart`, 'success')

  // Reset the confirmation after 2.5 seconds
  setTimeout(() => {
    addedToCart.value = false
  }, 2500)
}

// Whenever the quantity changes, reset the "Added ✓" state
watch(quantity, () => {
  addedToCart.value = false
})


/*  IMAGE NAVIGATION */

const nextImage = () => {

  if (selectedImage.value < product.value.images.length - 1) {

    selectedImage.value++

  } else {

    selectedImage.value = 0

  }

}

const previousImage = () => {

  if (selectedImage.value > 0) {

    selectedImage.value--

  } else {

    selectedImage.value = product.value.images.length - 1

  }

}


/* IMAGE PATH*/

const getImage = (imageName) => {

  const folder =
    route.params.category === 'men'
      ? 'men'
      : 'women'

  return new URL(
    `../assets/images/${folder}/${imageName}`,
    import.meta.url
  ).href

}

</script>


<style scoped>

.product-page {
  padding: 80px 0;
  background: #ffffff;
}


/* PRODUCT LAYOUT */
.product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}


/* =========================
   PRODUCT GALLERY
========================= */

.product-gallery {
  width: 100%;
}

.main-image {
  position: relative;
  width: 100%;
  height: 520px;
  border-radius: 15px;
  overflow: hidden;
  background: #f5f5f5;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  width: 45px;
  height: 45px;

  border: none;
  border-radius: 50%;

  background: #ffffff;
  color: #111111;

  font-size: 30px;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

  transition: all 0.3s ease;
}

.gallery-arrow:hover {
  transform: translateY(-50%) scale(1.05);
}

.gallery-prev {
  left: 15px;
}

.gallery-next {
  right: 15px;
}


.view-cart-link {
  display: inline-block;
  margin-top: 15px;
  color: #111;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
}

.view-cart-link:hover {
  color: #555;
}

/*  THUMBNAILS */

.thumbnail-list {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  padding: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
  cursor: pointer;
}

.thumbnail.active {
  border-color: #111111;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


/*  PRODUCT INFORMATION */

.product-info {
  max-width: 500px;
}

.product-info .category {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #777777;
  margin-bottom: 18px;
}

.product-info h1 {
  font-size: 42px;
  line-height: 1.15;
  font-weight: 700;
  margin-bottom: 25px;
  color: #111111;
}

.product-info .price {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.product-info .price span {
  font-size: 24px;
  font-weight: 700;
  color: #111111;
}

.product-info .price del {
  font-size: 16px;
  color: #888888;
}

.description {
  color: #666666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 35px;
}


/*  PURCHASE SECTION */

.purchase-section {
  display: flex;
  align-items: stretch;
  gap: 15px;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  height: 55px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0 15px;
}

.quantity-control button {
  border: none;
  background: transparent;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
}

.quantity-control span {
  font-size: 16px;
  font-weight: 600;
}

.add-to-cart {
  flex: 1;
  height: 55px;
  border: none;
  border-radius: 8px;
  background: #111111;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart:hover {
  background: #333333;
}


/*  PRODUCT NOT FOUND */

.not-found {
  text-align: center;
  padding: 100px 0;
}

.not-found h1 {
  font-size: 32px;
}



/* =========================
   LIGHTBOX
========================= */

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;
}


.lightbox-content {
  width: 100%;
  max-width: 600px;

  position: relative;
}


/* =========================
   LIGHTBOX CLOSE BUTTON
========================= */

.lightbox-close {
  position: absolute;
  top: -45px;
  right: 0;

  border: none;
  background: transparent;

  color: #ffffff;

  font-size: 36px;
  line-height: 1;

  cursor: pointer;

  z-index: 3;
}

.lightbox-close:hover {
  opacity: 0.7;
}


/* =========================
   LIGHTBOX MAIN IMAGE
========================= */

.lightbox-main-image {
  position: relative;

  width: 100%;
  height: 550px;

  border-radius: 15px;
  overflow: hidden;

  background: #f5f5f5;
}

.lightbox-main-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;
}


/* LIGHTBOX ARROWS */

.lightbox-arrow {
  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  z-index: 2;

  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;

  background: #ffffff;
  color: #111111;

  font-size: 32px;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.lightbox-arrow:hover {
  transform: translateY(-50%) scale(1.05);
}

.lightbox-prev {
  left: 15px;
}

.lightbox-next {
  right: 15px;
}


/*  LIGHTBOX THUMBNAILS */

.lightbox-thumbnails {
  display: flex;
  justify-content: center;

  gap: 15px;

  margin-top: 20px;
}

.lightbox-thumbnail {
  width: 70px;
  height: 70px;

  padding: 0;

  border: 2px solid transparent;
  border-radius: 8px;

  overflow: hidden;

  background: #f5f5f5;

  cursor: pointer;
}

.lightbox-thumbnail.active {
  border-color: #ffffff;
}

.lightbox-thumbnail img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;
}

/*  TABLET */

@media (max-width: 991px) {

  .product-layout {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .product-info {
    max-width: 100%;
  }

  .main-image {
    height: 500px;
  }

}


/*  MOBILE*/

@media (max-width: 576px) {

  .product-page {
    padding: 40px 0;
  }

  .product-layout {
    gap: 35px;
  }

  .main-image {
    height: 400px;
    border-radius: 10px;
  }

  .thumbnail-list {
    gap: 10px;
  }

  .thumbnail {
    width: 65px;
    height: 65px;
  }

  .product-info h1 {
    font-size: 30px;
  }

  .product-info .price span {
    font-size: 21px;
  }

  .description {
    font-size: 15px;
    line-height: 1.7;
  }

  .purchase-section {
    flex-direction: column;
  }

  .quantity-control {
    width: 100%;
  }

  .add-to-cart {
    width: 100%;
  }

}

</style>