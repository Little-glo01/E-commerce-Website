<template>
  <section class="trust-strip">
    <div class="container">
      <div class="strip-grid">

        <div class="strip-item">
          <div class="strip-icon">
            <i class="bi bi-truck"></i>
          </div>
          <div>
            <h4>Free Shipping</h4>
            <p>On orders over ₦100,000</p>
          </div>
        </div>

        <div class="strip-item">
          <div class="strip-icon">
            <i class="bi bi-arrow-counterclockwise"></i>
          </div>
          <div>
            <h4>Easy Returns</h4>
            <p>14-day return policy</p>
          </div>
        </div>

        <div class="strip-item">
          <div class="strip-icon">
            <i class="bi bi-shield-lock"></i>
          </div>
          <div>
            <h4>Secure Payment</h4>
            <p>100% protected checkout</p>
          </div>
        </div>

        <div class="strip-item">
          <div class="strip-icon">
            <i class="bi bi-headset"></i>
          </div>
          <div>
            <h4>24/7 Support</h4>
            <p>We're always here to help</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-strip {
  padding: 70px 0;
  background: #fafaf8;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
}

.strip-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.strip-item {
  display: flex;
  align-items: center;
  gap: 18px;
}

.strip-icon {
  width: 52px;
  height: 52px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: rgba(32, 168, 153, 0.1);

  transition: background 0.3s ease, transform 0.3s ease;
}

.strip-icon i {
  font-size: 22px;
  color: #20a899;
}

.strip-item:hover .strip-icon {
  background: #20a899;
  transform: scale(1.05);
}

.strip-item:hover .strip-icon i {
  color: #ffffff;
}

.strip-item h4 {
  font-size: 15px;
  font-weight: 700;
  color: #111111;
  margin-bottom: 4px;
}

.strip-item p {
  font-size: 13px;
  color: #777777;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 991px) {
  .strip-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 26px 30px;
  }
}

@media (max-width: 576px) {
  .trust-strip {
    padding: 50px 0;
  }

  .strip-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
}
</style>