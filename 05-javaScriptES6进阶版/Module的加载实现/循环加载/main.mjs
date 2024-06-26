// 瞧瞧以下代码

// even.js
import { odd } from './odd'
export var counter = 0;
export function even(n) {
    counter++;
    return n === 0 || odd(n - 1);
}
// odd.js
import { even } from './even';
export function odd(n) {
    return n !== 0 && even(n - 1);
}

// 最终结果会是
// $ babel - node
//     > import * as m from './even.js';
// > m.even(10);
// true
//     > m.counter
// 6
//     > m.even(20)
// true
//     > m.counter
// 17

// 这个例子要是改写成 CommonJS，就根本无法执行，会报错。

// event.js加载odd.js又去加载even.js，形成"循环加载"。
// 这时，执行引擎就会输出even.js已经执行的部分(不存在任何结果), 所以在odd.js之中，变量even等于undefined
// 等到后面调用even(n-1)就会报错
