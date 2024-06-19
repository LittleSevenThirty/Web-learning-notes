// 原版的import模块的加载方式
import { area, circumference } from "./circle.js";

console.log(`圆面积:${area(4)}`);
console.log(`圆周长:${circumference(4)}`);

// 现在可以整体模块加载
import * as circle from "./circle.js";

// 整体模块的加载需要取别名，会把所有模块的方法和变量存入这个 别名 ，这个别名就成为了一个对象

console.log(`圆面积:${circle.area(4)}`);
console.log(`圆周长:${circle.circumference(4)}`);

// 注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。

// import * as circle from './circle';
// // 下面两行都是不允许的
// circle.foo = 'hello';
// circle.area = function () { };