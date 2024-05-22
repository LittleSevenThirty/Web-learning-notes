// 编程实务中，如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。
const first = (message
    && message.body
    && message.body.user
    && message.body.user.firstName) || 'default';

// 或者使用三目运算符

// ES2020引入'链判断运算符' ?. 可以简化以上的写法
const firstName = message?.body?.user?.firstName || 'default';

// 如果链判断运算符前面是null or undefined 则会 短路 ?.后的一系列操作不会执行

// eg:
a?.[++x];
// 等同于
a == null ? undefined : a[++x];

delete a?.b;
// 等同于
a == null ? undefined : delete a.b;