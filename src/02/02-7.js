/* 객체 확장 표현식과 구조 분해 할당 */


/* 객체 확장 표현식 */
// A. 기존 자바스크립트
var x = 0;
var y = 0;
// obj에 대입한 객체는 키 이름과 키값이 동일함
var abj = {x:x, y:y};
var randomKeyString = 'other';
var combined = {};
// 연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야 함
combined['one' + randomKeyString] = 'some value';
var obj2 = {
    // 객체에 함수를 추가할 때는 변수에 함수를 할당해야 함
    x:x,
    methodA: function(){console.log('method A');},
    methodB: function(){return 0;}
};

// B. ES6 
var x = 0;
var y = 0;
// 객체에 변수를 선언할 때 키값을 생략하면 자동으로 키의 이름으로 키값을 지정함
var obj = {x, y};
var randomKeyString = 'other';
// 객체 생성 블록 안에 대괄호[]를 사용하여 표현식을 작성하면 추가하여 계산된 키값을 생성할 수 있음
var combined = {
    [ 'one' + randomKeyString ]: 'some value',
};
var obj2 = {
    x,
    // function 키워드를 생략하여 함수를 선언할 수 있음
    methodA(){console.log('method A');},
    methodB(){return 0;},
};

/* 구조 분해 할당 */
// A. 기존 자바스크립트
var list = [0, 1];
// 배열의 인덱스를 사용하여 변수에 할당
var item1 = list[0];
var item2 = list[1];
// || 연산자를 이용하여 배열의 해당 인덱스에 값이 없으면 기본값으로 할당함
var item3 = list[2] || -1;
// 배열의 두 값을 치환
var temp = item2;
item2 = item1;
item1 = temp;
var obj = {
    key1: 'one',
    kew2: 'two',
};
// 객체의 키값을 변수에 할당
var key1 = obj.key1;
var key2 = obj.key2;
// || 연산자를 이용하여 객체의 해당 키값이 없으면 기본값으로 할당함
var key3 = obj.kewy3 || 'default key3 value';
// 객체의 키값을 다른 변수에 할당
var newKey1 = obj.key1;

// B. ES6
var list = [0, 1];
var [
    // 대괄호 블록[] 사이에 추출하고자 하는 값의 인덱스 위치에 변수를 배치
    item1,
    item2,
    // 선언 부호=를 변수와 함께 사용하여 기본값 할당
    item3 = -1,
] = list;
// 인덱스 위치에 각각 변경할 변수를 교차 배치하여 배열의 두 값을 치환
[item2, item1] = [item1, item2];
var obj = {
    key1: 'one',
    key2: 'two',
};
var {
    key: newKey1,
    // 객체의 키값을 변수에 할당
    key2,
    // 선언 부호=를 변수와 함께 사용하여 기본값 할당
    key3 = 'default key3 value',
} = obj; 

// 구조 할당은 전개 연산자와 함께 사용
var [item1, ...otherItems] = [0, 1, 2]; // otherItems = [1, 2]
var {key1, ...others} = {key1: 'one', key2: 'two'}; // others = {key2: 'two'}
