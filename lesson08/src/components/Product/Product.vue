<script>
export default {
  name: 'Product',
  created() {
    this.$on('addToCart', event => {
      this.$root.$emit('addToCart', event);
    })
  },
  props: {
    data: {
      id: {
        type: Number,
        default: 0,
      },
      product_name: {
        type: String,
        default: '',
      },
      product_description: {
        type: String,
      },
      price: {
        type: Number,
      },
      img: {
        type: String,
        default: 'https://placehold.it/50x100',
      },
    },
    trending: {
      type: Boolean,
      default: false,
    },
    exclusive: {
      type: Boolean,
      default: false,
    },
    noimg: {
      type: Boolean,
      default: false,
    },
    hot: {
      type: Boolean,
      default: false,
    },
    tile: {
      type: Boolean,
      default: false,
    },
  }
}
</script>
<template>
  <div :class="['product']" v-if="data">
    <div class="product__content">
      <div v-if="trending" class="product__category color-green">Trending</div>
      <div v-if="exclusive" class="product__category color-blue">Exclusive</div>
      <div v-if="hot" class="product__category color-red">Hot deal</div>
      <div v-if="data.product_name" class="product__title">{{ data.product_name }}</div>
      <div v-if="data.product_description" class="product__description">{{ data.product_description }}</div>

      <span v-if="!tile" class="button product__button" @click="$emit('addToCart', data.id)">
        <span class="button_text">В корзину</span>
      </span>
      <span v-else class="button product__button button_round" @click="$emit('addToCart', data.id)" />
    </div>
    <div class="product__image" v-if="!noimg && data.img">
      <img :alt="data.product_name" :src="data.img" />
    </div>
  </div>
</template>
<style scoped>
.color-red {
  color: #e53935;
}
.color-green {
  color: #43a047;
}
.color-blue {
  color: #1e88e5;
}

.product {
}
.product__category {
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
}
.product__title {
  margin-top: 19px;
  font-size: 22px;
  font-weight: 700;
  white-space: nowrap;
}
.product__description {
  color: #6c6c6c;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  margin-top: 34px;
  max-width: 458px;
  word-break: break-all;
}
.product__button {
  margin-top: 32px;
}

/*.info_s .info__header {*/
/*  font-size: 18px;*/
/*  line-height: 18px;*/
/*}*/

/*.info_s .info__title {*/
/*  font-size: 36px;*/
/*  font-weight: 700;*/
/*  text-transform: capitalize;*/
/*  margin-top: 0;*/
/*}*/

/*.info_s .info__description {*/
/*  font-size: 14px;*/
/*  font-weight: 300;*/
/*  line-height: 24px;*/
/*  max-width: 332px;*/
/*  margin-top: 0;*/
/*}*/


/*.info__title {*/
/*  color: #212121;*/
/*  font-size: 62px;*/
/*  font-weight: 400;*/
/*  line-height: 72px;*/
/*  text-transform: uppercase;*/
/*  margin-top: 22px;*/
/*}*/

/*.info__description {*/
/*}*/


/*.tiles__tile_l .info {*/
/*  left: 32px;*/
/*  bottom: 185px;*/
/*}*/

/*.promo-item .info {*/
/*  left: 51px;*/
/*  bottom: 256px;*/
/*}*/
/*.slider_top .info {*/
/*  bottom: 200px;*/
/*}*/
/*.slider_middle .info {*/
/*  bottom: 286px;*/
/*}*/


</style>



<!--<img alt="" src="public/img/promo-img.png" />-->
<!--<div class="info info_s">-->
<!--<div class="info__header color-blue">Exclusive</div>-->
<!--<div class="info__title">Fishnet chair</div>-->
<!--<div class="info__description">-->
<!--  Seat and back with upholstery made of cold cure foam. Steel frame, available in matt-->
<!--</div>-->
<!--<span class="button">-->
<!--                                <span class="button_text">Order us</span>-->
<!--                            </span>-->
<!--</div>-->
<!--</div>-->
