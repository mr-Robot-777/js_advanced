<script>
import Vue from 'vue'
import CartItem from './CartItem.vue'

function pluralize(count, words) {
  const cases = [2, 0, 1, 1, 1, 2];
  return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
}

export default {
  name: 'Cart',
  data() {
    return {
      cartItems: [],
      showCart: false,
    }
  },
  components: {
    CartItem,
  },
  created() {
    this.$root.$on('addToCart', productId => {
      const product = this.$root.getProductById(productId);
      if (product) {
        this.addProduct(product);
      }
    })
  },
  computed: {
    total() {
      const {cartItems} = this;
      if (cartItems.length) {
        return cartItems.reduce((acc, {price = 0, quantity = 1}) => acc + price * quantity, 0);
      }
      return 0;
    },
    title() {
      const {cartItems} = this;
      if (!cartItems.length) {
        return 'Корзина пуста';
      }

      return pluralize(cartItems.length, ['Товар', 'Товара', 'Товаров']);
    },
  },
  methods: {
    getCart() {
      this.$root.getJson(`/getCart`)
          .then(data => {
            this.cartItems = data;
          });
    },
    addProduct(product) {
      this.$root.post(`/addToCart`, product)
        .then(() => {
          this.getCart();
        })
        .then(() => {
          Vue.$toast.open({
            message: `${product.product_name} добавлен. Итого: ${this.total + product.price}₽`,
            type: 'info',
          });
        })
    },
    remove(item) {
      this.$root.post(`/removeFromCart`, item)
          .then(() => {
            this.getCart();
          });
    },
  },
  mounted() {
    this.getCart();
  },
}
</script>
<template>
  <div class="cart">
    <span @click="showCart = !showCart">{{ title }}</span>
    <div class="dropdown" v-if="cartItems.length" v-show="showCart">
      <ul class="items">
        <li v-for="item of cartItems">
          <cart-item
              class="cart-item"
              :key="item.id_product"
              :cart-item="item"
              :img="item.img"
              @remove="remove"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.cart {
  position: relative;
  overflow: visible;
}
.dropdown {
  position: absolute;
  top: 100%;
  margin: 20px 0;
  background: white;
  width: 320px;
  right: 0;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 0px 5px 31px -1px rgba(0, 0, 0, 0.15);
}
.dropdown:after {
  bottom: 100%;
  left: 89%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: white;
  border-width: 8px;
  margin-left: -8px;
}
.items {
}
.items li {
  list-style: none;
}
.items li + li {
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px solid #ccc;
}
</style>
