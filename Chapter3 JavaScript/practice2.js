// 演示代码
console.log("打印日志");

// 分号
console.log("不加分号")
console.log("加分号");

// 声明一个变量 a，此时 a 的值为 undefined
var a;

// 使用 let 对变量赋值，let 赋值的变量只在花括号内生效
if (true) {
  let a = "变量a";
}
console.log(a);

// 声明常量
const PI = 3.14;

// 多行字符串
console.log(`这是
            多行
            字符串`);

// 模板字符串
var name = '小明';
var age = 20;
var message = `你好，${name}，你今年${age}岁了！`;
console.log(message);

// 操作字符串
// length
var s = 'Hello, world!';
s.length;
// indexOf()
var str = "hello world";
var index = str.indexOf('w');
console.log(inedex);
// substring()
var str = "hello world";
var subStr1 = str.substr(1);    // 从索引1开始到结束
var subStr2 = str.substr(0, 3); // 从索引0开始，到索引3结束，但是不包括索引3
console.log(subStr2);
// toUpperCase()
// toLowerCase()

// 数组
// 可以包含任意数据类型
[1, 3.14, 'Hello', null, true];
// length
var arr = [1, 3.14, 'Hello', null, true];
console.log(arr.length);
// 直接给 Array 的length 赋一个新的值，会导致 Array 的大小发生变化
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6; // 长度变成 6
arr;    // arr 变为 [1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr;    // arr 变为 [1, 2]
// 数组索引可以直接赋值（字符串就不行）
var arr = ['A', 'B', 'C'];
arr[1] = 520;
arr;    // arr 现在变为 ['A', 520, 'C']
// indexOf()
// slice()，对应了字符串的 substring() 方法
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
arr.slice(0, 3);    // ['A', 'B', 'C']
arr.slice(3);       // ['D', 'E', 'F', 'G']
// 不给 slice() 传递任何参数，可以复制一个数组
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy;
// push() 和 pop()
// unshift() 和 shift()：使用 unshift() 往数组的头部添加元素，shift() 把
// 数组的第一个元素删除
// sort()
// reverse()
// splice()：从指定的索引开始删除若干元素，然后再从该位置添加若干元素
// 第一个参数表示索引开始的位置，第二个参数表示删除的元素的个数，后面素
// 引的元素表示在删除的位置添加的元素
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr.splice(2, 3, 'Google', 'Facebook'); // 从索引 2 开始删除 3 个元素，然后再添加两个元素
arr;    // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
arr.splice(2, 2,);  // 只删除，不添加
arr;    // ['Microsoft', 'Apple', 'Oracle']
arr.splice(2, 0, 'Google', 'Facebook'); // 只添加，不删除
arr;    // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// concat()
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added;  // ['A', 'B', 'C', 1, 2, 3]
arr;    // ['A', 'B', 'C']
// join()
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-');  // A-B-C-1-2-3
// map()
PageTransitionEvent({
    onLoad: function() {
        var numArr = [1, 2, 3, 4, 5];
        var newArr = numArr.map(numberAdd);
        console.log(newArr);
    }
})
function numberAdd(n) {
    return n + 1;
}
// utils.js
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getData();

    var hour = date.getHours();
    var miniute = date.getMinutes();
    var second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minutes, 
        second].map(formatNumber).join(':');
}
function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n
}

// 对象
// JavaScript 的对象是一组由键-值组成的无序集合，一般由花括号 {} 包裹
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
// in 
var xiaoming = {
    name: '小明',
};
console.log('name' in xiaoming);    // true
// hasOwnProperty()：判断一个属性是否是 xiaoming 自身拥有的，而不是继承得到的
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name');    // true
xiaoming.hasOwnProperty('toString');    // false

// 比较运算符：== 与 ===
// == 比较运算符：会自动转换数据类型再比较，很多时候会得到非常诡异的结果
// === 比较运算符，不会自动转换数据类型，如果数据类型不一致，则返回 false，
// 如果一致，则再比较
false == 0; // true
false === 0; // false
// 另一个例外是 NaN，这个特殊的 Number 与其他值都不相等，包括它自己
NaN == NaN; // false
var a = 0 / 0;
console.log(a); // 输出 NaN
var b = 0 / 0;
if (a === b) { // 不相等
    console.log("结果相等"); // 不输出
}
// 唯一能判断 NaN 的方式是通过 isNaN() 函数
isNaN(NaN); // true
// 浮点数的比较运算：这不是 JavaScript 的设计缺陷，而是浮点数的运算误差
1 / 3 === (1 - 2 / 3); // false
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// 多条件判断
var age = 3;
if (age >= 18) {
    console.log("成年了");
} else if (age >= 6) {
    console.log("青少年");
} else {
    console.log("儿童");
}

// 循环语句
// for 循环
var x = 0;
var i;
for (i = 1; i <= 10000; i++) {
    x = x + i;
}
x;
// 死循环
var x = 0;
for (;;) {
    if (x > 100)
        break;
}
x++;
// for in 循环对象的所有属性
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key);
    console.log(o[key]);
}
// for in 循环数组的所有元素
var a = ['A', 'B', 'C'];
for (var i in a){
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
// while 循环
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n -2;
}
// do ... while
var n = 0;
do {
    n = n + 1;
} while (n < 100);

// Map
var m = new Map([['小明', 95], ['张三', 75], ['李四', 85]]);
console.log(m.get('小明')); // 输出 95
var m = new Map();  // 空 Map
m.set('张三', 67);  // 添加新的 key-value
m.set('李四', 59);
m.has('张三');  // 是否存在 key '张三': true
m.get('张三');  // 67
m.delete('张三'); // 删除 key '张三'
m.get('张三');  // undefined

