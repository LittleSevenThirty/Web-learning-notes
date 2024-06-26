// 静态字符串一律使用单引号或反引号，不使用双引号，动态字符串使用反引号
// 静态字符串：一个普通的字符串
// 动态字符串：该字符串里含有已经定义的变量
// bad
const a = "foobar";
const b = "foo" + a + "bar";

console.log(a, '\n', b);

// acceptable
const c = `foobar`;

console.log(c);

// good
const a1 = 'foobar';
const b1 = `foo${a1}bar`;

console.log(a1, '\n', b1);