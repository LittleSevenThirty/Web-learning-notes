// 建议使用扩展运算符(...)拷贝数组

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; ++i) {
    itemCopy[i] = items[i];
}

// good
const itemsCopy2 = [...items];

// 使用Array.from方法，将类似数组的对象转为数组。
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);