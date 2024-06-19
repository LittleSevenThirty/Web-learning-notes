// 换成ES6语法
// import { stat, exists, readfile } from 'fs';

// Moudle语法是为了实现将一个大程序拆分成相互依赖的小文件，再用简单的方法拼装起来
// 在使用Es6之前，最主要的有CommonJS和AMD两种, 前者用于服务器，后者用于浏览器。

// CommonJS语法
// let { stat, exists, readfile } = require('fs');


// 等同于
let _fs = require('fs');
const _stat = _fs.stat;
const _exists = _fs.exists;
const _readfile = _fs.readfile;

export function SayHi() {
    console.log("hi");
}



// 上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

// 由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。