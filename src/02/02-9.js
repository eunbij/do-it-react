/* 배열 함수 forEach(), map(), reduce() */

// A. ES6 forEach()
// 기존 자바스크립트로 문자열을 먼저 분리한 다음 forEach() 함수로 분리하여 비교
// 'banana=10&apple=20&orange=30'을 &문자 기준으로 분리하여 객체에 담아 반환하는 parse() 함수 선언
function parse(qs){
    var queryString = qs.substr(1); //queryString = 'banana=10&apple=20&orange=30'
    var chunks = qs.split('&');
    var result = {};
    for(var i = 0; i<chunks.length; i++){
        var parts = chunks[i].split('=');
        var key = parts[0]; // key = 'banana'
        var value = parts[1]; // value = '10'
        result[key] = value; // result = {banana:'10'}
    }
    return result;
}
// 10, 20, 30을 숫자로 변환할 경우
function parse(qs){
    var queryString = qs.substr(1); //queryString = 'banana=10&apple=20&orange=30'
    var chunks = qs.split('&');
    var result = {};
    for(var i = 0; i<chunks.length; i++){
        var parts = chunks[i].split('=');
        var key = parts[0]; // key = 'banana'
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value; // result = {banana:'10'}
    }
    return result;
}

// ES6의 forEach() 함수를 사용하면 반복문의 순번(i++)과 배열의 크기(chunks, length)를 따로 변수에 저장하는 과정을 생략할 수 있음
function parse(qs){
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
    let result = {};
    chunks.forEach((chunk)=>{
        const parts = chunk.split('='); // chunk = 'banana=10', parts = ['banana', '10']
        const key = parts[0]; // key = 'banana'
        const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value; // result = {banana:10}
    });
    return result;
}

// 키와 키값을 구조 분해 할당 방식으로 변환하여 코드 간결하게 하기
function parse(qs){
    const queryString = qs.substr(1); 
    const chunks = queryString.split('&');
    let result = {};
    chunks.forEach((chunk)=>{
        const [key, value] = chunk.split('='); // key = 'banana', value = '10'
        result[key] = value; //result = { banana: '10'}
    });
    return result;
}

/* ES6 map() 함수 
    : 불변 변수const만을 사용하려면 map() 함수 사용
      각 배열 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을 반환함(배열을 가공하여 새 배열을 만드는 함수)
*/

function parse(qs){
    const queryString = qs.substr(1); // queryString = 'banana=10&apple=20&orange=30'
    const chunks = qs.split('&'); //chunks = ['banana=10', 'apple=20', 'orange=30']
    const result = chunks.map((chuck)=>{
        const[key, value] = chunk.split('='); // key = 'banana', value= '10'
        return {key:key, value:value}; //{key:'banana', value:'10'}
    });
    return result;
}
// parse('banana=10&apple=20&orange=30') 실행 결과 :
// result = [
//     { key:'banana', value: '10'},
//     { key:'apple', value: '20'},
//     { key:'orange', value: '30'},
// ];


/* reduce() 함수 사용 방법
: 배열을 객체로 변환하고 싶을 때 사용
*/
function sum(numbers){
    return numbers.reduce((total, num)=>total+num,0);
}
sum([1,2,3,4,5,6,7,8,9,10]); //55
/* 
순환 01회차 total : 0                       num:1
순환 02회차 total : 0+1                     num:2
순환 03회차 total : 0+1+2                   num:3
...
순환 10회차 total : 0+1+2+...+9             num:10
최종 반환값 total : 0+1+2+...+9+10          num:55
 */


// map() 함수를 사용한 예제에 reduce() 함수 응용하여 배열 객체로 변환하기
function parse(qs){
    const queryString = qs.substr(1);
    const chunks = qs.split('&');
    return chunks
    .map((chunk)=>{
        const [key, value] = chunk.split('='); // key = 'banana', value='10'
        return {key, value}; // {key: 'banana', value:'10'}
    })
    .reduce((result, item)=>{  // result={}, item={key: 'banana', value: '10'}
        result[item.key] = item.value; // result={banana:'10'}
        return result;
    },{});
}

/* 
순환 01회차 result : {}                                 item: {key: 'banana', value: '10'}
순환 02회차 result : {banana: '10'}                     item: {key: 'apple', value: '20'}
순환 03회차 result : {banana: '10', apple: '20'}        item: {key: 'orange', value: '30'}
최종 반환값 result : {banana: '10', apple: '20', orange: '30'}
 */