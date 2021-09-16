import '../public/global.css';
import Vue from 'vue';
import App from './App.vue';
import Cart from './components/Cart/Cart.vue';
import Product from './components/Product/Product.vue';
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueToast);
Vue.component('Cart', Cart)
Vue.component('Product', Product)
Vue.config.productionTip = false

const API = '';

function onError(error) {
  console.log(error);
  Vue.$toast.open({
    message: error.message,
    type: 'error',
  });
}

new Vue({
  el: '#app',
  router,
  data() {
    return {
      products: [],
      userSearch: ''
    }
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    getProductById(id) {
      if (id && this.products.length) {
        return this.products.find((product) => product.id === id);
      }

      return null;
    },
    getProducts() {
      this.getJson(`/getProducts`)
          .then(data => {
            this.products = data;
          });
    },
    getJson(url) {
      return fetch(`${API}${url}`)
          .then(result => result.json())
          .catch(onError)
    },
    post(url, data = {}) {
      return fetch(url, {
        method: 'post',
        headers: [
          ['Content-Type', 'application/json; charset=UTF-8']
        ],
        body: JSON.stringify(data)
      }).catch(onError)
    },
  },
  render: h => h(App),
})
