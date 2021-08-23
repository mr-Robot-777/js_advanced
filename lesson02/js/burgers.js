class Cart {
    items = [];
    getTotal () {
        return this.items.reduce((a, { item }) => a + item.getTotalPrice(), 0);
    }
    getNextItemId() {
        return this.items.length;
    }
    getItem(itemId) {
        return this.items[itemId].item;
    }
    add (item) {
        this.items.push({
            id: this.getNextItemId(),
            item,
        });
        return this;
    }
    remove (itemId) {
        this.items = this.items.filter(({ id }) => id !== itemId);
    }
    contains (itemId) {
        return this.items.includes(({ id }) => id === itemId);
    }
    dump() {
        return [
            ...this.items.map(({ item }) => `${item.getTitle()} [${item.getTotalCalories()}ккал, ${item.getTotalPrice()}руб.]`),
        ].join('\n')
    }
}

const cart = new Cart();

class Product {
    constructor(title = '', basePrice = 0, calories = 0, components = []) {
        this.title = title;
        this.calories = calories;
        this.basePrice = basePrice;
        this.components = components;
        return this;
    }
    addComponent(component) {
        this.components.push(component);
        return this;
    }
    getTitle() {
        let r = this.title;
        if (this.components.length) {
            r += ` (${this.components.map((item) => item.getTitle()).join(', ')})`;
        }
        return r;
    }
    getTotalPrice() {
        return this.components.reduce((total, component) => total + component.getTotalPrice(), this.basePrice);
    }
    getTotalCalories() {
        return this.components.reduce((total, component) => total + component.getTotalCalories(), this.calories);
    }
}


const ingredients = {
    mayo: new Product('Майонез', 20, 5),
    ketchup: new Product('Кетчуп', 15, 0),
    potato: new Product('Картофель', 15, 10),
    cheese: new Product('Сыр', 10, 20),
    salad: new Product('Салат', 20, 5),
}
// создание кетчунеза
ingredients.ketchumayo = new Product('Кетчунез', 0, 0, [ingredients.ketchup, ingredients.mayo]),


// добавляем в корзину разного
cart.add(
    new Product('Маленький', 50, 20, [ingredients.potato])
);
cart.add(
    new Product('Большой', 100, 40, [ingredients.cheese])
);
cart.add(
    new Product('Большой Салатный', 100, 40, [
        ingredients.cheese,
        ingredients.ketchumayo,
        ingredients.salad
    ])
);

console.info(cart.dump())

// решили добавить ещё кетчунеза
console.info(cart.getItem(2).addComponent(ingredients.ketchumayo))
console.info(cart.dump())
