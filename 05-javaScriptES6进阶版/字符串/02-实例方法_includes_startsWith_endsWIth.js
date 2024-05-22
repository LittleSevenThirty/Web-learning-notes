// 传统上Javascript只有 indexOf 方法，可以确定一个字符串是否包含在另一个字符串中
// ES6新增了三个方法
// includes()：用来判断一个字符串是否包含在另一个字符串中，返回一个布尔值
// startsWith()：用来判断一个字符串是否以另一个字符串开头，返回一个布尔值
// endsWith()：用来判断一个字符串是否以另一个字符串结尾，返回一个布尔值

// eg:
let s = "Hello world!";
console.log(s.startsWith("Hello"));
console.log(s.endsWith('!'));
console.log(s.includes('o'));

// 这三个方法均支持第二个参数，表示开始搜索的位置，除了endsWith是针对前n个字符，而其他
// 针对从第n个字符到结束
console.log(s.startsWith("world", 6));
console.log(s.endsWith("Hello", 5));
console.log(s.includes("Hello", 6));

// 结果是
// true
// true
// true
// true
// true
// false