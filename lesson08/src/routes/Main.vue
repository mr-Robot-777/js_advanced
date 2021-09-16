<script>
import Mobile from '../components/Mobile/Mobile.vue';

export default {
  created() {
    this.$on('addToCart', event => {
      this.$root.$emit('addToCart', event);
    })
  },
  data() {
    return this.$root.$data;
  },
  components: {
    Mobile,
  }
};
</script>

<template>
  <div>

    <div class="wrapper slider slider_top">
      <div class="container">
        <Product :data="products[0]" trending noimg />
        <div class="slider-bullets">
          <span class="slider-bullets__bullet"></span>
          <span class="slider-bullets__bullet slider-bullets__bullet_active"></span>
          <span class="slider-bullets__bullet"></span>
        </div>
      </div>
    </div>

    <div class="wrapper section">
      <div class="container">
        <div class="section-header">
          <span class="section-tabs">
              <span class="section-tabs__tab section-tabs__tab_active">Featured</span>
              <span class="section-tabs__tab">New</span>
          </span>
          <span class="section-aside">Explore all</span>
        </div>
        <div v-if="products.length" class="tiles">
          <div v-for="product in products.slice(0, 4)" class="tiles__tile">
            <Product :data="product" tile/>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="container">
        <div class="promo">
          <div class="promo-item">
            <Product :data="{...products[0], img: 'public/img/promo-img.png' }" exclusive />
          </div>
          <div class="promo-item">
            <Product :data="{ ...products[1], img: 'public/img/promo-img1.png' }" exclusive />
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper section">
      <div class="container">
        <div class="section-header">
          <span class="section-title">Trending products</span>
          <span class="section-aside">Explore all</span>
        </div>
        <div v-if="products.length" class="tiles">
          <div v-for="product in products.slice(0, 6)" class="tiles__tile tiles__tile_m">
            <Product :data="product" tile/>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper slider slider_middle">
      <div class="container">
        <Product :data="products[products.length - 1]" hot noimg />
        <div class="slider-bullets">
          <span class="slider-bullets__bullet"></span>
          <span class="slider-bullets__bullet slider-bullets__bullet_active"></span>
          <span class="slider-bullets__bullet"></span>
        </div>
      </div>
    </div>

    <div class="wrapper section">
      <div class="container">
        <div class="tiles">
<!--          <div class="tiles__tile tiles__tile_l">-->
<!--            <Product :data="{...products[0], img: 'public/img/product-1-lg.png' }" exclusive tile />-->
<!--          </div>-->
          <div class="tiles__tile">
            <Product :data="{...products[0], img: 'public/img/product-2-sm.png' }" tile />
          </div>
          <div class="tiles__tile">
            <Product :data="{...products[0], img: 'public/img/product-3-sm.png' }" tile />
          </div>
          <div class="tiles__tile">
            <Product :data="{...products[0], img: 'public/img/product-4-sm.png' }" tile />
          </div>
          <div class="tiles__tile">
            <Product :data="{...products[0], img: 'public/img/product-5-sm.png' }" tile />
          </div>
        </div>
      </div>
    </div>

    <Mobile/>
  </div>

</template>
