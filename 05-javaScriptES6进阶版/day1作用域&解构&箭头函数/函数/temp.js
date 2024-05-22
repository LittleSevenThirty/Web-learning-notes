const pipeline = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val);

const plus1 = x => x + 1;
const mult2 = x => x * 2;
const addTheMult = pipeline(plus1, mult2);

// 好吧我也没搞懂。
console.log(addTheMult(5));  // 12

// 我在想应该停顿多少s在出现提示最好