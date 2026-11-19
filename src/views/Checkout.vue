<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  cartItems,
  cartTotal,
  shipping,
  discount,
  finalTotal,
  appliedPromo
} from '../stores/cart'

import { saveOrderInfo } from '../stores/order'

const router = useRouter()

const customerName = ref('')
const phone = ref('')
const address = ref('')
const city = ref('')
const state = ref('')

const errorMessage = ref('')

const continueToPayment = () => {

  errorMessage.value = ''

  if (
    !customerName.value.trim() ||
    !phone.value.trim() ||
    !address.value.trim() ||
    !city.value.trim() ||
    !state.value.trim()
  ) {

    errorMessage.value = 'Please complete all delivery information before continuing.'
    return
  }
  saveOrderInfo({
    customerName: customerName.value.trim(),
    phone: phone.value.trim(),
    address: address.value.trim(),
    city: city.value.trim(),
    state: state.value.trim()
  })

  router.push('/payment')
}
</script>

<template>
  <main class="checkout-page">
    <div class="container">

      <!-- Page heading -->
      <div class="page-heading">
        <p>CHECKOUT</p>
        <h1>Complete Your Order</h1>
      </div>


      <div class="checkout-layout">

        <!-- Customer and delivery information -->
        <section class="checkout-form">

          <div class="checkout-section">
            <h2>Customer Information</h2>

            <div class="form-group">
              <label for="name">Full Name</label>

              <input
                id="name"
                v-model="customerName"
                type="text"
                placeholder="Enter your full name"
              >
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>

              <input
                id="phone"
                v-model="phone"
                type="tel"
                placeholder="Enter your phone number"
              >
            </div>

          </div>

          <div class="checkout-section">
            <h2>Delivery Information</h2>

            <div class="form-group">
              <label for="address">Delivery Address</label>

              <textarea
                id="address"
                v-model="address"
                rows="4"
                placeholder="Enter your delivery address"
              ></textarea>
            </div>

            <div class="form-row">

              <div class="form-group">
                <label for="city">City</label>
                <input
                  id="city"
                  v-model="city"
                  type="text"
                  placeholder="City"
                >
              </div>


              <div class="form-group">
                <label for="state">State</label>

                <input
                  id="state"
                  v-model="state"
                  type="text"
                  placeholder="State"
                >
              </div>

            </div>

          </div>

        </section>

        <!-- Order summary -->
        <aside class="order-summary">

          <h2>Your Order</h2>

          <div
            v-for="item in cartItems"
            :key="item.id + item.category"
            class="summary-item"
          >

            <div>
              <h3>{{ item.name }}</h3>

              <p>
                {{ item.quantity }} ×
                ₦{{ item.price.toLocaleString() }}
              </p>
            </div>

            <strong>
              ₦{{ (item.price * item.quantity).toLocaleString() }}
            </strong>

          </div>

          <div class="summary-lines">
            <div class="summary-line">
              <span>Subtotal</span>
              <span>₦{{ cartTotal.toLocaleString() }}</span>
            </div>

            <div class="summary-line">
              <span>Shipping</span>
              <span v-if="shipping === 0" class="free-tag">Free</span>
              <span v-else>₦{{ shipping.toLocaleString() }}</span>
            </div>

            <div v-if="discount > 0" class="summary-line">
              <span>Discount ({{ appliedPromo.code }})</span>
              <span class="discount-value">
                −₦{{ discount.toLocaleString() }}
              </span>
            </div>
          </div>

          <div class="summary-total">
            <span>Total</span>
            <strong>₦{{ finalTotal.toLocaleString() }}</strong>
          </div>
          <p v-if="errorMessage" class="form-error">
              {{ errorMessage }}
          </p>
          <button 
          type="button"
          class="payment-button"
          @click="continueToPayment">
            Continue to Payment
          </button>

        </aside>

      </div>

    </div>

  </main>
</template>

<style scoped>

.checkout-page {
  padding: 70px 0;
  background: #ffffff;
  min-height: 80vh;
}


/* PAGE HEADING */

.page-heading {
  margin-bottom: 50px;
}

.page-heading p {
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #777;
}

.page-heading h1 {
  margin: 0;
  font-size: 40px;
  font-weight: 700;
  color: #111;
}


/* MAIN CHECKOUT LAYOUT */

.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 50px;
  align-items: start;
}


/* FORM SECTIONS */

.checkout-section {
  padding: 30px;
  margin-bottom: 25px;

  border: 1px solid #eeeeee;
  border-radius: 10px;

  background: #ffffff;
}

.checkout-section h2 {
  margin-bottom: 25px;

  font-size: 21px;
  font-weight: 700;

  color: #111;
}


/* FORM GROUP */

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;

  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 600;

  color: #222;
}

.form-group input,
.form-group textarea {
  width: 100%;

  padding: 14px 15px;

  border: 1px solid #dddddd;
  border-radius: 6px;

  background: #ffffff;

  font-family: inherit;
  font-size: 14px;

  outline: none;

  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #111111;
}

.form-group textarea {
  resize: vertical;
}


/* TWO INPUTS BESIDE EACH OTHER */

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}


/* ORDER SUMMARY */

.order-summary {
  padding: 30px;

  border-radius: 10px;

  background: #f7f7f7;

  position: sticky;
  top: 110px;
}

.order-summary h2 {
  margin-bottom: 25px;

  font-size: 22px;
  font-weight: 700;

  color: #111;
}


/* SUMMARY ITEM */

.summary-item {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  padding: 18px 0;

  border-bottom: 1px solid #dddddd;
}

.summary-item h3 {
  margin-bottom: 7px;

  font-size: 15px;
  font-weight: 600;

  color: #111;
}

.summary-item p {
  margin: 0;

  font-size: 13px;
  color: #777;
}

.summary-item strong {
  font-size: 14px;
  white-space: nowrap;
  color: #111;
}


/* TOTAL */

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 22px 0;
}

.summary-total span {
  font-size: 15px;
  color: #555;
}

.summary-total strong {
  font-size: 20px;
  color: #111;
}


/* PAYMENT BUTTON */

.payment-button {
  width: 100%;
  height: 55px;

  border: none;
  border-radius: 7px;

  background: #111111;
  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition: background 0.3s ease;
}

.payment-button:hover {
  background: #333333;
}


.form-error {
  margin-bottom: 15px;
  padding: 12px 15px;

  border-radius: 6px;

  background: #f5f5f5;
  color: #555555;

  font-size: 13px;
  line-height: 1.5;
}

.summary-lines {
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 0;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #555555;
  padding: 6px 0;
}

.summary-line span:last-child {
  font-weight: 600;
  color: #111111;
}

.free-tag,
.discount-value {
  color: #20a899 !important;
  font-weight: 700 !important;
}

/* TABLET */

@media (max-width: 991px) {

  .checkout-layout {
    grid-template-columns: 1fr;
  }

  .order-summary {
    position: static;
  }

}


/* MOBILE */

@media (max-width: 576px) {

  .checkout-page {
    padding: 45px 0;
  }

  .page-heading {
    margin-bottom: 30px;
  }

  .page-heading h1 {
    font-size: 30px;
  }

  .checkout-section {
    padding: 22px 18px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .order-summary {
    padding: 22px 18px;
  }

}

</style>