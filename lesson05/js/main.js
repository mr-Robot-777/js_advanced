const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

new Vue({
    el: '#app',
    data: {
        isLoading: true,
        searchLine: '',
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        cart: [],
        isVisibleCart: false,
    },
    computed: {
        cartTotal() {
           return this.cart.reduce((acc, item) => acc + item.price, 0);
        },
        filteredProducts() {
            const searchText = this.searchLine.trim().toLowerCase();

            if (!searchText) {
                return this.products;
            }

            if (this.products.length) {
                return this.products.filter(product => {
                    return product.product_name.toLowerCase().indexOf(searchText) > -1
                })
            }
            return []
        }
    },
    methods: {
        getMainClass() {
            return {
                main: true,
                isLoading: this.isLoading
            }
        },
        getJson(url) {
            this.isLoading = true;
            return fetch(url)
                .then(result => result.json())
                .finally(() => {
                    this.isLoading = false;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let shouldAdd = true;

            this.cart = this.cart.map((item) => {
                if (item.id === product.id_product) {
                    shouldAdd = false;
                    return {
                        ...item,
                        qty: item.qty + 1,
                        price: item.price + product.price,
                    }
                }

                return item;
            });

            if (shouldAdd) {
                this.cart.push({
                    id: product.id_product,
                    price: product.price,
                    data: product,
                    qty: 1,
                });
            }
        }
    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    }
});
