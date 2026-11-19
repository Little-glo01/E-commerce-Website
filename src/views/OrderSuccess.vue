<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  cartItems,
  finalTotal,
  removePromo
} from '../stores/cart'

import { orderInfo, clearOrderInfo } from '../stores/order'

const router = useRouter()

const orderNumber = `SL${Date.now().toString().slice(-6)}`



const orderTotal = ref(finalTotal.value)
const orderItemCount = ref(cartItems.value.length)
const deliveryInfo = ref({ ...orderInfo.value })      

onMounted(() => {
  cartItems.value = []
  removePromo() 
  clearOrderInfo()            
})

const continueShopping = () => {
  router.push('/men')
}
</script>
<template>
  <main class="order-success-page">
    <div class="container">

      <div class="success-card">

        <div class="success-icon">
          ✓
        </div>

        <p class="success-label">ORDER CONFIRMED</p>

        <h1>Thank You for Your Order!</h1>

        <p class="success-message">
          Your order has been placed successfully.
          We appreciate you shopping with SOLEA.
        </p>

        <div class="order-details">

          <div class="detail-row">
            <span>Order Number</span>
            <strong>#{{ orderNumber }}</strong>
          </div>

          <div class="detail-row">
            <span>Order Total</span>
            <strong>₦{{ orderTotal.toLocaleString() }}</strong>
          </div>

          <div class="detail-row">
            <span>Items</span>
            <strong>{{ orderItemCount }}</strong>
          </div>

        </div>

        <div
          v-if="deliveryInfo.customerName"
          class="delivery-details">

          <h3 class="delivery-title"><i class="bi bi-geo-alt"></i>
           Delivering To
          </h3>
          <p class="delivery-name">
            <strong>{{ deliveryInfo.customerName }}</strong>
          </p>
          <P class="delivery-line delivery-phone">
            <i class="bi bi-telephone"></i>
            {{ deliveryInfo.phone }}
          </P>
        </div>

        <p class="delivery-message">
          Your order will be processed and prepared for delivery.
          You will receive further information about your order soon.
        </p>

        <button
          type="button"
          class="continue-shopping-button"
          @click="continueShopping"
        >
          Continue Shopping
        </button>

      </div>

    </div>
  </main>
</template>