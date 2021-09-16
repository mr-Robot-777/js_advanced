<script>
export default {
  props: ['cartItem', 'img'],
}
</script>
<template>
  <div class="cart-item">
    <img class="product-img" v-if="img" :src="img" :alt="cartItem.product_name" />
    <div class="product-bio">
      <div class="product-desc">
        <p class="product-title">{{ cartItem.product_name }}</p>
        <p class="product-quantity">Количество: {{ cartItem.quantity }}</p>
        <p class="product-single-price">{{ cartItem.price }}₽ за шт.</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{ cartItem.quantity * cartItem.price }}₽</p>
      <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
    </div>
  </div>
</template>
<style scoped>
.cart-item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: default;
}
.product-img {
  float: left;
  margin-right: 12px;
}
.product-desc {
  display: block;
  padding-top: 10px;
  font-size: 16px;
}
.product-single-price {
  color: #6394F8;
  margin-right: 8px;
  font-size: 70%;
}
.product-quantity {
  color: #ABB0BE;
}
.right-block {
  text-align: right;
}
.del-btn {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: #e53935;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1px 6px 2px 5px;
  position: relative;
  top: -1px;
  white-space: nowrap;
  letter-spacing: 0;
  border: none;
}
</style>
