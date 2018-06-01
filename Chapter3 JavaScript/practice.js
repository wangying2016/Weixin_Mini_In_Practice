console.log("打印日志");
var i = 1;
'Hello, world';
var x = 1; var y = 2;

if (2 > 1) {
  console.log("语句1");
  console.log("语句2");
}

if (2 > 1) {
  console.log("语句块1");
  if (2 < 3) {
    console.log("语句2");
  }
}

/**
 * 从这里开始是块注释
 * 仍然是注释
 * 仍然是注释
 * 注释结束 */

var a; // 声明了变量 a，此时 a 的值为 undefined

if (true) {
  let a = "变量a"; // 如果换成 var 声明就不会报错
}
console.log(a);

// var PI = 3.14;

const PI = 3.14;

123;  // 整数 123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法标示为1.2345x1000
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的
          // Number所能表示的最大值时，就表示为Infinity

1 + 2; // 结果为3
(1 + 2) * 5 / 2; // 结果为7.5
2 / 0; // 结果为 Inifinity
0 / 0; // 结果为 NaN
10 % 3; // 结果为 1

// 多行字符串
console.log(`这是
              多行
              字符串`);

// 模板字符串
var name = '小明';
var age = 20;
var message = '你好，' + name + '，你今年' + age + '岁了！';
console.log(message); // 输出 你好小明，你今年20岁了！

var name = '小明';
var age = 20;
var message = `你好，${name}，你今年${age}岁了！`;
console.log(message); // 输出 你好小明，你今年20岁了！

// 操作字符串
var s = 'Hello,world!';
s.length; // 13
console.log(s.length);

var s = 'Hello, world!';

s[0];
s[6];
s[7];
s[7];
s[12];
s[13]; // undefined 超出范围的索引不会报错，但一律返回 undefined

// s[1] = 'a'; // 报错，字符串索引不能修改值

// indexOf()
var str = "hello world";
var index = str.indexOf('w');
console.log(index); // 输出 6
var index2 = str.indexOf('c');
console.log(index2);

// substring()
var str = "hello world";
var subStr1 = str.substr(1); // 从索引1开始到结束
console.log(subStr1); // 输出 "ello world"
var subStr2 = str.substr(0,3); // 从索引0开始，到索引3结束，但不包括索引3
console.log(subStr2); // 输出 "hel"

// toUpperCase()
var s = "Hello";
console.log(s.toUpperCase()); // 返回'HELLO'

// toLowerCase()
var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并复制给变量lower
console.log(lower);

// 布尔值
if (1) {
  console.log("非0值表示true");
}

// 数组
[1, 3.14, 'Hello', null, true];
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
var arr = [1, 3.14, 'Hello', null, true];
arr[0]; // 返回索引为0的元素，即1
arr[4]; // 返回索引为4的元素，即true
arr[5]; // 索引超出了范围，返回undefined

var arr = [1, 3.14, 'Hello', null, true];
console.log(arr.length);

var arr = [1, 2, 3];
arr.length;
arr.length = 6;
arr;  // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr 变为 [1, 2]

var arr = ['A', 'B', 'C'];
arr[1] = 520;
arr; // arr现在变为 ['A', 520, 'C']

var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']

// indexOf()
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10);  // 元素10的索引为0
arr.indexOf(20);  // 元素20的索引为1
arr.indexOf(30);  // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2

// slice
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// 从索引0开始，到索引3结束，但不包括索引3：['A', 'B', 'C']
arr.slice(0, 3);

// 从索引3开始到结束：['D', 'E', 'F', 'G']
arr.slice(3);

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// push() 和 pop()
var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度：4
arr;  // [1, 2, 'A', 'B']
arr.pop();  // pop()返回'B'
arr;  // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr;  // []
arr.pop(); // 空数组继续pop不会报错，而是返回undefined
arr;  // []

// unshift() 和 shift()
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度：4
arr;  // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr;  // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
arr;  // []
arr.shift(); // 空数组连续shift不会报错，而是返回undefined
arr;  // []

// sort()
var arr = ['B', 'C', 'A'];
arr.sort();
arr;  // ['A', 'B', 'C']

// reverse()
var arr = ['one', 'two', 'three'];
arr.reverse();
arr;  // ['three', 'two', 'one']

// splice()
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素，然后再添加两个元素；
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素['Yahoo', 'AOL', 'Excite']
arr;  // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除，不添加
arr.splice(2, 2); // ['Google', 'Facebook']
arr;  // ['Microsoft', 'Apple', 'Oracle']
// 只添加不删除
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[]，因为没有删除任何元素
arr;  // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// concat()
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added;  // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']

var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', ,1 , 2, 3, 4]

// join()
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'

// map()
Page({
  onLoad: function() {
    var numArr = [1, 2, 3, 4, 5];
    var newArr = numArr.map(numberAdd);
    console.log(newArr); //  输出 2, 3, 4, 5, 6
  }
})
// 函数
function numberAdd(n) {
  return n + 1;
}

// 多维数组
var arr = [[1, 2, 3], [400, 500, 600], '-'];
arr[1][0]; // 400

// 对象
var person = {
  name: 'Bob',
  age: 20,
  tags: ['js', 'web', 'mobile'],
  city: 'Beijing',
  hasCar: true,
  zipcode: null
};

person.name; // 'Bob'
person.zipcode; // null
person.sex; // undefined

person["name"]; // 'Bob'

// 操作对象
var xiaoming = {
  name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age;  // 删除age属性
xiaoming.age; // undefined
delete xiaoming.name; // 删除name属性
xiaoming.name;  // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错

var xiaoming = {
  name: '小明'
};
console.log('name' in xiaoming);  // 输出true

'toString' in xiaoming; // true，继承 object 而来

var xiaoming = {
  name: '小明'
};
xiaoming.hasOwnProperty('name');  // true
xiaoming.hasOwnProperty('toString');  // false

// 算术运算符
y = 5;
x = ++y;  // 结果x为6
x = --y;  // 结果x为4

// 字符串链接符
txt1 = "hello";
txt2 = "world";
txt3 = txt1 + " " + txt2; // ；连接了txt1，空格，txt2

// 比较运算符
false == 0; // true，自动转换类型
false === 0; // false，不转换类型

NaN == NaN; // false

var a = 0/0;
console.log(a); // 输出 NaN
var b = 0/0;
if (a === b) {  // 不相等
  console.log("结果相等");  // 不输出
}

isNaN(NaN);  // true

1 / 3 === (1 - 2 / 3); // false

Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// 条件运算符
variablename = (condition) ? value1 : value2;

