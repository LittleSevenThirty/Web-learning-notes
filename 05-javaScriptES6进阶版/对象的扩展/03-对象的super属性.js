// 补充知识
// Object.setPrototypeOf(obj, prototype)
// 参数
// obj
// 要设置其原型的对象。

// prototype
// 该对象的新原型（一个对象或 null）。

// 返回值
// 指定的对象

// 意思就是把obj的原型对象设置为prototype

// this关键字总是指向函数所在的当前对象，ES6新增了super关键字，可以让我们在函数中访问当前对象的原型对象，从而实现对原型对象的属性和方法的访问。

const proto = {
    foo: 'hello'
};

const obj = {
    foo: 'world',
    find() {
        return super.foo;
    }
};

Object.setPrototypeOf(obj, proto);

console.log(obj.find()) // "hello",设置了原型对象为proto，而原型对象里没有this，则不会又指向当前的对象;

// 注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错.

// 有坑的例子
const proto2 = {
    x: "hello",
    foo() {
        console.log(this.x);
    }
};

const obj2 = {
    x: "world",
    foo() {
        super.foo();
    }
};

Object.setPrototypeOf(obj2, proto2);

obj2.foo(); // 结果是world

// obj的foo方法虽然调用了super原型的方法foo，但是原型的foo方法中又有this，指向当前对象的x，所以结果是obj2.x