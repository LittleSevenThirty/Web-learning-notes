********************************************************************************************
# 1.作用域
**作用域规定了变量能够被访问的"范围",离开了这个"范围"变量便不能够被访问**

* **局部作用域**
* **全局作用域**
* **作用域链**
* **JS垃圾回收机制**
* **闭包**
* **变量提升**
  
********************************************************************************************

### 1.1局部作用域
分为函数作用域和块作用域
##### 1. 函数作用域:
在函数内部声明的变量只能在函数内部访问，外部无法直接访问。
###### 总结:
  1. 函数的参数也是函数内部的局部变量
  2. 不同函数内部声明的变量无法互相访问
  3. 函数执行完毕后,函数内部的变量实际被当作垃圾回收了

##### 2. 块作用域:
在JavaScript中使用 '{ }' 包裹起来的代码称作代码块,代码块内部声明的变量外部将[<strong style="color:red">有可能</strong>]无法被访问
###### 总结:
 1.let声明的变量会产生块作用域，var不会产生块作用域
 2.const声明的常量也会产生块作用域
 3.不同代码块之间的变量无法互相访问
 4.推荐使用let和const

### 1.2全局作用域
<text style="color:red">\<script>标签</text>和<text style="color:red">.js文件</text>的【最外层】就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。全局作用域中生明的变量，任何其它作用域都可以被访问
```js
<script>
    // 全局作用域
    // 全局作用域下声明了num变量
    const num=10;
    function fn(){
        // 函数内部可以使用全局作用域的变量
        console.log(num);
    }
    // 此处全局作用域
```
注意:
1.为window对象动态添加的属性默认也是全局的
2.函数中未使用任何关键字声明的变量为全局变量，
3.尽可能少的声明全局变量，防止全局变量被污染

### 1.3作用域链
作用域链本质是最底层的变脸查找机制。
\> 在函数被执行时，会优先查找当前函数作用域中查找变量
\> 如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域

###### 总结:
1.嵌套关系的作用域串联起来形成了作用域链
2.相同作用域链中按着从小到大的规则查找变量
3.子作用域能够访问父作用域，父级作用域无法访问子级作用域

### 1.4垃圾回收机制
##### 内存的生命周期
JS环境中分配的内存，一般有如下<font color=red>生命周期</font>:
1. <font color=red>内存分配</font>: 当我们声明变量、函数、对象的时候，系统会自动的为他们分配内存
2. <font color=red>内存使用</font>: 即读写内存，也就是使用变量、函数等
3. <font color=red>内存回收</font>: 由<font color=red>垃圾回收</font>自动回收不再使用的内存
##### 说明:
\> 全局变量一般不会回收（关闭页面回收）
\> 一般情况下<font color=red>局部变量的值</font>,会被<font color=red>自动回收</font>掉

##### 内存泄露: 程序中分配的内存由于某种原因程序<font color=red>未释放</font>或<font color=red>无法释放</font>叫做<font color=red>内存泄漏</font>

