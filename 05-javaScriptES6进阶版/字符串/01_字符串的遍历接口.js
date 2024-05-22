// ES6为字符串添加了遍历器接口，使得字符串可以使用for...of循环进行遍历。

for (let codePoint of "foo") {
    console.log(codePoint);
}// "f" "o" "o"

// ES6除了遍历字符串，还可以识别大于 0xFFFF 的码点，传统的循环无法识别

let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; ++i) {
    console.log(text[i]);
}// 结果是：��


// for of 的
for (let char of text) {
    console.log(char);
}// 结果是:𠮷

// 以上的代码，字符串text只有一个字符，一个汉字等于两个英文字符，所以普通for循环认为它包含两个字符，都不可
// 打印，而 for of 循环会正确识别出这一个字符。