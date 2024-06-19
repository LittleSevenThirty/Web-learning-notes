import foo from './export_default命令.js'

// 默认输出的模块因为只有一个，导入时不需要使用{}

foo();

// 上面代码可以使用任意名称指向export_default.js输出的方法,这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面就不需要使用大括号

// export default 命令用在非匿名函数前也是可以的

// 上述导入default的另外一种写法

import { default as foo2 } from './export_default命令.js';
foo2();
console.log(foo === foo2);