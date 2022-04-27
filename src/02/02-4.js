//가변 변수
let num = 1;
num = num *3;
let str = '문자';
str = '다른 문자';
let arr = [];
arr = [1,2,3];
let obj = {};
obj = {name: '새 객체'};

// 불변 변수
const num = 1;
num =3; // 자료형 오류 발생
const str = '문자';
str = "새 문자"; // 자료형 오류 발생
const arr = [];
arr = [1,2,3]; // 자료형 오류 발생
const obj = {};
obj = {name: "내 이름"}; // 자료형 오류 발생=

// 자바스크립트 내장 함수를 사용하여 불변 변수 할당값 변경
const arr2 = [];
arr2.push(1); // [1]
arr2.splice(0,0,0); // [0,1]
arr2.pop(); // [1]
const obj2 = {};
obj2['name'] = '내이름'; //{name:'내이름'}
Object.assign(obj2, {name:'새이름'}); // {name:'새이름'}
delete obj2.name // obj2 = {}

// 무결성을 유지하면서 불변 변수를 수정할 때
const num1 = 1;
const num2 = num1 * 3; // 3
const str1 = '문자';
const str2 = str1 + '추가'; //'문자추가'
const arr3 = [];
const arr4 = arr3.concat(1); // [1]
const arr5 = [...arr4,2,3] // [1,2,3]
const arr6 = arr5.slice(0,1); // [1], [1,2,3]
const [first, ...arr7] = arr5; // [2,3], 1
const obj3 = { name: '내이름',age: 20};
const objValue =  {name:'새이름', age: obj3.age}; 
const obj4 = { ...obj3, name:'새이름'}; // {name:'새이름', age:20}
const { name, ...obj5 } = obj4; // {age:20}