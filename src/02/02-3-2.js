/* ES6의 객체 전개 연산자 사용 방법 */

// A. 기존 문법
var objectOne = { one:1, two:2, other:0 };
var objectTwo = { three:3, four:4, other:-1 };
var combined = {
    one: objectOne.one, //1
    two: objectOne.two, //2
    three: objectTwo.three, //3
    four: objectTwo.four, //4
};

// 내장함수 assign()을 사용하여 두 객체 병합.
// 첫 번째 인자는 결과로 반환할 객체{}, 나머지 인자는 병합할 객체. 병합할 객체는 앞에 있는 객체부터 덮어씀
var combined = Object.assign({},objectOne,objectTwo); // combined = {one:1, two:2, three:3, four:4, other:-1}

// 중복되는 키값이 있으면 이후에 전달된 객체(objectOne)의 값으로 덮어씀
var combined = Object.assign({},objectTwo,objectOne); // combined = {one:1, two:2, three:3, four:4, other:0}

var others = Object.assign({},combined);

// 삭제 연산자(delete)를 사용하여 특정 데이터를 추출한 다음 새로운 객체 생성
delete others.other;  //others = {one:1, two:2, three:3, four:4}


// B. ES6
var objectOne = { one:1, two:2, other:0 };
var objectTwo = { three:3, four:4, other:-1 };
var combined = {
    ...objectOne,
    ...objectTwo,
}; // combined = {one:1, two:2, three:3, four:4, other:-1}
var combined = {
    ...objectTwo,
    ...objectOne,
}; // combined = {one:1, two:2, three:3, four:4, other:0}

// 객체에서 특정값을 추출할 때는 추출하려는 키 이름(other)을 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당할 수 있음
var { other, ...others } = combined; // others = {one:1, two:2, three:3, four:4}