let it = makeIterator(['a', 'b']);
console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ? {
                value: array[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}

// 这段代码定义了一个 makeIterator 函数 它是一个遍历器生成函数，作用就是返回一个遍历器对象，对数组 ['a','b']执行这个函数，就会返回该数组的遍历器对象
it
// 指针对象next方法，用来移动指针，开始时，指针指向数组的开始位置，然后，每次调用next 方法，指针就会指向数组的下一个成员，第一次调用，指向a;第二次调用

// 指向b

// 总之，调用指针对象的next方法，就可以遍历事先给定的数据结构