const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 4000;

const app = express();

const writeStat = (stat = {}) => {
    stat.time = new Date().getTime();

    fs.readFile('stats.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        data.push(stat);
        fs.writeFile('stats.json', JSON.stringify(data, null, 2), () => {});
    });
}

app.use(bodyParser.json());
app.use(express.static('.'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./../index.html'));
});
app.get('/catalogData', (req, res) => {
    fs.readFile('catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});
app.get('/getCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
})
app.post('/removeFromCart', (req, res) => {
    const { price, product_name } = req.body;

    fs.readFile('cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        let find = cart.find(el => el.product_name === product_name);
        if(find){
            if(find.quantity>1){
                find.quantity--;
            } else {
                cart.splice(cart.indexOf(find), 1)
            }

            fs.writeFile('cart.json', JSON.stringify(cart, null, 2), (err) => {
                writeStat({ action: 'remove', product_name });
                res.sendStatus(err ? 500 : 200);
            });
        } else {
            res.sendStatus(200);
        }
    });
});
app.post('/addToCart', (req, res) => {
    const { price, product_name } = req.body;

    fs.readFile('cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        let find = cart.find(el => el.product_name === product_name);
        if(find){
            find.quantity++;
        } else {
            let prod = Object.assign({quantity: 1}, { product_name, price });
            cart.push(prod)
        }

        fs.writeFile('cart.json', JSON.stringify(cart, null, 2), (err) => {
            writeStat({ action: 'add', product_name });
            res.sendStatus(err ? 500 : 200);
        });
    });
});
app.listen(PORT, function() {
    console.log('server is running on port %s!', PORT);
});
