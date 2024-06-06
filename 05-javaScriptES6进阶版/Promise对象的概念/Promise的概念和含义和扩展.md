Promise的概念
Promise是异步编程的一种解决方案

Promise的含义
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

// 基本语法
const promise=new Promise(function(resolve,reject){
    // ... some code
    if(/*异步操作成功*/){
        resolve(value);
    }
    else{
        reject(error);
    }
});

Promise的接收的参数是一个函数,函数里面自带两个参数resolve和reject这两个函数,但是要写
resolve代表对象状态从未完成变为成功
reject代表对象状态从未完成变为失败