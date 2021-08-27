const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать на Promise (не fetch!!!)
const getRequest = (url) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        reject(xhr.statusText)
      } else {
        resolve(JSON.parse(xhr.responseText, null, 2));
      }
    }
  };
  xhr.send();
});

class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.cart = [];
    this.allProducts = [];
    this.#fetchGoods()
        .then(data => {
          this.#goods = [...data];
          this.#render();
        });

    this.addCartItem = this.addCartItem.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
  }

  #fetchGoods() {
    return getRequest(`${API}/catalogData.json`)
        .then(data => data)
        .catch(console.log);
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }

    Array.from(document.querySelectorAll('[data-id]'))
        .forEach(el => {
            el.addEventListener('click', (evt) => {
                const productId = el.dataset.id;
                if (evt.target.classList.contains('buy-btn')) {
                    return this.addCartItem(productId);
                }
            });
        });
  }

  getGoodsPrice() {
    return this.getCartItems().reduce((sumPrice, { price }) => sumPrice + price, 0);
  }

  addCartItem(id) {
      id = parseInt(id, 10);
      this.cart.push(this.allProducts.find(good => good.id === id));
      this.renderTotal();
  }

  findCartItem(id) {
      if (id) {
          return this.cart.findIndex(item => item.id === id);
      }
      return -1;
  }

  removeCartItem(id) {
      id = parseInt(id, 10);
      const itemPosition = this.findCartItem(id);

      if (itemPosition !== -1) {
          this.cart.splice(itemPosition, 1);
          this.renderTotal();
      }
  }

  getCartItems() {
      return this.cart;
  }

  renderTotal() {
      document.getElementById('cart-total').innerHTML = `
        В корзине ${this.getCartItems().length} товаров на ${this.getGoodsPrice()} \u20bd
      `;

      document.getElementById('cart-items').innerHTML = this.getCartItems()
          .map((item) => `<li>${item.title} <button data-id="${item.id}" class="remove-btn">x</button></li>`).join('')

        Array.from(document.querySelectorAll('.remove-btn'))
            .forEach(el => {
                el.addEventListener('click', () => {
                    this.removeCartItem(el.dataset.id);
                })
            });
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const list = new ProductList();