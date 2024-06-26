// import { foo } from "./a.mjs";
// console.log("我是b.mjs");
// console.log(foo);
// export let bar = "bar";

// 将 a.mjs的第一段代码注释消除在执行以上代码会报错： ReferenceError: Cannot access 'bar' before initialization

// 解决方法是把 foo 改写成函数，由于js有函数提升，所以会被提前声明访问到
import { foo } from "./a.mjs";
console.log("我是b.mjs");
console.log(foo());
function bar() { return "bar"; };
export { bar };

// 因此函数表达式就不能使用，衍生的箭头函数也不行