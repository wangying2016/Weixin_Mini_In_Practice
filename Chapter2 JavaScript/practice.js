console.log("��ӡ��־");
var i = 1;
'Hello, world';
var x = 1; var y = 2;

if (2 > 1) {
  console.log("���1");
  console.log("���2");
}

if (2 > 1) {
  console.log("����1");
  if (2 < 3) {
    console.log("���2");
  }
}

/**
 * �����￪ʼ�ǿ�ע��
 * ��Ȼ��ע��
 * ��Ȼ��ע��
 * ע�ͽ��� */

var a; // �����˱��� a����ʱ a ��ֵΪ undefined

if (true) {
  let a = "����a"; // ������� var �����Ͳ��ᱨ��
}
console.log(a);

// var PI = 3.14;

const PI = 3.14;

123;  // ���� 123
0.456; // ������0.456
1.2345e3; // ��ѧ��������ʾΪ1.2345x1000
-99; // ����
NaN; // NaN��ʾNot a Number�����޷�������ʱ��NaN��ʾ
Infinity; // Infinity��ʾ���޴󣬵���ֵ������JavaScript��
          // Number���ܱ�ʾ�����ֵʱ���ͱ�ʾΪInfinity

1 + 2; // ���Ϊ3
(1 + 2) * 5 / 2; // ���Ϊ7.5
2 / 0; // ���Ϊ Inifinity
0 / 0; // ���Ϊ NaN
10 % 3; // ���Ϊ 1

// �����ַ���
console.log(`����
              ����
              �ַ���`);

// ģ���ַ���
var name = 'С��';
var age = 20;
var message = '��ã�' + name + '�������' + age + '���ˣ�';
console.log(message); // ��� ���С���������20���ˣ�

var name = 'С��';
var age = 20;
var message = `��ã�${name}�������${age}���ˣ�`;
console.log(message); // ��� ���С���������20���ˣ�

// �����ַ���
var s = 'Hello,world!';
s.length; // 13
console.log(s.length);

var s = 'Hello, world!';

s[0];
s[6];
s[7];
s[7];
s[12];
s[13]; // undefined ������Χ���������ᱨ����һ�ɷ��� undefined

// s[1] = 'a'; // �����ַ������������޸�ֵ

// indexOf()
var str = "hello world";
var index = str.indexOf('w');
console.log(index); // ��� 6
var index2 = str.indexOf('c');
console.log(index2);

// substring()
var str = "hello world";
var subStr1 = str.substr(1); // ������1��ʼ������
console.log(subStr1); // ��� "ello world"
var subStr2 = str.substr(0,3); // ������0��ʼ��������3������������������3
console.log(subStr2); // ��� "hel"

// toUpperCase()
var s = "Hello";
console.log(s.toUpperCase()); // ����'HELLO'

// toLowerCase()
var s = 'Hello';
var lower = s.toLowerCase(); // ����'hello'�����Ƹ�����lower
console.log(lower);

// ����ֵ
if (1) {
  console.log("��0ֵ��ʾtrue");
}

// ����
[1, 3.14, 'Hello', null, true];
new Array(1, 2, 3); // ����������[1, 2, 3]
var arr = [1, 3.14, 'Hello', null, true];
arr[0]; // ��������Ϊ0��Ԫ�أ���1
arr[4]; // ��������Ϊ4��Ԫ�أ���true
arr[5]; // ���������˷�Χ������undefined

var arr = [1, 3.14, 'Hello', null, true];
console.log(arr.length);

var arr = [1, 2, 3];
arr.length;
arr.length = 6;
arr;  // arr��Ϊ[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr ��Ϊ [1, 2]

var arr = ['A', 'B', 'C'];
arr[1] = 520;
arr; // arr���ڱ�Ϊ ['A', 520, 'C']

var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr��Ϊ[1, 2, 3, undefined, undefined, 'x']

// indexOf()
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10);  // Ԫ��10������Ϊ0
arr.indexOf(20);  // Ԫ��20������Ϊ1
arr.indexOf(30);  // Ԫ��30û���ҵ�������-1
arr.indexOf('30'); // Ԫ��'30'������Ϊ2

// slice
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// ������0��ʼ��������3������������������3��['A', 'B', 'C']
arr.slice(0, 3);

// ������3��ʼ��������['D', 'E', 'F', 'G']
arr.slice(3);

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

// push() �� pop()
var arr = [1, 2];
arr.push('A', 'B'); // ����Array�µĳ��ȣ�4
arr;  // [1, 2, 'A', 'B']
arr.pop();  // pop()����'B'
arr;  // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // ����pop 3��
arr;  // []
arr.pop(); // ���������pop���ᱨ�����Ƿ���undefined
arr;  // []

// unshift() �� shift()
var arr = [1, 2];
arr.unshift('A', 'B'); // ����Array�µĳ��ȣ�4
arr;  // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr;  // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // ����shift 3��
arr;  // []
arr.shift(); // ����������shift���ᱨ�����Ƿ���undefined
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
// ������2��ʼɾ��3��Ԫ�أ�Ȼ�����������Ԫ�أ�
arr.splice(2, 3, 'Google', 'Facebook'); // ����ɾ����Ԫ��['Yahoo', 'AOL', 'Excite']
arr;  // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// ֻɾ���������
arr.splice(2, 2); // ['Google', 'Facebook']
arr;  // ['Microsoft', 'Apple', 'Oracle']
// ֻ��Ӳ�ɾ��
arr.splice(2, 0, 'Google', 'Facebook'); // ����[]����Ϊû��ɾ���κ�Ԫ��
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
    console.log(newArr); //  ��� 2, 3, 4, 5, 6
  }
})
// ����
function numberAdd(n) {
  return n + 1;
}

// ��ά����
var arr = [[1, 2, 3], [400, 500, 600], '-'];
arr[1][0]; // 400

// ����
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

// ��������
var xiaoming = {
  name: 'С��'
};
xiaoming.age; // undefined
xiaoming.age = 18; // ����һ��age����
xiaoming.age; // 18
delete xiaoming.age;  // ɾ��age����
xiaoming.age; // undefined
delete xiaoming.name; // ɾ��name����
xiaoming.name;  // undefined
delete xiaoming.school; // ɾ��һ�������ڵ�school����Ҳ���ᱨ��

var xiaoming = {
  name: 'С��'
};
console.log('name' in xiaoming);  // ���true

'toString' in xiaoming; // true���̳� object ����

var xiaoming = {
  name: 'С��'
};
xiaoming.hasOwnProperty('name');  // true
xiaoming.hasOwnProperty('toString');  // false

// ���������
y = 5;
x = ++y;  // ���xΪ6
x = --y;  // ���xΪ4

// �ַ������ӷ�
txt1 = "hello";
txt2 = "world";
txt3 = txt1 + " " + txt2; // ��������txt1���ո�txt2

// �Ƚ������
false == 0; // true���Զ�ת������
false === 0; // false����ת������

NaN == NaN; // false

var a = 0/0;
console.log(a); // ��� NaN
var b = 0/0;
if (a === b) {  // �����
  console.log("������");  // �����
}

isNaN(NaN);  // true

1 / 3 === (1 - 2 / 3); // false

Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// ���������
variablename = (condition) ? value1 : value2;

