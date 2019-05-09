"use strict";

/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
50%, можете использовать метод map */

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

const productsDiscount = products.map(prices => prices.price * 0.5); // уменьшаю каждую цену на 50%
console.log(productsDiscount);