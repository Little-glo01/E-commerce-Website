<script setup>
import { ref } from 'vue'
import {
  cartItems,
  cartTotal,
  increaseQuantity,
  decreaseQuantity,
  qualifiesForFreeShipping,
  amountLeftForFreeShipping,
  shippingProgress,
  shipping,
  appliedPromo,
  promoError,
  promoSuccess,
  applyPromo,
  removePromo,
  discount,
  finalTotal
} from '../stores/cart'



/*  LOCAL UI STATE */
const promoInput = ref('')

const handleApplyPromo = () => {
  const success = applyPromo(promoInput.value)

  if (success) {
    showToast('Promo code applied', 'success')
    promoInput.value = ''
  } else {
    showToast(promoError.value, 'error')
  }
}

const handleRemovePromo = () => {
  removePromo()
  promoInput.value = ''
  showToast('Promo code removed', 'info')
}


/*  CART ACTIONS */
const removeFromCart = (index) => {
  const item = cartItems.value[index]
  cartItems.value.splice(index, 1)
  showToast(`${item.name} removed from cart`, 'info')
}
const getImage = (imageName, category) => {
  return new URL(
    `../assets/images/${category}/${imageName}`,
    import.meta.url
  ).href
}

</script>


<template>
  <main class="cart-page">
    <div class="container">

      <!-- PAGE HEADING -->
      <div class="page-heading">
        <p class="eyebrow">YOUR BAG</p>
        <div class="heading-row">
          <h1>Shopping Cart</h1>
          <span v-if="cartItems.length > 0" class="item-count">
            {{ cartItems.length }}
            {{ cartItems.length === 1 ? 'item' : 'items' }}
          </span>
        </div>
      </div>


      <  CART WITH ITEM->
      <div v-if="cartItems.length > 0" class="cart-content">

        <!-- LEFT: ITEMS -->
        <div class="cart-items">

          <!-- Free shipping progress -->
          <div class="shipping-progress">
            <div class="shipping-progress-header">
              <template v-if="qualifiesForFreeShipping">
                <i class="bi bi-check-circle-fill"></i>
                <span>
                  <strong>Congratulations!</strong>
                  You qualify for free shipping.
                </span>
              </template>

              <template v-else>
                <i class="bi bi-truck"></i>
                <span>
                  You're
                  <strong>₦{{ amountLeftForFreeShipping.toLocaleString() }}</strong>
                  away from free shipping.
                </span>
              </template>
            </div>

            <div class="shipping-bar">
              <div
                class="shipping-bar-fill"
                :style="{ width: shippingProgress + '%' }"
                :class="{ complete: qualifiesForFreeShipping }"
              ></div>
            </div>
          </div>


          <!-- Items list -->
          <div class="items-list">
            <div
              v-for="(item, index) in cartItems"
              :key="item.id + item.category"
              class="cart-item"
            >

              <!-- Image -->
              <div class="item-image-wrap">
                <img
                  :src="getImage(item.image, item.category)"
                  :alt="item.name"
                  class="item-image"
                />
              </div>

              <!-- Details -->
              <div class="item-details">

                <p class="item-category">
                  {{ item.category }}
                </p>

                <h3 class="item-name">
                  {{ item.name }}
                </h3>

                <p class="item-unit-price">
                  ₦{{ item.price.toLocaleString() }}
                </p>

                <!-- Quantity control -->
                <div class="quantity-control">
                  <button
                    type="button"
                    class="qty-btn"
                    @click="decreaseQuantity(item)"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span class="qty-value">
                    {{ item.quantity }}
                  </span>

                  <button
                    type="button"
                    class="qty-btn"
                    @click="increaseQuantity(item)"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

              </div>

              <!-- Right: total + remove -->
              <div class="item-right">

                <p class="item-total">
                  ₦{{ (item.price * item.quantity).toLocaleString() }}
                </p>

                <button
                  type="button"
                  class="remove-btn"
                  @click="removeFromCart(index)"
                  aria-label="Remove item"
                >
                  <i class="bi bi-trash3"></i>
                  <span>Remove</span>
                </button>

              </div>

            </div>
          </div>


          <!-- Continue shopping -->
          <RouterLink to="/men" class="continue-link">
            <i class="bi bi-arrow-left"></i>
            Continue Shopping
          </RouterLink>

        </div>


        <!-- RIGHT: ORDER SUMMARY -->
        <aside class="order-summary">

          <h2 class="summary-title">
            Order Summary
          </h2>

          <div class="summary-lines">

            <div class="summary-line">
              <span>Subtotal</span>
              <span>₦{{ cartTotal.toLocaleString() }}</span>
            </div>

            <div class="summary-line">
              <span>Shipping</span>
              <span v-if="shipping === 0" class="free-tag">
                Free
              </span>
              <span v-else>
                ₦{{ shipping.toLocaleString() }}
              </span>
            </div>

            <div v-if="discount > 0" class="summary-line">
              <span>Discount ({{ appliedPromo.code }})</span>
              <span class="discount-value">
                −₦{{ discount.toLocaleString() }}
              </span>
            </div>

          </div>

          <!-- Promo code -->
          <div class="promo-section">

            <!-- Input row -->
            <div v-if="!appliedPromo" class="promo-box">
              <input
                v-model="promoInput"
                type="text"
                placeholder="Promo code"
                class="promo-input"
                @keyup.enter="handleApplyPromo"
              />
              <button
                type="button"
                class="promo-btn"
                @click="handleApplyPromo"
              >
                Apply
              </button>
            </div>

            <!-- Applied state -->
            <div v-else class="promo-applied">
              <div class="promo-applied-info">
                <i class="bi bi-check-circle-fill"></i>
                <div>
                  <strong>{{ appliedPromo.code }}</strong>
                  <span>{{ appliedPromo.description }}</span>
                </div>
              </div>
              <button
                type="button"
                class="promo-remove"
                @click="handleRemovePromo"
              >
                Remove
              </button>
            </div>

            <!-- Messages -->
            <p v-if="promoError" class="promo-message error">
              {{ promoError }}
            </p>
            <p v-if="promoSuccess" class="promo-message success">
              {{ promoSuccess }}
            </p>

          </div>

          <!-- Total -->
          <div class="summary-total">
            <span>Total</span>
            <strong>₦{{ finalTotal.toLocaleString() }}</strong>
          </div>

          <!-- Checkout -->
          <RouterLink
            to="/checkout"
            class="checkout-button"
          >
            Proceed to Checkout
            <i class="bi bi-arrow-right"></i>
          </RouterLink>

          <!-- Trust badges -->
          <div class="trust-badges">

            <div class="trust-item">
              <i class="bi bi-shield-lock"></i>
              <span>Secure Payment</span>
            </div>

            <div class="trust-item">
              <i class="bi bi-arrow-counterclockwise"></i>
              <span>Easy Returns</span>
            </div>

            <div class="trust-item">
              <i class="bi bi-headset"></i>
              <span>24/7 Support</span>
            </div>

          </div>

        </aside>

      </div>


      <!-- 
           EMPTY CART
      ========================= -->
      <div v-else class="empty-cart">

        <div class="empty-icon">
          <i class="bi bi-bag"></i>
        </div>

        <h2>Your cart is empty</h2>

        <p>
          Looks like you haven't added anything yet.
          Let's find your perfect pair.
        </p>

        <div class="empty-actions">
          <RouterLink to="/men" class="empty-btn-primary">
            Shop Men
          </RouterLink>
          <RouterLink to="/women" class="empty-btn-secondary">
            Shop Women
          </RouterLink>
        </div>

      </div>

    </div>
  </main>
