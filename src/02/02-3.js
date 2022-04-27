// 2-2. 전개 연산자

/* ES6의 배열 전개 연산자 사용 방법 */

// A. 기존 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
// 배열의 각 요소를 추출하여 새로운 배열을 만듦
var combined = [array1[0], array[1], array2[0], array[1]];  

// concat() 함수로 두 배열을 합침
var combined = array1.concat(array2);  
var combined = [].concat(array1, array2);

var first = array1[0];
var second = array1[1];
//||연산자와 조합하면 추출할 배열 요소가 없을 때 기본값을 지정할 수 있음
var three = array1[2] || 'empty';
function func(){
    // 특수 변수(argument)를 사용해 함수 내 인자 항목들을 배열로 변환. func(a,b,c)에서 args[0]은 a, args[1]은 b, args[2]는 c항목으로 각각 할당됨
    var args = Array.prototype.slice.call(this,arguments); 
    var first = args[0];
    //인덱스 범위에 해당하는 배열 요소를 추출. args.length가 전체 배열의 길이이므로 인덱스 범위 1번(두 번째 항목)부터 마지막 항목까지 추출됨
    var others = args.slice(1, args.length); 
};

/* 위 코드에 ES6의 전개 연산자 도입 */
// B. 
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2]; // combined = ['one','two','three','four'];
const[first, second, three = 'empty', ...others] = array1; // first = 'one', second = 'two', three = 'empty', others =[]
func(...args){var[first,...others]=args;};
