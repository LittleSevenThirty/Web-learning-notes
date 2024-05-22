// Object.keys(),Object.values,Object.entries() 方法的使用

// ES5 引入了 Object.keys方法，返回一个数组，成员是参数对象自身的所有可遍历属性的键名。
let obj = { foo: "bar", baz: 42 };
console.log(Object.keys(obj));
// [ 'foo', 'baz' ]

// ES6 引入了 同Object.keys配套的方法 Object.values方法，返回一个数组，成员是参数对象自身的所有可遍历属性的键值。
let { keys, values, entries } = Object;
let obj2 = { a: 1, b: 2, c: 3 };

for (let key of keys(obj2)) {
    console.log(key);
}
// a b c

for (let value of values(obj2)) {
    console.log(value);
}
// 1 2 3

// Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
for (let [key, value] of entries(obj2)) {
    console.log([key, value]);
}
// [ 'a', 1 ] ['b', 2] ['c', 3]

// 返回数组的成员顺序，与本章的《属性的遍历》部分介绍的排列规则一致。

// const obj = { 100: 'a', 2: 'b', 7: 'c' };
// Object.values(obj)
// ["b", "c", "a"]
// 上面代码中，属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a。

// object.entries 方法的另一个用处是，将对象转为真正的 Map 结构
const obj3 = { foo: "bar", baz: 42 };
const map = new Map(entries(obj3));
console.log(map);
// Map(2) { 'foo' => 'bar', 'baz' => 42 }

// 新增方法 Object.fromEntries将map转为对象
const obj4 = Object.fromEntries(map);
console.log(obj4);  // { foo: 'bar', baz: 42 }