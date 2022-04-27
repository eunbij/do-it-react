// 2-1. 템플릿 문자열

// 기존 자바스크립트 문자열 사용 방법
var string1 = "안녕하세요";
var string2 = "반갑습니다";
var greeting = string1+ '' + string2;
var product = { name: '도서', price:'4200원'};
var message = "제품" + product.name + '의 가격은' + product.price + '입니다.';
var multiLine = "문자열1\n문자열2";
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = "곱셈값은" + (value1*value2) + '입니다.';
var operator2 = "불린값은" + (boolValue ? '참' : '거짓') + '입니다.';

// ES6 문자열 사용 방법
var greeting = `${string1} ${string2}`;
var message = `제품 ${product.name}의 가격은 ${product.price}입니다`;
// 템플릿 문자열은 Enter를 눌러 줄을 바꾸는 것이 허용되며 이스케이프 시퀀스를 사용하지 않아도 됨
var multiLine = `문자열1
문자열2`; 
var operator1 = `곱셈값은 ${value1*value2}입니다.`;

