// import { bar } from "./b.mjs";
// console.log("我是a.mjs");
// console.log(bar);
// export let foo = "foo";

// 以上代码会报错： ReferenceError: Cannot access 'foo' before initialization

// 为什么会报出这个错误 foo变量未定义?

// ES6的循环加载如何处理 ?
//     首先，执行a.mjs以后，引擎发现它加载了b.mjs，因此会优先执行b.mjs，然后再执行a.mjs.
//         接着，执行b.mjs时，它从a.mjs那输入了foo接口，这时不会执行a.mjs，二是认为这个接口已经存在了，继续往下执行
// 执行到第三行console.log(foo)的时候，这个接口根本没定义，实际定义在后面, 因此而报错。

import { bar } from "./b.mjs";
console.log("我是a.mjs");
console.log(bar());
function foo() { return "foo"; };
export { foo };