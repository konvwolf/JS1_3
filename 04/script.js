"use strict";

/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter
2. Отсортируйте товары по цене, можете использовать метод sort */

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsPhotos = products.filter(photo => photo.photos != undefined).sort(
// создаю массив продуктов, у которых есть фотографии, и сортирую его по убыванию цены
    function(a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
    }
);

console.log(productsPhotos);