// 1. 普通解构赋值
const arr = [1, 2, 3, 4];

// bad
// const first = arr[0];
// const second = arr[1];

// good
const [first, second] = arr;

// 2. 函数传参时使用解构赋值
// bad
function getFullName(user) {
    const first_name = user.first_name;
    const last_name = user.last_name;
}

// good
function getFullName2(obj) {
    const { first_name, last_name } = obj;
}

// best
function getFullName3({ first_name, last_name }) { }

// 3. 函数返回值时返回对象的解构赋值
// 函数返回多个值时优先使用对象的解构赋值，便于后期添加新返回值，以及改变返回值顺序后赋值不错
// bad
function processInput(input) {
    return [left, right, top, bottom];
}

// good
function processInput2(input) {
    return { left, right, top, bottom };
}