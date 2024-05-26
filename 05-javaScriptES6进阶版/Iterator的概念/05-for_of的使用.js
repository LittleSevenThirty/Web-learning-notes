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