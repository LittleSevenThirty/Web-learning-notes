// 1. let取代var
// ES6提出了两个新的声明变量的命令: let 和 const 其中,let完全可以取代var,因为两者语义相同，而且let没有副作用
'use strict';

// if (true) {
//     let x = "hello";
// }

for (let i = 0; i < 10; ++i) {
    console.log(i);
}

// var变量存在变量提升效用，let命令没有这个问题
// if (true) {
//     console.log(x); // ReferenceError
//     let x = "hello";
// }

// 2. 全局常量和线程安全
// 在let 和 const之间，建议优先使用const,尤其是在全局环境，不应该设置变量，只应设置常量。

// const 优于 let 有几个原因。一个是const可以提醒阅读程序的人，这个变量不应该改变；另一个是const比较符合函数式编程思想，运算不改变值，只是新建值
// 这样也有利于将来的分布式运算；最后Javascript会对const进行优化,所以多使用const，有利于提高程序的运行效率，也就是说let和const的本质区别，其实是编译器内部的处理不同

// bad
// var a = 1, b = 2, c = 3;

// good
const a = 1;
const b = 2;
const c = 3;

// best 采用解构赋值
const [a1, b1, c1] = [1, 2, 3];