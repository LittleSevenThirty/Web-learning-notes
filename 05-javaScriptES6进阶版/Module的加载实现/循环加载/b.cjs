exports.done = false;
let a = require("./a.cjs");
console.log(`在b.cjs中,a.done=${a.done}`);
exports.done = true;
console.log('b.cjs执行完毕');