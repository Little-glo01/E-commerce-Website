<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  cartTotal,
  shipping,
  discount,
  finalTotal,
  appliedPromo
} from '../stores/cart'

const router = useRouter()

const paymentMethod = ref('card')
const errorMessage = ref('')

const cardNumber = ref('')
const expiryDate = ref('')
const cvv = ref('')

const makePayment = () => {
  errorMessage.value = ''

  if (paymentMethod.value === 'card') {
    if (
      !cardNumber.value.trim() ||
      !expiryDate.value.trim() ||
      !cvv.value.trim()
    ) {
      errorMessage.value = 'Please complete your card details.'
      return
    }
  }

  // Payment is simulated for now
  // In the future, this will happen after
  // the payment gateway confirms payment.

  router.push('/order-success')
}
 
</script>

<template>
  <main class="payment-page">
    <div class="container">

      <div class="page-heading">
        <p>PAYMENT</p>
        <h1>Complete Your Order</h1>
      </div>

      <div class="payment-layout">

        <!-- PAYMENT FORM -->
        <section class="payment-form">
          <h2>Payment Method</h2>
          <div class="payment-options">

            <label class="payment-option">
              <input
                type="radio"
                value="card"
                v-model="paymentMethod"
              />
              <span>Card Payment</span>
            </label>

            <label class="payment-option">
              <input
                type="radio"
                value="transfer"
                v-model="paymentMethod"
              />
              <span>Bank Transfer</span>
            </label>

          </div>

          <!-- CARD PAYMENT -->

          <div v-if="paymentMethod === 'card'" class="card-fields">

            <div class="form-group">
              <label>Card Number</label>
              <input
                v-model="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div class="form-row">

              <div class="form-group">
                <label>Expiry Date</label>
                <input
                  v-model="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                />
              </div>

              <div class="form-group">
                <label>CVV</label>
                <input
                  v-model="cvv"
                  type="password"
                  placeholder="123"
                />
              </div>

            </div>

          </div>

          <!-- BANK TRANSFER -->

          <div
            v-if="paymentMethod === 'transfer'"
            class="transfer-info"
          >
            <h3>Bank Transfer</h3>

            <p>
              After placing your order, you will receive the
              bank transfer instructions.
            </p>
          </div>

          <p v-if="errorMessage" class="form-error">
            {{ errorMessage }}
          </p>

          <button
            type="button"
            class="payment-button"
            @click="makePayment"
          >
            Pay ₦{{ finalTotal.toLocaleString() }}
          </button>

        </section>

        <!-- ORDER SUMMARY -->

        <aside class="payment-summary">
          <h2>Order Summary</h2>

          <div class="summary-row">
            <span>Subtotal</span>
            <strong>₦{{ cartTotal.toLocaleString() }}</strong>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <strong v-if="shipping === 0" class="free-tag">Free</strong>
            <strong v-else>₦{{ shipping.toLocaleString() }}</strong>
          </div>

          <div v-if="discount > 0" class="summary-row">
            <span>Discount ({{ appliedPromo.code }})</span>
            <strong class="discount-value">
             −₦{{ discount.toLocaleString() }}
            </strong>
          </div>

          <div class="summary-divider"></div>
          <div class="summary-row total">
            <span>Total</span>
            <strong>₦{{ finalTotal.toLocaleString() }}</strong>
          </div>
        </aside>
      </div>

    </div>
  </main>
</template>