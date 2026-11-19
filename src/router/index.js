import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Men from '../views/Men.vue'
import Women from '../views/Women.vue'
import About from '../views/About.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Payment from '../views/Payment.vue'
import OrderSuccess from '../views/OrderSuccess.vue'
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/men',
    component: Men
  },
  {
    path: '/women',
    component: Women
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/product/:category/:id',
    component: ProductDetails
  },

  {
    path: '/cart',
    component: Cart
  },

  {
    path: '/checkout',
    component: Checkout
  },

  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },

  {
    path: '/order-success',
    name: 'OrderSuccess',
    component: OrderSuccess
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router