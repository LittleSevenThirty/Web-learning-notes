// ES6在Number对象上,新提供了Number.isFinite和isNaN方法
// 与全局的isFinite和isNaN方法不同的是
// 全局的方法会把参数先能转为数值型NaN之后再进行比较,而Number对象上的isFinite和isNaN方法是直接进行比较，如果参数不是NaN一律返回false
// Number.isFinite和isNaN只对数值有效,如果参数不是数值,则返回false  
// Number.isFinite方法返回一个布尔值,表示参数是否为有限数值
// Number.isNaN方法返回一个布尔值,表示参数是否为NaN

// Number.isFinite方法
console.log(Number.isFinite(15)); // true
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(-15)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite('15')); // false
console.log(Number.isFinite(null)); // false
console.log(Number.isFinite(undefined)); // false


// Number.isNaN方法
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(15)); // false
console.log(Number.isNaN('15')); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(undefined)); // false