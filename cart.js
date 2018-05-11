"use strict";
function createCart() {
    var products = [];
    return {
        get length() {
            return products.reduce(function (acc, i) { return acc + i.qty; }, 0);
        },
        get total() {
            return products.reduce(function (acc, i) { return acc + i.price; }, 0);
        },
        addProduct: function (product) {
            products.push(product);
            return this;
        },
        add: function (name, price, qty) {
            products.push({ name: name, price: price, qty: qty });
            return this;
        }
    };
}
;
var cart = createCart();
var iphone = {
    name: 'iPhone',
    price: 700,
    qty: 3
};
var samsung = {
    name: 'Sumsung',
    price: 600,
    qty: 7
};
cart.addProduct(iphone).addProduct(samsung).add('Nokia', 300, 2);
console.log(cart.length);
console.log(cart.total);
