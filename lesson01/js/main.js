const products = (() => {
    const minPrice = 10;
    const maxPrice = 100;
    const names = [
        "Abby",
        "Angel",
        "Annie",
        "Baby",
        "Bailey",
        "Garfield",
        "George",
        "Ginger",
        "Gizmo",
        "Gracie",
        "Harley",
        "Jack",
        "Jasmine",
        "Jasper",
        "Kiki",
        "Kitty",
        "Leo",
        "Lilly",
        "Lily",
        "Loki",
        "Misty",
        "Mittens",
        "Molly",
        "Muffin",
        "Nala",
        "Oliver",
        "Oreo",
        "Oscar",
        "Simon",
        "Smokey",
        "Snickers",
        "Snowball",
        "Snuggles",
        "Socks",
        "Sophie",
        "Spooky",
        "Sugar",
        "Tiger",
        "Tigger",
        "Tinkerbell",
        "Toby",
        "Trouble",
        "Whiskers",
        "Willow",
        "Zoe",
        "Zoey"
    ];
    const rndItem = (a) => a[Math.floor(Math.random() * a.length)];
    const rndFloat = () => (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);

    const items = [];

    const add = (totalItems) => {
        while (totalItems--) {
            items.push({
                id: totalItems,
                title: rndItem(names),
                price: rndFloat(),
                img:`287.jpeg`,
                description: 'Да ведь это же КИСУЛЯ!'
            });
        }
    }

    return {
        add,
        getItems: () => items,
    }
})();

const renderProduct = ({id = 0, title = '', price = 0, img = '', description = ''}) => {
    if (!price) {
        return '';
    }

    return `
      <div class="product">
        <div class="productId">${id}</div>
        <div class="productAside" style="background-image: url('${img}')"></div>
        <div class="productDetails">
            <div class="productData">
              <div class="productTitle">${title}</div>
              <div class="productPrice">$${price}</div>
            </div>
            <div class="productControls">
              <div class="productDescription">${description}</div>
              <button class="productButton" data-id="${id}">Мне такое надо!</button>
            </div>
        </div>
      </div>
  `;
};



const renderProducts = () => {
    products.add(20);
    document.querySelector('.products').innerHTML = products.getItems().map(renderProduct).join('');
}



renderProducts();


document.getElementById('logo')
    .addEventListener('click', () => {
    [...document.getElementsByTagName('main')][0].classList.toggle('wide');
}, false); 
