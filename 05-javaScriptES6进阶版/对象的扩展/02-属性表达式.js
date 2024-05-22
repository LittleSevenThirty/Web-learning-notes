const obj = {};

// 定义属性的写法
obj.name = '张三';

// 定义属性的写法2
obj['i' + 'd'] = "123456";

console.log(obj);

// 方法一是直接用标识符作为属性名，方法二是用表达式作为属性名

// 如果是定义字面量对象时，ES5不可以使用表达式作为属性名，但ES6修改了这个特性
// 但是使用表达式作为属性名时，必须使用方括号包裹
const obj2 = {
    name: "李四",
    ['i' + 'd']: '123457'
}

// 另一个例子,表达式也可以作为方法名
let lastWord = "last word";

const a = {
    'first word': 'hello',
    [lastWord]: 'world'
}

console.log(a['first word']);
console.log(a[lastWord]);
console.log(a['last word']);

// 注意，属性名表达式与简洁表示法，不能同时使用，会报错
// 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心  