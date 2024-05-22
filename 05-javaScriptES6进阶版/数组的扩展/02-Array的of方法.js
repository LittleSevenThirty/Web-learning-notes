// Array.of()方法，用于将一组数转为数组
// eg:
let a, b, c;
a = Array.of(3, 11, 8);
b = Array.of(3);
c = Array.of(); // 如果没有参数则会创建一个空数组
d = Array();
console.log(a);
console.log(b);
console.log(c.length === d.length);

// 这个函数的主要目的：是弥补数组的构造函数 Array() 的不足，因为参数个数的不同，会导致Array()的行为有差异
let e = new Array(3);
let f = Array(3, 11, 8);
console.log(e);

// 由于传入的参数个数的不同：会导致构造函数的结果不同，比如：

// ```
// let g = Array(3, 11, 8);
// console.log(g); // [3, 11, 8]
// ```
// - Array.of()方法没有限制参数的个数，可以传入0个或任意个参数