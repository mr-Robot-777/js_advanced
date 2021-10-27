Vue.component('cart', {
    props: ['isVisibleCart', 'cartTotal'],
    template: `
        <button @click="toggle" class="btn-cart" type="button">Корзина {{cartTotal}}</button>
    `,
     methods: {
       toggle() {
         this.$emit('toggle', !this.isVisibleCart);
       }
     }
})