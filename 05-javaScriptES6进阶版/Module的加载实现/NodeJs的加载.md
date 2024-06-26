Node.js 加载
===

-------
#### 概述
Node.js对ES6模块的处理比较麻烦，因为他有自己的CommonJs模块格式，与ES6模块格式是不兼容的，目前的解决方案是，将两者分开

Node.js要求ES6模块采用 `.mjs` 后缀文件名,也就是说,只要文件里面使用了 `import` 或者 `export` 命令,那么就必须采用 `.mjs` 后缀名

如果不希望将后缀名改成 `.mjs` ，可以在项目的package.json文件中,指定`type`字段为 `mudule`

```js
 {
    "type":"module"
 }
```

一旦设置了以后，该目录里面的 JS 脚本，就被解释用 ES6 模块
如果还是想要使用CommonJs模块，那么需要将使用了CommonJs模块的文件后缀名改为`.cjs`

总结为一句话：`.mjs` 文件总是以 ES6 模块加载，`.cjs` 文件总是以 CommonJS 模块加载，`.js` 文件的加载取决于package.json里面type字段的设置。

注意，ES6 模块与 CommonJS 模块尽量不要混用。require命令不能加载`.mjs` 文件，会报错，只有import命令才可以加载.mjs文件。反过来，`.mjs` 文件里面也不能使用require命令，必须使用import。