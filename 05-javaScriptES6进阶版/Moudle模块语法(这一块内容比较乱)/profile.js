export let first_name = 'Michael';
export let last_name = 'Jackson';
export let year = 2024;

// 此外还有另外一种写法
let firstname = 'Michael';
let lastname = 'Jackson';
let year2 = 2023;
export { firstname, lastname, year2 };

// export 除了输出变量还可以输出函数
export function AddTwo(x1, x2) {
    return x1 + x2;
}

// 通常情况下export输出就是原本的名字，但是可以使用as取别名
export {
    firstname as fn,
    lastname as ln,
    year2 as y2
}

// 注意点：export命令规定的是对外的接口，必须与模块内部的变量建立--对应关系。
// 一下都是错误案例
// export 1;

// var num = 1;
// export num;
// 因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口

// 正确的写法是
var m = 1;
export { m };   // 像对象一样打包输出
// 函数同理

// 最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。