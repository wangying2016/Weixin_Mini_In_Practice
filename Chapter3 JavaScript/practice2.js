// ��ʾ����
console.log("��ӡ��־");

// �ֺ�
console.log("���ӷֺ�")
console.log("�ӷֺ�");

// ����һ������ a����ʱ a ��ֵΪ undefined
var a;

// ʹ�� let �Ա�����ֵ��let ��ֵ�ı���ֻ�ڻ���������Ч
if (true) {
  let a = "����a";
}
console.log(a);

// ��������
const PI = 3.14;

// �����ַ���
console.log(`����
            ����
            �ַ���`);

// ģ���ַ���
var name = 'С��';
var age = 20;
var message = `��ã�${name}�������${age}���ˣ�`;
console.log(message);

// �����ַ���
// length
var s = 'Hello, world!';
s.length;
// indexOf()
var str = "hello world";
var index = str.indexOf('w');
console.log(inedex);
// substring()
var str = "hello world";
var subStr1 = str.substr(1);    // ������1��ʼ������
var subStr2 = str.substr(0, 3); // ������0��ʼ��������3���������ǲ���������3
console.log(subStr2);
// toUpperCase()
// toLowerCase()

// ����
// ���԰���������������
[1, 3.14, 'Hello', null, true];
// length
var arr = [1, 3.14, 'Hello', null, true];
console.log(arr.length);
// ֱ�Ӹ� Array ��length ��һ���µ�ֵ���ᵼ�� Array �Ĵ�С�����仯
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6; // ���ȱ�� 6
arr;    // arr ��Ϊ [1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr;    // arr ��Ϊ [1, 2]
// ������������ֱ�Ӹ�ֵ���ַ����Ͳ��У�
var arr = ['A', 'B', 'C'];
arr[1] = 520;
arr;    // arr ���ڱ�Ϊ ['A', 520, 'C']
// indexOf()
// slice()����Ӧ���ַ����� substring() ����
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
arr.slice(0, 3);    // ['A', 'B', 'C']
arr.slice(3);       // ['D', 'E', 'F', 'G']
// ���� slice() �����κβ��������Ը���һ������
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy;
// push() �� pop()
// unshift() �� shift()��ʹ�� unshift() �������ͷ�����Ԫ�أ�shift() ��
// ����ĵ�һ��Ԫ��ɾ��
// sort()
// reverse()
// splice()����ָ����������ʼɾ������Ԫ�أ�Ȼ���ٴӸ�λ���������Ԫ��
// ��һ��������ʾ������ʼ��λ�ã��ڶ���������ʾɾ����Ԫ�صĸ�����������
// ����Ԫ�ر�ʾ��ɾ����λ����ӵ�Ԫ��
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr.splice(2, 3, 'Google', 'Facebook'); // ������ 2 ��ʼɾ�� 3 ��Ԫ�أ�Ȼ�����������Ԫ��
arr;    // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
arr.splice(2, 2,);  // ֻɾ���������
arr;    // ['Microsoft', 'Apple', 'Oracle']
arr.splice(2, 0, 'Google', 'Facebook'); // ֻ��ӣ���ɾ��
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

// ����
// JavaScript �Ķ�����һ���ɼ�-ֵ��ɵ����򼯺ϣ�һ���ɻ����� {} ����
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
    name: 'С��',
};
console.log('name' in xiaoming);    // true
// hasOwnProperty()���ж�һ�������Ƿ��� xiaoming ����ӵ�еģ������Ǽ̳еõ���
var xiaoming = {
    name: 'С��'
};
xiaoming.hasOwnProperty('name');    // true
xiaoming.hasOwnProperty('toString');    // false

// �Ƚ��������== �� ===
// == �Ƚ�����������Զ�ת�����������ٱȽϣ��ܶ�ʱ���õ��ǳ�����Ľ��
// === �Ƚ�������������Զ�ת���������ͣ�����������Ͳ�һ�£��򷵻� false��
// ���һ�£����ٱȽ�
false == 0; // true
false === 0; // false
// ��һ�������� NaN���������� Number ������ֵ������ȣ��������Լ�
NaN == NaN; // false
var a = 0 / 0;
console.log(a); // ��� NaN
var b = 0 / 0;
if (a === b) { // �����
    console.log("������"); // �����
}
// Ψһ���ж� NaN �ķ�ʽ��ͨ�� isNaN() ����
isNaN(NaN); // true
// �������ıȽ����㣺�ⲻ�� JavaScript �����ȱ�ݣ����Ǹ��������������
1 / 3 === (1 - 2 / 3); // false
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// �������ж�
var age = 3;
if (age >= 18) {
    console.log("������");
} else if (age >= 6) {
    console.log("������");
} else {
    console.log("��ͯ");
}

