// repeat 方法返回一个字符串，表示将源字符串重复n次
console.log('x'.repeat(3));     // 结果是xxx
console.log("hello".repeat(2)); // 结果是hellohello
console.log("na".repeat(0));    // 结果是""

// 注意：repeat 方法的参数是整数，如果不是整数，会被自动转换为整数，且是向下取整
// 注意：如果参数是负数，则会返回空字符串，除了0到-1之间的数会被转为0，NaN=0
// 如果repeat的参数是字符串则会先转换为数字
console.log("na".repeat('3'));  // 结果是nanana
console.log("na".repeat(2.9));  // 结果是nana