```js
// 为变量分配内存
const age=18;

// 为对象分配内存
const obj={
  age:19,
}

// 为函数分配内存
function fn(){
  const age=18;
  console.log(age);
}
```
### <font color=red>拓展-JS垃圾回收机制-算法说明</font>
堆栈空间分配区别:
1.栈(OS):由<font color=red>操作系统自动分配释放</font>函数的参数值、局部变量等、基本数据类型放到栈里面
2.堆(OS):一般由程序员分配释放，若程序员不释放，由<font color=red>垃圾回收机制</font>回收，<font color=red>复杂数据类型</font>放到堆里面
> * **引用计数**
> IE采用的引用计数算法，定义"<font color=red>内存不再使用</font>",就是看一个<font color=red>对象</font>是否有指向它的引用，没有引用了就回收对象
>算法:
>   1.跟踪记录被<font color=red>引用的次数</font>
>   2.如果被引用了一次，那么就记录次数1，多次引用就会<font color=red>累加++</font>
>   3.如果减少一个引用就<font color=red>减1 --</font>
>   4.如果引用次数是<font color=red>0</font>,则释放内存
>   <p>&nbsp</p><p>&nbsp</p>
>   存在的致命问题:<strong style="color:red;">嵌套引用</strong>(循环引用)
>   <p>如果两个对象<font color=red>相互引用</font>,尽管它们不再使用，垃圾回收也不会进行回收，导致内存泄露</p>
>```js
>function fn(){
>   let o1={}
>   let o2={}
>   o1.a=o2;
>   o2.a=o1;
>   return "引用计数无法回收";  
>} 
>```
> 他们的引用次数永远不会是0，这样的相互引用如果存在大量的就会导致内存泄漏
><p>&nbsp</p>
>
>* **标记清除法**
>核心:
>   1.标记清除算法将"不再使用的对象"定义为"<strong style="color:red">无法到达的对象</strong>"
>   2.就是从<strong style="color:red">根部</strong>(JS中是全局对象)出发定时扫描内存中的对象，凡是能从<strong style="color:red">根部到达</strong>的对象，都是还需要使用的
>   3.那些无法触及到的对象被标记为不再使用,稍后进行回收
> <strong style="color:red">上述例子从根部就无法访问到，就会回收</strong>

### 1.5闭包(closure)
1. 一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域
2. 简单理解:<strong style="color:red">闭包=内层函数+外层函数的变量</strong>
3. 闭包的应用:实现数据的私有
> 这样就实现了数据的私有，即使外面修改了参数，也影响不到里面
>```js
>function fn(){
>  let count=1;
>  function fun(){
>    count++;
>    console.log(`函数被调用了${count}次`);  // 标准字符串
>  }
>  return fun;
>}
>const result=fn();
>result(); // 2
>result(); // 3
>```
><strong style="color:red">缺点是:</strong>由于无论怎么扫描，都会有指向count的路,所以count无法被回收，发生了内存泄漏

### 1.6变量提升(js的预解析)
变量提升是JavaScript的比较"奇怪"的现象,它允许在变量声明之前即被访问(仅存在于var声明变量)
注意:
1. 变量在未声明即被访问会报语法错误
2. 变量在var声明之前即被访问，变量的值为undefined
3. let/const声明的变量不存在变量提升
4. 变量提升出现在当前作用域中
5. <strong style="color:red">实际开发中推荐先声明再访问变量</strong>
```JavaScript
// 访问变量str
console.log(str+'world!');
// 声明变量str
var str='hello';
```
等价于
```JavaScript
//访问变量
var str;
console.log(str+'world!');
// 声明变量
var str='hello';
```


********************************************************************************************

# 2.函数进阶
* **函数提升**
* **函数参数**
* **箭头函数**
********************************************************************************************
### 2.1函数提升
函数提升同变量提升一样，会把所有的函数声明提前
<strong style="color:red">注意:</strong>
```js
// 函数表达式不会出现函数提升
fn(); // 报错
let fn=function(){...}
```
注意:函数表达式必须先声明和赋值，后调用，否则报错

### 2.2函数参数
**1.动态参数**
<strong style="color:red">arguments</strong>是函数内部内置的伪数组变量,它包含了调用函数时传入的所有实参
```js
// arguments 动态参数只存在于函数里面
// arguments 是一个伪数组
function getSum() {
  let sum = 0;
  for(let i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  console.log(sum);
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 2, 2, 3, 4);
```
总结:
1. arguments是一个伪数组，只存在于函数中
2. arguments的作用是动态获取函数的实参
3. 可以通过for循环依次得到传递过来的实参
  
**2.剩余参数**
1. ...是语法符号，置于最末函数形参之前，用于获取<strong style="color:red">多余</strong>的实参
2. 借助...获取的剩余参数，是个<strong style="color:red">真数组</strong>
```js
// ES6引入rest参数(形式为 ...变量名),用于获取函数的多余参数，来替代arguments对象，rest参数是一个数组，是将多余的参数放入剩余参数中
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
  }
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));
```


# 3.解构赋值
# 4.综合案例