</template>


<style scoped>

/* =========================
   PAGE
========================= */
.cart-page {
  padding: 70px 0 100px;
  background: #ffffff;
  min-height: 80vh;
}

.eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.5px;
  color: #20a899;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.page-heading {
  margin-bottom: 40px;
}

.heading-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
}

.page-heading h1 {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -1.5px;
  color: #111111;
  margin: 0;
}

.item-count {
  font-size: 14px;
  color: #888888;
  font-weight: 500;
}


/* =========================
   LAYOUT
========================= */
.cart-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 55px;
  align-items: start;
}


/* =========================
   SHIPPING PROGRESS
========================= */
.shipping-progress {
  padding: 22px 26px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f0faf8, #e6f7f3);
  border: 1px solid #d1ede7;
  margin-bottom: 30px;
}

.shipping-progress-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #174f49;
  margin-bottom: 14px;
}

.shipping-progress-header i {
  font-size: 18px;
  color: #20a899;
}

.shipping-progress-header strong {
  color: #0e3a35;
}

.shipping-bar {
  height: 6px;
  background: rgba(32, 168, 153, 0.15);
  border-radius: 100px;
  overflow: hidden;
}

.shipping-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #20a899, #178f84);
  border-radius: 100px;
  transition: width 0.5s ease;
}

