// Hardcoded promo codes for the frontend demo.
// In a real app, this would live on the server.

export const promoCodes = {
  SOLEA10: {
    type: 'percent',
    value: 10,          // 10% off
    minOrder: 50000,    // minimum ₦50,000
    description: '10% off your order'
  },
  WELCOME15: {
    type: 'percent',
    value: 15,
    minOrder: 80000,
    description: '15% off — welcome offer'
  },
  FREESHIP: {
    type: 'shipping',
    value: 0,           // free shipping
    minOrder: 0,
    description: 'Free shipping on any order'
  },
  SAVE5000: {
    type: 'fixed',
    value: 5000,        // ₦5,000 off
    minOrder: 100000,
    description: '₦5,000 off orders over ₦100,000'
  }
}