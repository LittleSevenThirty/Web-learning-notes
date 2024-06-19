// 使用export命令定义了模块对外的接口后,就可以使用import命令加载这个模块
import { firstName, lastName, year } from './profile.js';

function setName(element) {
    element.textContent = firstName + '' + lastName;
}

// 注意import引入需要接口名称相同

// 如果想要将引入的变量名换个名字,需要使用as关键字
import { lastName as surname } from './profile.js';


// import输入的变量都是只读的,因为它的本质都是输入接口,不允许在加载的模块里改写接口(类型啥的)
import { a } from './xxx.js';
a = {}; // error会报错的

// 如果a是一个对象,修改其内部的一部分属性就是可以的
a.foo = 'hello';     // 就是合法操作

// 上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。

// from指定模块文件的位置可以是相对路径也可以是绝对路径 .js可以省略

// 注意:import命令具有提升效果,会提升到整个模块的头部,首先执行
foo();

import { foo } from 'my_module';

// 由于import是静态执行的,所以不能使用表达式和变量,这些只有在运行时才能得到结果的语法结构
// 报错1
import {'f'+'oo'} from 'my_module';

// 报错2
let module = 'my_module';
import { foo } from module;

// 报错3
if (x === 1) {
    import { foo } from 'module';
} else {
    import { foo } from 'module2';
}

// 想要使用动态的需要使用import()函数动态执行

// 上面三种写法都会报错，因为它们用到了表达式、变量和if结构。在静态分析阶段，这些语法都是没法得到值的。

// 如果多次重复执行import语句,则只会有一次的效果

import { foo } from 'my_module';
import { bar } from 'my_module';
// 等同于
import { foo, bar } from 'my_module';