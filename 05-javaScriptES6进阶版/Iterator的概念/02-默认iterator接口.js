// ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，
// 就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。
// 执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，
// 这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内（参见《Symbol》一章）。

const obj = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};

let arr = ['a', 'b'];
let ite = arr[Symbol.iterator]();
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());