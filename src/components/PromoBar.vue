<template>
  <section class="promotion-bar">
    <div class="promotion-content">
      <div class="promotion-item">
        <i class="bi bi-truck"></i>
        <span>FREE DELIVERY ON ORDERS OVER ₦100,000</span>
      </div>

      <div class="promotion-divider"></div>

      <div class="promotion-item">
        <i class="bi bi-stars"></i>
        <span>NEW SEASON COLLECTION</span>
      </div>

      <div class="promotion-divider"></div>

      <div class="promotion-item">
        <i class="bi bi-tag"></i>
        <span>UP TO 30% OFF SELECTED STYLES</span>
      </div>

    </div>

  </section>
</template>


<style scoped>

.promotion-bar {
  width: 100%;
  background: linear-gradient(
    90deg,
    #e8f8f5,
    #f8fffd,
    #e8f8f5
  );

  border-bottom: 1px solid #d5eee9;

  overflow: hidden;
}


.promotion-content {
  min-height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 25px;

  padding: 0 20px;

  color: #174f49;

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.8px;
  text-transform: uppercase;
}


.promotion-item {
  display: flex;
  align-items: center;
  gap: 8px;

  white-space: nowrap;
}


.promotion-item i {
  color: #20a899;
  font-size: 0.95rem;
}


.promotion-divider {
  width: 1px;
  height: 18px;

  background: #a9dcd5;
}


/*  HOVER */

.promotion-item {
  transition: transform 0.3s ease;
}

.promotion-item:hover {
  transform: translateY(-1px);
}


/* 
   TABLET */

@media (max-width: 991px) {

  .promotion-content {
    gap: 18px;
    font-size: 0.68rem;
  }

}


/*  MOBILE */

@media (max-width: 767px) {

  .promotion-content {
    min-height: 42px;

    gap: 10px;

    padding: 0 12px;

    font-size: 0.62rem;
    letter-spacing: 0.5px;
  }


  .promotion-item {
    gap: 5px;
  }


  .promotion-item i {
    font-size: 0.8rem;
  }


  .promotion-divider {
    height: 15px;
  }


  /* Hide the third promotion on smaller screens */

  .promotion-item:nth-of-type(3),
  .promotion-divider:nth-of-type(2) {
    display: none;
  }

}


/* 
   480px */

@media (max-width: 480px) {

  .promotion-content {
    min-height: 40px;

    gap: 7px;

    padding: 0 10px;

    font-size: 0.55rem;
    letter-spacing: 0.3px;
  }


  .promotion-item {
    gap: 4px;
  }

  .promotion-item i {
    font-size: 0.7rem;
  }
}

</style>