.shipping-bar-fill.complete {
  background: linear-gradient(90deg, #1abc9c, #16a085);
}


/* =========================
   ITEMS LIST
========================= */
.items-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.cart-item {
  display: grid;
  grid-template-columns: 130px 1fr auto;
  gap: 26px;
  align-items: flex-start;

  padding: 24px;

  border: 1px solid #eeeeee;
  border-radius: 14px;

  background: #ffffff;

  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.cart-item:hover {
  border-color: #d5d5d5;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
}


/* Image */
.item-image-wrap {
  width: 130px;
  height: 130px;
  border-radius: 10px;
  overflow: hidden;
  background: #f5f5f5;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.cart-item:hover .item-image {
  transform: scale(1.05);
}


/* Details */
.item-details {
  min-width: 0;
}

.item-category {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #999999;
  margin-bottom: 8px;
}

.item-name {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: #111111;
  margin-bottom: 10px;
}

.item-unit-price {
  font-size: 14px;
  color: #777777;
  margin-bottom: 16px;
}


/* Quantity control */
.quantity-control {
  display: inline-flex;
  align-items: center;
  height: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.qty-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  font-size: 18px;
  font-weight: 600;
  color: #111111;
  cursor: pointer;
  transition: background 0.2s ease;
}

.qty-btn:hover {
  background: #e5e5e5;
}

.qty-value {
  min-width: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #111111;
}


/* Right side */
.item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  text-align: right;
}

.item-total {
  font-size: 18px;
  font-weight: 800;
  color: #111111;
  letter-spacing: -0.3px;
}

.remove-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: #999999;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.25s ease;
}

.remove-btn:hover {
  background: #fff1f0;
  color: #e74c3c;
}

.remove-btn i {
  font-size: 14px;
}


/* Continue shopping */
.continue-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
  color: #111111;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.3s ease, color 0.3s ease;
}

.continue-link:hover {
  color: #20a899;
  gap: 12px;
}


/* =========================
   ORDER SUMMARY
========================= */
.order-summary {
  padding: 34px 32px;
  border-radius: 16px;
  background: #fafaf8;
  border: 1px solid #eeeeee;

  position: sticky;
  top: 110px;
}

.summary-title {
  font-size: 22px;
  font-weight: 800;
  color: #111111;
  letter-spacing: -0.5px;
  margin-bottom: 26px;
}

.summary-lines {
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 24px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  color: #555555;
  padding: 8px 0;
}

.summary-line span:last-child {
  font-weight: 600;
  color: #111111;
}

.free-tag {
  color: #20a899 !important;
  font-weight: 700 !important;
}

.discount-value {
  color: #20a899 !important;
  font-weight: 700 !important;
}


/* =========================
   PROMO CODE
========================= */
.promo-section {
  margin-bottom: 26px;
}

.promo-box {
  display: flex;
  gap: 8px;
}

.promo-input {
  flex: 1;
  height: 46px;
  padding: 0 15px;

  border: 1px solid #dddddd;
  border-radius: 8px;

  background: #ffffff;

  font-size: 14px;
  font-family: inherit;

  outline: none;

  transition: border-color 0.2s ease;
}

.promo-input:focus {
  border-color: #111111;
}

.promo-btn {
  padding: 0 20px;
  height: 46px;

  border: 1px solid #111111;
  border-radius: 8px;

  background: #ffffff;
  color: #111111;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.2s ease;
}

.promo-btn:hover {
  background: #111111;
  color: #ffffff;
}


/* Applied state */
.promo-applied {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 16px;
  border-radius: 8px;

  background: #f0faf8;
  border: 1px solid #d1ede7;
}

