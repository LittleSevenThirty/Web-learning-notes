// 数组实例 copyWithin 方法，在当前数组内部，将指定位置的成员复制到其他位置(会覆盖原有的成员),然后返回当前数组，这个方法会修改当前数组
// 原型
// Array.prototype.copyWithin(target,start=0,end=this.length);  // 即默认值是从0开始，截至到下标后一位

// 注意如果end有传递参数，则是 [start,end)的左闭右开区间，不包含end
// target是必需参数,如果为负值，表示倒数

// eg:
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));  // [ 4, 5, 3, 4, 5 ]

// 更多的例子
// 将3号位复制到0号位
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));   // [ 4, 2, 3, 4, 5 ]

// 另一种写法
console.log([1, 2, 3, 4, 5].copyWithin(-5, -2, -1));    // [4, 2, 3, 4, 5]