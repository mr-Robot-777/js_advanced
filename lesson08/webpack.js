const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('vue-html-webpack-plugin');

const writeStat = (stat = {}) => {
    stat.time = new Date().getTime();

    fs.readFile('stats.json', 'utf8', (err, data) => {
        data = JSON.parse(data || "[]");
        data.push(stat);
        fs.writeFile('stats.json', JSON.stringify(data, null, 2), () => {});
    });
}

module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    mode: 'production',
    output: {
        publicPath: "/",
        path: path.join(__dirname, "public"),
        filename: "bundle-[hash].js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            devServer: 'http://localhost:3000',
            title: '-',
            filename: 'index.html',
            vue: true
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 30000,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        overlay: true,
        https: false,
        inline: true,
        disableHostCheck: true,
        hot: true,
        port: 3000,
        before(app){
            app.use(bodyParser.json());
            app.get('/test', function(req, res) {
                res.json({ custom: 'response' });
            });
            app.get('/getProducts', (req, res) => {
                fs.readFile('getProducts.json', 'utf8', (err, data) => {
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
                // console.info(req);
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

        },
    }
}