// ѭ�����
// for ѭ��
var x = 0;
var i;
for (i = 1; i <= 10000; i++) {
    x = x + i;
}
x;
// ��ѭ��
var x = 0;
for (;;) {
    if (x > 100)
        break;
}
x++;
// for in ѭ���������������
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key);
    console.log(o[key]);
}
// for in ѭ�����������Ԫ��
var a = ['A', 'B', 'C'];
for (var i in a){
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
// while ѭ��
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
var m = new Map([['С��', 95], ['����', 75], ['����', 85]]);
console.log(m.get('С��')); // ��� 95
var m = new Map();  // �� Map
m.set('����', 67);  // ����µ� key-value
m.set('����', 59);
m.has('����');  // �Ƿ���� key '����': true
m.get('����');  // 67
m.delete('����'); // ɾ�� key '����'
m.get('����');  // undefined

// Set
var s1 = new Set(); // �� Set
var s2 = new Set([1, 2, 3]);
var s = new Set([1, 2, 3, '3']);    // �ظ�Ԫ���� Set ���Զ�������
var s = new Set();
s.add(1);
s.add(1);
console.log(s); // ��� Set {1}
s.delete(1);
console.log(s); // ��� Set {}
s.delete(2);    // û����Ӧ�� key Ҳ���ᱨ��

// iterable
var m = new Map([['С��', 95], ['����', 75], ['����', 85]]);
for (var x of m) {
    // ������� ['С��', 95], ['����', 75], ['����', 85]]
    console.log(x);
}

// ���庯��
// ��һ�ֶ��巽ʽ
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
// �ڶ��ֶ��巽ʽ
var abs = function(x) {
    if (x > 0) {
        return x;
    } else {
        return -x;
    }
};

// ���ú���
Page({

    OnLoad: function() {
        console.log(abs(-9));   // ��� 9
        console.log(abs(10));   // ��� 10
    }
})
var abs = function(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
// ����������ܵ� undefined
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';   // �׳��쳣����ֹ����
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
// ��������
module.export = {
    formatTime: formatTime
}
// ���뺯��
var util = require('../../utils/util.js');
utils.formatTime();
import util from '../../utils';

// arguments ����
Page({
    onLoad: function() {
      foo("haha", "hehe", "heihei");
    }
})
function foo(x) {
    for (var i = 0; i < arguments.length; i ++) {
        // ������� haha, hehe, heihei
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
// ���� 2 ~ 3 ��������b �ǿ�ѡ���������ֻ���������������� b Ĭ��Ϊ null
function foo(a, b, c) {
    if (arguments.length == 2) {
        // ʵ���õ��Ĳ����� a �� b��c Ϊ undefined
        c = b;  // �� b ���� c
        b = null;   // b ��ΪĬ��ֵ
    }
}

// rest ����
Page({
    onLoad: function() {
      console.log(test());
    }
})
function test() {
    return { name: 'test'};
}
// ������У�����
function test() {
    return  // JavaScript �����Զ�����ĩ���˷ֺ�
        { name: 'test'};
}
// ��ȷ�Ķ�������д��
function test() {
    return {
        name: 'test'
    };
}

// ����������
// �������ڲ������ı������ں������ⲻ������
function foo() {
    var x = 1;
    x = x + 1;
}
x = x + 2;  // ReferenceError!
// �ڲ��������Է����ⲿ��������ı���
function foo() {
    var x = 1;
    function bar() {
        var y = x + 1;  // bar ���Է��� foo �ı��� x
    }
    var z = y + 1;  // ReferenceError!
}

// ����
Page({
    onLoad: function() {
      console.log(zhangsan.age);  // ������� function age() { return 18 }
      console.log(zhangsan.age());// ��� 18
    }
})
var zhangsan = {
    age: function() {
      return 18;
    }
};

// this ����
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
// apply() ���� this ָ��
console.log(getAge(list,[]));

// �߽׺���
// map ����
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow);   // [1, 4, 9, 16, 25, 36, 49, 64, 81]
// reduce ����
// ����� reduce() ��һ��������������������Ԫ���ϣ����
// �����������������������reduce() �ѽ�����������е���һ
// ��Ԫ�����ۻ�����
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
// reduce ʵ���������
var arr = [1, 3, 5, 7, 9];
arr.reduce(function(x, y) {
    return x + y;
});
// filter ����
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function(x) {
    return x % 2 !== 0;
});
r;  // [1, 5, 9, 15]
// sort ����
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

// Arrow Function ��ͷ����
x => x* x;
// �������д����൱��
function (x) {
    return x * x;
}

// JavaScript ��׼����
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
var d = new Date(2017, 0, 9, 8, 15, 30, 100);   // ���� 2017 �� 1 �� 9 �� 8 �� 15 �� 30 �� 100 ����
console.log(d);
var d = new Date(1324123412341);    // ������� 1970 �� 1 �� 1 �� 0 ��ĺ���ֵ
console.log(d);
// Date ���󷽷�
var now = new Date();
now.getFullYear();  // ��ȡ��
now.getMonth(); // ��ȡ�·ݣ�0 ��ʾ 1����ΧΪ 0 ~ 11
now.getDate();  // ��ȡ���ڣ����� 9 ��
now.getDay();   // ��ȡ�����飬�������������� 3
now.getHours(); // ��ȡСʱ����24 Сʱ��
now.getMinutes();   // ��ȡ������
now.getSeconds();   // ��ȡ����
now.getMilliseconds();  // ��ȡ����
now.getTime();  // �� number ��ʽ��ʾ��ʱ��������� 1970 �� 1 �� 1 �� 0 ��ĺ���ֵ
// RegExp
var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
// RegExp �� test() ����
var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345'); // true
re.test('010-1234x'); // false
re.test('010 12345'); // false
// JSON: JavaScript Object Notation
var zhangsan = {
    name: '����',
    age: 18
};
// stringify() �� JavaScript ����ת���� JSON ��ʽ
JSON.stringify(zhangsan);   // {"name": "����", "age": 18}
// parse() �� JSON ��ʽ���ַ���ת���� JavaScript ����
JSON.parse('{"name": "����", "age": 18}');
// Math
var a = -10;
Math.abs(a);    // ȡ����ֵ��10