// Set
var s1 = new Set(); // 空 Set
var s2 = new Set([1, 2, 3]);
var s = new Set([1, 2, 3, '3']);    // 重复元素在 Set 中自动被过滤
var s = new Set();
s.add(1);
s.add(1);
console.log(s); // 输出 Set {1}
s.delete(1);
console.log(s); // 输出 Set {}
s.delete(2);    // 没有相应的 key 也不会报错

// iterable
var m = new Map([['小明', 95], ['张三', 75], ['李四', 85]]);
for (var x of m) {
    // 依次输出 ['小明', 95], ['张三', 75], ['李四', 85]]
    console.log(x);
}

// 定义函数
// 第一种定义方式
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
// 第二种定义方式
var abs = function(x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
};

// 调用函数
Page({

    OnLoad: function() {
        console.log(abs(-9));   // 输出 9
        console.log(abs(10));   // 输出 10
    }
})
var abs = function(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
// 避免参数接受到 undefined
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';   // 抛出异常，终止运行
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
// 导出函数
module.export = {
    formatTime: formatTime
}
// 导入函数
var util = require('../../utils/util.js');
utils.formatTime();
import util from '../../utils';

// arguments 参数
Page({
    onLoad: function() {
      foo("haha", "hehe", "heihei");
    }
})
function foo(x) {
    for (var i = 0; i < arguments.length; i ++) {
        // 依次输出 haha, hehe, heihei
        console.log(arguments[i]);
    }
}
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
abs();  // 0
abs(10); // 10;
abs(-9);  // 9
// foo(a[, b], c)
// 接收 2 ~ 3 个参数，b 是可选参数，如果只传两个采纳数，则 b 默认为 null
function foo(a, b, c) {
    if (arguments.length == 2) {
        // 实际拿到的参数是 a 和 b，c 为 undefined
        c = b;  // 把 b 赋给 c
        b = null;   // b 变为默认值
    }
}

// rest 参数
Page({
    onLoad: function() {
      console.log(test());
    }
})
function test() {
    return { name: 'test'};
}
// 拆分两行，出错
function test() {
    return  // JavaScript 引擎自动在行末加了分号
        { name: 'test'};
}
// 正确的多行语句的写法
function test() {
    return {
        name: 'test'
    };
}

// 变量作用域
// 函数体内部声明的变量，在函数体外不能引用
function foo() {
    var x = 1;
    x = x + 1;
}
x = x + 2;  // ReferenceError!
// 内部函数可以访问外部函数定义的变量
function foo() {
    var x = 1;
    function bar() {
        var y = x + 1;  // bar 可以访问 foo 的变量 x
    }
    var z = y + 1;  // ReferenceError!
}

// 方法
Page({
    onLoad: function() {
      console.log(zhangsan.age);  // 输出方法 function age() { return 18 }
      console.log(zhangsan.age());// 输出 18
    }
})
var zhangsan = {
    age: function() {
      return 18;
    }
};

// this 变量
Page({
    
    onLoad: function() {
        console.log(lisi.age());
        console.log(getAge());
    }
})
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}
var list = {
    name: 'lisi',
    birth: 1990,
    age: getAge
};
// apply() 控制 this 指向
console.log(getAge(list,[]));

// 高阶函数
// map 函数
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow);   // [1, 4, 9, 16, 25, 36, 49, 64, 81]
// reduce 函数
// 数组的 reduce() 把一个函数作用在这个数组的元素上，这个
// 函数必须接收两个采纳数，reduce() 把结果继续和序列的下一
// 个元素做累积计算
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
// reduce 实现数组求和
var arr = [1, 3, 5, 7, 9];
arr.reduce(function(x, y) {
    return x + y;
});
// filter 函数
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function(x) {
    return x % 2 !== 0;
});
r;  // [1, 5, 9, 15]
// sort 函数
var arr = [10, 20, 1, 2];
arr.sort(function(x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]

// Arrow Function 箭头函数
x => x* x;
// 上面这行代码相当于
function (x) {
    return x * x;
}

// JavaScript 标准对象
// typeof
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str';   // 'string'
typeof true;    // 'boolean'
typeof undefined;   // 'undefined'
typeof Math.abs;    // 'function'
typeof null;    // 'object'
typeof [];  // 'object'
typeof {};  // 'object'
// Date
var myDate = new Date();
var d = new Date(2017, 0, 9, 8, 15, 30, 100);   // 传入 2017 年 1 月 9 日 8 点 15 分 30 秒 100 毫秒
console.log(d);
var d = new Date(1324123412341);    // 传入距离 1970 年 1 月 1 日 0 点的毫秒值
console.log(d);
// Date 对象方法
var now = new Date();
now.getFullYear();  // 获取年
now.getMonth(); // 获取月份，0 表示 1，范围为 0 ~ 11
now.getDate();  // 获取日期，比如 9 号
now.getDay();   // 获取星期书，如星期三，返回 3
now.getHours(); // 获取小时数，24 小时制
now.getMinutes();   // 获取分钟数
now.getSeconds();   // 获取秒数
now.getMilliseconds();  // 获取毫秒
now.getTime();  // 以 number 形式表示的时间戳，距离 1970 年 1 月 1 日 0 点的毫秒值
// RegExp
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
// RegExp 的 test() 方法
var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false
// JSON: JavaScript Object Notation
var zhangsan = {
    name: '张三',
    age: 18
};
// stringify() 把 JavaScript 对象转换成 JSON 格式
JSON.stringify(zhangsan);   // {"name": "张三", "age": 18}
// parse() 把 JSON 格式的字符串转换成 JavaScript 对象
JSON.parse('{"name": "张三", "age": 18}');
// Math
var a = -10;
Math.abs(a);    // 取绝对值，10



