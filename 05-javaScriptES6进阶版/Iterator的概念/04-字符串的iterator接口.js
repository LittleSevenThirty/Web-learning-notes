// 字符串是一个类似数组的对象, 也具有iterator接口
var someString = "hi";
console.log(typeof someString[Symbol.iterator]);

var iterator = someString[Symbol.iterator]();
console.log(iterator.next());  // { value: 'h', done: false }
console.log(iterator.next());  // { value: 'i', done: false }
console.log(iterator.next());  // { value: undefined, done: true }

// 可以覆盖原生的Symbol.iterator方法，达到修改遍历器行为的目的。