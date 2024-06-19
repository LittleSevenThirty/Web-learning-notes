// 模块功能主要由两个命令构成: export和import.export命令用于规定模块的对外接口，import命令用于输入其它模块提供的功能。

// 一个模块就是一个独立的文件。该文件内部的所有命令和函数，外部无法获取，如果想要在外部获取这个模块内部的变量，就必须使用export关键字输出该变量

import profile from './profile.js';
console.log(profile);