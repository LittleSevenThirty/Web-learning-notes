// 1. 数组实例的find和findindex方法
// 前者返回确切的值，后者返回确切值的下标
// 原型
// Array.prototype.find(callback, thisarg);    || Array.prototype.findIndex(callback, thisarg);

// 参数解释
// callback：回调函数,传入参数value,index,arr,返回true则表示找到了想要的值,否则继续查找
// thisarg：可选参数,指定回调函数的执行环境即this,默认为undefined

// eg:
console.log([1, 4, -5, 10].find(n => n < 0));
// expected output: -5

console.log([1, 4, -5, 10].findIndex(n => n < 0));
// expected output: 2

function f(v) {
    return v > this.age;
}
let person = { name: 'Jhon', age: 20 };
console.log([10, 12, 26, 15].find(f, person));  // 26

// 2. 数组实例的 fill()
// 原型是: Array.prototype.fill(value,start=0,end=this.length);
// start和end的效果和copyWithin一样
// fill 方法使用给定的值，填充一个数组
['a', 'b', 'c'].fill(7);
// 结果是 [7,7,7];

console.log(['a', 'b', 'c'].fill(7, 1, 2));
// expected output: ["a", 7, "c"]

// fill方法如果填充的是对象，则是浅拷贝

// 数组实例的 entries()，keys() 和 values()
// ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），
// 可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

// 由于数组是特殊的对象，下标即默认键
// entries keys values 都和对象的一样

// 3. includes 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false
// js语法  includes(searchElement, fromIndex)
// 参数解释:
// fromIndex:开始搜索的索引（从零开始），会转换为整数。
// eg
const arr1 = [1, 2, 3];
console.log(arr1.includes(2));
// expected output: true
const arr2 = ["cat", "dog", "bat"];
console.log(arr2.includes("cat"));
// expected output: true
console.log(arr2.includes("at"));
// expected output: false

// 4. 数组实例的 flat() 方法将嵌套的数组拍平，只会拍平一层，不会递归拍平。
// 原型是: Array.prototype.flat(depth=1)
// 参数解释:如果想要将所有的元素都拍平，可以将depth设置为Infinity。
console.log([1, 2, [3, 4]].flat());

// expected output: [1, 2, 3, 4]
console.log([1, 2, [3, [4, 5]]].flat());

console.log([1, 2, [3, [4, 5]]].flat(Infinity));

// expected output: [1, 2, 3, 4, 5]

// flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），
// 然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
console.log([2, 3, 4].flatMap((x) => [x, x * 2]));
// [2, 4, 3, 6, 4, 8]
// flatMap()只能展开一层数组。

// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
console.log([1, 2, 3, 4].flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]
// 上面代码中，遍历函数返回的是一个双层的数组，但是默认只能展开一层，因此flatMap()返回的还是一个嵌套数组。

// flatMap()方法的参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组。
