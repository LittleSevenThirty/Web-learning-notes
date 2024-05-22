// (1) 解构赋值
// 对数组和Set结构进行解构赋值时，会默认调用Symbol.iterator方法
let set = new Set().add('a').add('b').add('c');

let [x, y] = set;
console.log(x); // x='a'
console.log(y); // y='b'

// 使用rest参数接收set的剩下的参数时会调用iterator接口
let [first, ...second] = set;
console.log(first); // first='a'
console.log(second); // second=['b', 'c']

// (2)扩展运算符
// 扩展运算符(...)也会调用默认的iterator接口
var str = "hello";
console.log(...str);

var arr = ['b', 'c'];
let arr2 = ['a', ...arr, 'd'];
console.log(arr2);

// 实际上，这提供了一种简便机制，可以将任何部署了 Iterator 接口的数据结构，转为数组。也就是说，
// 只要某个数据结构部署了 Iterator 接口，就可以对它使用扩展运算符，将其转为数组。