"use strict";

// Выведите в консоль значения, указанные рядом с комментариями

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    commments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

console.log(post.author); // John
console.log(post.commments[0].rating.dislikes); // 2
console.log(post.commments[1].userId); // 5
console.log(post.commments[1].text); // lorem ipsum 2