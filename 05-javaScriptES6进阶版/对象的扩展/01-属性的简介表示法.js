// ES6允许在大括号里，直接写入变量和函数名，作为对象的属性或方法，这样写更加简介
const foo = "baz";
const obj = { foo };
console.log(obj);   // 等同于 {foo:'baz'};

// 变量直接写在大括号里，变量名就是属性名，变量值就是属性值

function f(x, y) {
    return { x, y };    // 等同于{x:x,y:y}
}

console.log(f(1, 2));

// 除了属性可以简写，方法也可以简写，像 class 新增的方法书写方式 或者 赋值方式
const obj2 = {
    foo,
    method() {
        console.log('hello world');
    },
    myF: f
}

console.log(obj2);

