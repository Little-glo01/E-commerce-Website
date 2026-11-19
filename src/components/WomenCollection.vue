<script setup>
defineProps({
  shoes: {
    type: Array,
    required: true
  }
})

const getImage = (imageName) => {
  return new URL(
    `../assets/images/women/${imageName}`,
    import.meta.url
  ).href
}
</script>

<template>
  <section class="women-collection">
    <div class="container">

      <div class="section-heading">
        <p>FOR HER</p>
        <h2>Women's Collection</h2>
        <p>Discover elegant styles made to complete your look.</p>
      </div>

      <div class="row">
        <div
          v-for="shoe in shoes.slice(0, 4)"
          :key="shoe.id"
          class="col-12 col-sm-6 col-lg-3 mb-4"
        >

          <!-- ✅ NEW: RouterLink wrapper -->
          <RouterLink
            :to="`/product/women/${shoe.id}`"
            class="product-link"
          >

            <div class="product-card">

              <div class="product-image">
                <img
                  :src="getImage(shoe.image)"
                  :alt="shoe.name"
                />

                <span v-if="shoe.isNew" class="badge">
                  New
                </span>

                <span v-if="shoe.isSale" class="sale-badge">
                  Sale
                </span>
              </div>

              <div class="product-info">
                <p class="category">{{ shoe.category }}</p>

                <h3>{{ shoe.name }}</h3>

                <div class="price">
                  <span>₦{{ shoe.price.toLocaleString() }}</span>

                  <del v-if="shoe.isSale">
                    ₦{{ shoe.oldPrice.toLocaleString() }}
                  </del>
                </div>
              </div>

            </div>

          </RouterLink>

        </div>
      </div>

      <div class="collection-action">
        <RouterLink to="/women">
          View All Women's Shoes
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ✅ NEW: makes the whole card clickable without ugly link styling */
.product-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.women-collection {
  padding: 80px 0;
  background: #ffffff;
}

.section-heading {
  text-align: center;
  margin-bottom: 50px;
}

.section-heading > p:first-child {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.section-heading h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
}

.section-heading h2 + p {
  color: #666;
  font-size: 16px;
  margin: 0;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.product-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: #f5f5f5;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 20px 5px 10px;
}

.product-info .category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #777;
  margin-bottom: 8px;
}

.product-info h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.4;
}

.price {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price span {
  font-size: 17px;
  font-weight: 700;
}

.price del {
  font-size: 14px;
  color: #888;
}

.badge, .sale-badge {
  position: absolute;
  top: 15px;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 4px;
}

.badge {
  left: 15px;
}

.sale-badge {
  right: 15px;
}

.collection-action {
  text-align: center;
  margin-top: 20px;
}

.collection-action a {
  padding: 12px 28px;
  border: 1px solid #222;
  background: transparent;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

.collection-action a:hover {
  background: #222;
  color: #fff;
}
</style>