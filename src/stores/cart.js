import { ref, computed, watch } from 'vue'
import { promoCodes } from '../data/promos'

/* =========================
   CONFIG
========================= */
const FREE_SHIPPING_THRESHOLD = 100000  // ₦100,000
const STANDARD_SHIPPING_COST = 5000     // ₦5,000


/* =========================
   CART ITEMS
========================= */
const savedCart = localStorage.getItem('solea-cart')

const cartItems = ref(
  savedCart ? JSON.parse(savedCart) : []
)

const addToCart = (product, quantity, category) => {
  const existingItem = cartItems.value.find(
    item =>
      item.id === product.id &&
      item.category === category
  )

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cartItems.value.push({
      id: product.id,
      name: product.name,
      category,
      price: product.price,
      image: product.image,
      quantity
    })
  }
}

const increaseQuantity = (item) => {
  item.quantity++
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--
  }
}

const cartCount = computed(() =>
  cartItems.value.reduce(
    (total, item) => total + item.quantity,
    0
  )
)

const cartTotal = computed(() =>
  cartItems.value.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  )
)


/* =========================
   PROMO CODE STATE
========================= */
const savedPromo = localStorage.getItem('solea-promo')

const appliedPromo = ref(
  savedPromo ? JSON.parse(savedPromo) : null
)

const promoError = ref('')
const promoSuccess = ref('')

const applyPromo = (codeInput) => {
  promoError.value = ''
  promoSuccess.value = ''

  const code = (codeInput || '').trim().toUpperCase()

  if (!code) {
    promoError.value = 'Please enter a promo code.'
    return false
  }

  const promo = promoCodes[code]

  if (!promo) {
    promoError.value = 'Invalid promo code.'
    return false
  }

  if (cartTotal.value < promo.minOrder) {
    promoError.value =
      `This code requires a minimum order of ₦${promo.minOrder.toLocaleString()}.`
    return false
  }

  appliedPromo.value = { code, ...promo }
  promoSuccess.value = `Code "${code}" applied — ${promo.description}.`
  return true
}

const removePromo = () => {
  appliedPromo.value = null
  promoError.value = ''
  promoSuccess.value = ''
}


/* =========================
   SHIPPING + DISCOUNT
========================= */
const qualifiesForFreeShipping = computed(
  () => cartTotal.value >= FREE_SHIPPING_THRESHOLD
)

const amountLeftForFreeShipping = computed(() => {
  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal.value
  return remaining > 0 ? remaining : 0
})

const shippingProgress = computed(() => {
  const percent = (cartTotal.value / FREE_SHIPPING_THRESHOLD) * 100
  return Math.min(percent, 100)
})

const shipping = computed(() => {
  if (cartItems.value.length === 0) return 0
  if (qualifiesForFreeShipping.value) return 0
  if (appliedPromo.value?.type === 'shipping') return 0
  return STANDARD_SHIPPING_COST
})

const discount = computed(() => {
  if (!appliedPromo.value) return 0

  const promo = appliedPromo.value

  if (promo.type === 'percent') {
    return Math.round((cartTotal.value * promo.value) / 100)
  }

  if (promo.type === 'fixed') {
    return Math.min(promo.value, cartTotal.value)
  }

  return 0  // 'shipping' type gives no line discount
})

const finalTotal = computed(() =>
  cartTotal.value + shipping.value - discount.value
)


/* =========================
   PERSISTENCE
========================= */
watch(
  cartItems,
  (newCart) => {
    localStorage.setItem(
      'solea-cart',
      JSON.stringify(newCart)
    )

    // If cart is emptied, clear any applied promo
    if (newCart.length === 0) {
      removePromo()
    }
  },
  { deep: true }
)

watch(
  appliedPromo,
  (newPromo) => {
    if (newPromo) {
      localStorage.setItem(
        'solea-promo',
        JSON.stringify(newPromo)
      )
    } else {
      localStorage.removeItem('solea-promo')
    }
  },
  { deep: true }
)


/* =========================
   EXPORTS
========================= */
export {
  cartItems,
  cartCount,
  cartTotal,
  addToCart,
  increaseQuantity,
  decreaseQuantity,

  // shipping config
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_COST,
  qualifiesForFreeShipping,
  amountLeftForFreeShipping,
  shippingProgress,
  shipping,

  // promo
  appliedPromo,
  promoError,
  promoSuccess,
  applyPromo,
  removePromo,
  discount,

  // totals
  finalTotal
}