// CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值

// var count = 1;
// function inCounter() {
//     count++;
// }

// module.export = {
//     count: count,
//     inCounter: inCounter
// }

// lib.js模块加载后，它的内部变化就影响不到输出的mod.counter了，mod.counter是一个原始类型的值，会被缓存，除非写成一个函数，才能得到内部变动后的值

// module.export = {
//     get counter() {
//         return count;
//     },
//     inCounter: inCounter
// }

// ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，
// ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

// 简单点就是 CommonJs是值传递，而ES6却是值引用

export let counter = 3;
export function inCounter() {
    counter++;
}

export let foo = "abc";
setTimeout(() => { foo = "def" }, 1000);


// 最后，export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例。

// mod.js
function C() {
    this.sum = 0;
    this.add = function () {
        this.sum += 1;
    };
    this.show = function () {
        console.log(this.sum);
    };
}
export let c = new C();
// 上面的脚本mod.js，输出的是一个C的实例。不同的脚本加载这个模块，得到的都是同一个实例。