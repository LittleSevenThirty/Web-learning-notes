exports.done = false;
let b = require("./b.cjs");
console.log(`在a.cjs中,b.done=${b.done}`);
exports.done = true;
console.log('a.cjs执行完毕');