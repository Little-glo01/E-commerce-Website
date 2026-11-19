<template>
  <main class="women-page">

    <div class="container">

      <!-- Page heading -->
      <div class="page-heading">
        <p>FOR HER</p>
        <h1>Women's Shoes</h1>
        <p>Explore our complete collection of women's footwear.</p>
      </div>

      <!-- Products -->
      <div class="row">

        <div
          v-for="shoe in womenShoes"
          :key="shoe.id"
          class="col-12 col-sm-6 col-lg-3 mb-4"
        >
          <RouterLink
            :to="`/product/women/${shoe.id}`"
            class="product-link">
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
                <p class="category">
                  {{ shoe.category }}
                </p>
                <h3>
                  {{ shoe.name }}
                </h3>
                <div class="price">
                  <span>
                    ₦{{ shoe.price.toLocaleString() }}
                  </span>
                  <del v-if="shoe.isSale">
                    ₦{{ shoe.oldPrice.toLocaleString() }}
                  </del>
                </div>

              </div>

            </div>
          </RouterLink>
        </div>

      </div>

    </div>

  </main>
</template>

<script setup>
import womenShoes from '../data/women.json'

const getImage = (imageName) => {
  return new URL(
    `../assets/images/women/${imageName}`,
    import.meta.url
  ).href
}
</script>

<style scoped>
.women-page {
  padding: 80px 0;
  background: #ffffff;
}

.page-heading {
  text-align: center;
  margin-bottom: 50px;
}

.page-heading > p:first-child {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.page-heading h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 12px;
}

.page-heading h1 + p {
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
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.product-link {
  display: block;
  color: inherit;
  text-decoration: none;
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

.badge,
.sale-badge {
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
</style>