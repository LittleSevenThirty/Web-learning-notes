// let mod = require("./lib.js");

// console.log(mod.count);  // 1
// mod.inCount();
// console.log(mod.count);  // 1

// lib.js模块加载后，它的内部变化就影响不到输出的mod.counter了，mod.counter是一个原始类型的值，会被缓存，除非写成一个函数，才能得到内部变动后的值
import { counter, inCounter } from "./lib.js";

console.log(counter);
inCounter();
console.log(counter);
import { foo } from "./lib.js";
console.log(foo);
setTimeout(() => console.log(foo), 1000);

// 以上代码 foo 原本是 abc 但是在1s 后 lib.js里的setTimeout函数执行后 foo=def
// ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。

// 由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。