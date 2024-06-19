// 从前面的例子可以看出，使用import命令时，用户需要知道所要加载的变量名或者函数名，否则无法加载，但是，用户希望快速上手，未必愿意阅读文档，去了解模块有哪些
// 属性和方法
// 为了用户方便，让他们不用阅读文档就能加载模块，就要用到export default命令,为模块指定默认输出

// 写法1
// export default function () {
//     console.log("foo");
// }

// 写法2: 但是必须使用在非匿名函数后
// function foo() {
//     console.log("我是foo2");
// }

// export default foo; // 同样的输出默认的不需要使用{}

// 它的默认输出是一个函数，
// 其它模块加载该模块时，import命令可以为该匿名函数指定任意名字

// export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。
// 所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。

// 因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。
// 正确
// export var a = 1;
// // 正确
// var a = 1;
// export default a;
// 错误
// export default var a = 1;

// export default也可以用来输出类
export default class {
    // ...
}