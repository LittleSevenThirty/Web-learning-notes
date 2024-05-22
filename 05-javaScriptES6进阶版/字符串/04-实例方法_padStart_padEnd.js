// 如果某个字符串不够指定长度，会在头部或尾部补全

// padStart用于头部补全
// 使用方法 字符串.padStart(补全位数,[用于补全的字符串,默认为空格]);

let str = "x";
console.log(str.padStart(5, "ab")); // ababx
console.log(str.padStart(4, "ab")); // abax

// padEnd用于尾部补全
// 使用方法 字符串.padEnd(补全位数,[用于补全的字符串,默认为空格]);

console.log(str.padEnd(5, "ab"));   // xabab
console.log(str.padEnd(4, "ab"));   // xaba

// 如果原来字符串大于或等于最大长度，则字符串补全不生效，返回原来字符串
// 如果用来不全的字符串与原字符串，两者的长度超过了最大长度，则会截去超出位数的补全字符串

console.log(str.padStart(5, "0123456789")); // 0123x
// padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。

'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"