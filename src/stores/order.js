import { ref, watch } from 'vue'
const savedInfo = localStorage.getItem('solea-order-info')
const orderInfo = ref(
  savedInfo ? JSON.parse(savedInfo) : {
    customerName: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  }
)

const saveOrderInfo = (info) => {
  orderInfo.value = { ...info }
}

const clearOrderInfo = () => {
  orderInfo.value = {
    customerName: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  }
}

// Persist to localStorage
watch(
  orderInfo,
  (val) => {
    localStorage.setItem('solea-order-info', JSON.stringify(val))
  },
  { deep: true }
)

export {
  orderInfo,
  saveOrderInfo,
  clearOrderInfo
}