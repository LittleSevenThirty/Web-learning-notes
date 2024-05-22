// 扩展运算符(spread)是三个点(...)。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列.
console.log(...[1, 2, 3, 4, 5]);    // 1 2 3 4 5

console.log(1, ...[2, 3, 4], 5);    // 1 2 3 4 5

// 该运算主要用于函数调用
function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

const numbers = [4, 38];
console.log(add(...numbers)); // 42 等同于 add(4, 38)

// 上面代码中，array.push(...items)和add(...numbers)这两行，都是函数的调用，它们都使用了扩展运算符。该运算符将一个数组，变为参数序列。

// 扩展运算符与正常的函数参数可以结合使用，非常灵活。

// 扩展运算符后面还可以放置表达式。

// 如果扩展运算符后面是一个空数组，则不产生任何效果。
console.log(...[]); // (no output)

// 注意,只有函数调用时，扩展运算符才可以放入圆括号中，否则会报错。
// (...[1, 2, 3]); // 报错

// console.log((...[1,2,3])); // 报错

// 扩展运算符的应用
// 替代函数的 apply 方法
// 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。

// es5
function f(x, y, z) {
    // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// es6
f(...args);

// 一个实际的例子
console.log(Math.max.apply(null, [14, 3, 77]));

console.log(Math.max(...[12, 3, 77]));

// 等同于
Math.max(14, 3, 77);