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
    console.log(i);
    console.log(a[i]);
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