.promo-applied-info {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.promo-applied-info i {
  font-size: 20px;
  color: #20a899;
  flex-shrink: 0;
}

.promo-applied-info strong {
  display: block;
  font-size: 14px;
  color: #111111;
  margin-bottom: 2px;
}

.promo-applied-info span {
  font-size: 12px;
  color: #555555;
}

.promo-remove {
  border: none;
  background: transparent;

  color: #999999;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition: color 0.2s ease;
  flex-shrink: 0;
}

.promo-remove:hover {
  color: #e74c3c;
}

.promo-message {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5;
}

.promo-message.error {
  color: #e74c3c;
}

.promo-message.success {
  color: #20a899;
  font-weight: 600;
}


/* =========================
   TOTAL
========================= */
.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding: 22px 0;
  margin-bottom: 20px;

  border-top: 1px solid #e5e5e5;
}

.summary-total span {
  font-size: 15px;
  color: #555555;
  font-weight: 500;
}

.summary-total strong {
  font-size: 26px;
  font-weight: 800;
  color: #111111;
  letter-spacing: -0.8px;
}


/* =========================
   CHECKOUT BUTTON
========================= */
.checkout-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: 58px;

  background: #111111;
  color: #ffffff;

  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  text-decoration: none;

  border-radius: 10px;

  transition: all 0.3s ease;
}

.checkout-button:hover {
  background: #20a899;
  gap: 14px;
}

.checkout-button i {
  font-size: 16px;
}


/* =========================
   TRUST BADGES
========================= */
.trust-badges {
  display: flex;
  justify-content: space-between;
  gap: 12px;

  margin-top: 24px;
  padding-top: 24px;

  border-top: 1px solid #e5e5e5;
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  flex: 1;

  text-align: center;
}

.trust-item i {
  font-size: 20px;
  color: #20a899;
}

.trust-item span {
  font-size: 11px;
  font-weight: 600;
  color: #777777;
  letter-spacing: 0.3px;
}


/* =========================
   EMPTY CART
========================= */
.empty-cart {
  text-align: center;
  padding: 100px 20px;
  max-width: 500px;
  margin: 0 auto;
}

.empty-icon {
  width: 90px;
  height: 90px;

  margin: 0 auto 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #f5f5f5;
}

.empty-icon i {
  font-size: 38px;
  color: #20a899;
}

.empty-cart h2 {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #111111;
  margin-bottom: 14px;
}

.empty-cart p {
  font-size: 15px;
  line-height: 1.7;
  color: #777777;
  margin-bottom: 32px;
}

.empty-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.empty-btn-primary,
.empty-btn-secondary {
  display: inline-block;
  padding: 15px 32px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 8px;

  transition: all 0.3s ease;
}

.empty-btn-primary {
  background: #111111;
  color: #ffffff;
}

.empty-btn-primary:hover {
  background: #20a899;
  transform: translateY(-2px);
}

.empty-btn-secondary {
  background: transparent;
  color: #111111;
  border: 2px solid #111111;
}

.empty-btn-secondary:hover {
  background: #111111;
  color: #ffffff;
  transform: translateY(-2px);
}


/* =========================
   TABLET
========================= */
@media (max-width: 991px) {

  .cart-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .order-summary {
    position: static;
    max-width: 560px;
    margin: 0 auto;
    width: 100%;
  }

  .page-heading h1 {
    font-size: 36px;
  }
}


/* =========================
   MOBILE
========================= */
@media (max-width: 576px) {

  .cart-page {
    padding: 45px 0 70px;
  }

  .page-heading {
    margin-bottom: 30px;
  }

  .page-heading h1 {
    font-size: 30px;
  }

  .cart-item {
    grid-template-columns: 90px 1fr;
    gap: 16px;
    padding: 16px;
  }

  .item-image-wrap {
    width: 90px;
    height: 90px;
  }

  .item-name {
    font-size: 16px;
  }

  .item-unit-price {
    margin-bottom: 12px;
  }

  .item-right {
    grid-column: 2;
    align-items: flex-start;
    text-align: left;
    padding-top: 8px;
    border-top: 1px solid #eeeeee;
    width: 100%;
  }

  .item-total {
    font-size: 16px;
  }

  .order-summary {
    padding: 26px 22px;
  }

  .summary-total strong {
    font-size: 22px;
  }

  .trust-badges {
    gap: 6px;
  }

  .trust-item span {
    font-size: 10px;
  }

  .empty-cart h2 {
    font-size: 24px;
  }

  .empty-actions {
    flex-direction: column;
  }

  .empty-btn-primary,
  .empty-btn-secondary {
    width: 100%;
  }
}

</style>