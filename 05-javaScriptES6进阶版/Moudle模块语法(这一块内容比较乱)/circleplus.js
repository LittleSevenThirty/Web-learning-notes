// 继承circle模块的内容并且自己定义一些新的内容

// 下面一行的代码不知什么原因报错，所以下一小节就使用.txt了
// export * from './circle';
export let e = 2.71828182846;
export default function () {
    console.log("我是circleplus");
}

// 注意 export*会忽略模块的default方法或属性,只会输出本模块自己定义的default
