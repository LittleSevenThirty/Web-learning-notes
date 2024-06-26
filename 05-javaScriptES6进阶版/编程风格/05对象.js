// 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾
// eg：
// bad
const a = { k1: 'v1', k2: 'v2', };
const b = {
    k1: 'v1',
    k2: 'v2',
}

// good
const a1 = { k1: 'v1', k2: 'v2' };
const b1 = {
    k1: 'v1',
    k2: 'v2'
}

// 对象尽量静态化，一旦定义，就不得随意添加新的属性，如果添加属性不可避免，要使用Object.assign方法
// bad
const a2 = {};
a2.x = 3;

// if reshape unavoidable
const a3 = {};
Object.assign(a, { x: 3 });

// good
const a4 = { x: null };
a.x = 3;

// bad
// 如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。
const obj = {
    id: 5,
    name: 'San Francisco',
}
obj[getKey('enabled')] = true;

// good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};
// 上面代码，对象obj的最后一个属性名，
// 需要计算得到，这时最好采用属性表达式，在新建obj的时候，将该属性与其他属性定义在一起，这样一来，所有属性就在一个地方定义了

// 另外，对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写
var ref = 'some value';

// bad
const atom = {
    ref: ref,

    value: 1,

    addValue: function (value) {
        return atom.value + value;
    },
};

// good
const atom2 = {
    ref,

    value: 1,

    addValue(value) {
        return atom.value + value;
    },
};