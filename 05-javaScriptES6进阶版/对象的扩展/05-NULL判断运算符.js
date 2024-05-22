// 读取对象属性的时候，如果某个属性值是 null or undefined ，有时候需要为他们指定默认值。常见做法是||指定默认值
const headerText = response?.settings?.headerText || "hello,world!";

// ES2020引入新的NULL判断运算符??.它的行为类似 || ，但是只有运算符左侧的值为 null 或 undefined 时才会返回右侧的值。

const showSplashScreen = response.settings.animationDuration ?? 300;

// 默认值只有在属性为 null or undefined 时才会生效

// 这个运算符的一个目的，就是跟链判断运算符?.配合使用，为null或undefined的值设置默认值。

console.log(headerText, showSplashScreen);