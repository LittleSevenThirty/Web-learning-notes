// hello
// 一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员。
// 也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
// for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象
// （比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。

// 数组原生具备有 iterator 接口(即默认部署了 Symbol.iterator 属性),for...of循环本质上就是调用这个接口产生的遍历器

const arr = ["red", "green", "blue"];

for (let v of arr) {
    console.log(v); //red green blue;
}

console.log();

const obj = {}
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for (let v of obj) {
    console.log(v);
}

// 由于obj部署的是数组arr的iterator接口，所以输出结果也是arr的结果

// JavaScript原有的for...in循环，只能或的对象的键名，不能直接获取键值，ES6提供for...of循环，允许遍历获得键值
var arr2 = ['a', 'b', 'c', 'd'];

for (let a in arr2) {
    console.log(a); //  0 1 2 3
}

for (let b of arr2) {
    console.log(b); // a b c d
}

console.log("--------------------");

// Set 和 Map 结构
// Set 和 Map 结构也原生具有 Iterator 接口，可以直接使用for...of循环。

// 类似数组的对象包括好几类。for...of循环可以用于字符串、DOM NodeList 对象、arguments对象

// 并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。
let arrayLike = { length: 2, 0: 'a', 1: 'b' };
// 如果使用以下代码是会出错的
// for (let x of arrayLike) {
//     console.log(x);
// }
// 原因是arrayLike对象没有部署Symbol.iterator属性，所以不能使用for...of循环。
for (let x of Array.from(arrayLike)) {
    console.log(x);
}


// 对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，for...in循环依然可以用来遍历键名。

let es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
};
for (let e in es6) {
    console.log(e);
}
// edition
// committee
// standard
for (let e of es6) {
    console.log(e);
}
// TypeError: es6[Symbol.iterator] is not a function

// 解决方法1：部署独属于对象的iterator接口或者使用Generator函数重新包装一下

// 解决方法2: 并不是所有类似数组的对象都具有 Iterator 接口，一个简便的解决方法，就是使用Array.from方法将其转为数组。   

