// export与import的复合写法
// 如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起
// eg:
export { foo, bar } from './my_module';

// 等同于
import { foo, bar } from './my_module';
export { foo, bar };

// 以上的代码中,export和import语句可以结合在一起，写成一行。但是需注意写成一行后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口
// 导致当前模块并不能使用foo和bar;

// 模块的接口改名和整体输出，也可以采用此写法
export { foo as foo2 } from './my_module';

// 整体输出
export * from './my_module';

// 默认接口的写法如下
export { default } from './my_module';

// 接口也可以改为默认接口输出
// export { foo as default } from './my_module2';

// 默认接口也可以改为具名接口
export { default as foo3 } from './my_module3';


