let a = require("./a.cjs");
let b = require("./b.cjs");

console.log(`在main.js中，a.done=${a.done},b.done=${b.done}`);

// 运行结果如下
// 在b.cjs中, a.done = false
// b.cjs执行完毕
// 在a.cjs中, b.done = true
// a.cjs执行完毕
// 在main.js中，a.done = true, b.done = true

// 以上代码表示 在 b.js之中， a.js没有执行完毕，只执行了第一行。
// 二是, main.js 执行到第二行时，不会再次执行b.js，二是输出缓存的b.js的执行结果，即它的第四行

// 总之，CommonJS 输入的是被输出值的拷贝，不是引用。

var a = require('a'); // 安全的写法
var foo = require('a').foo; // 危险的写法