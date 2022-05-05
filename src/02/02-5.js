// 화살표 함수

/* 기존 */
function add(first, second){
    return first + second;
};
// typeof add === 'function'

// 익명함수 선언방식 
var add = function(first,second){
    return first+second;
};
// typeof add === 'function'

/* ES6 화살표 함수 사용 방법 
    : 익명 함수를 선언하여 변수에 대입하는 방식과 유사함.
      차이점은 function 키워드를 생략하고 인자 블록()과 본문 블록{} 사이에 =>를 표기
*/

var add = (first,second) => {
    return first+second;
}

// 본문 블록이 비어 있고 결괏값을 바로 반환하는 경우에는 중괄호를 생략하고 => 뒤에 반환 표현식을 넣을 수 있음
var add = (first,second) => first + second;

// 반환값이 객체라면 괄호로 결괏값을 감싸 간결하게 표현할 수 있음
var addAndMultiple = (first,second) => ({add:first+second, multiply:first*second});


// 화살표 함수의 장점
// a. 함수 표현식을 반환
function addNumber(num){
    return function(value){
        return num + value;
    }
}

// b. 화살표 함수를 사용하여 간결한 코드로 함수 반환 가능
var addNumber = num => value => num+value;

// c. 콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind() 함수를 사용하여 this 객체 전달 과정 포함
class MyClass {
    value = 10;
    constructor(){
        var addThis2 = function(first, second){
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }
}
// => addThis2() 함수는 this를 bind() 함수에 전달하여 this의 범위 유지, addThis3() 함수는 화살표 함수이므로 이 과정이 생략됨.