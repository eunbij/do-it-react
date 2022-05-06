/* 비동기 함수 */

// A. 기존
function work1(onDone){
    // 1. 100ms의 지연 작업을 하는 work1() 함수 선언. 지연 작업 완료 후 onDone() 함수가 실행됨
    setTimeout(()=> onDone('작업1 완료!', 100));
}
function work2(onDone){
    // 2. 200ms의 지연 작업을 하는 work2() 함수 선언. 지연 작업 완료 후 onDone() 함수가 실행됨
    setTimeout(()=> onDone('작업2 완료!', 200));
}
function work3(onDone){
    // 3. 300ms의 지연 작업을 하는 work3() 함수 선언. 지연 작업 완료 후 onDone() 함수가 실행됨
    setTimeout(()=> onDone('작업3 완료!', 300));
}
function urgentWork(){
    console.log('긴급 작업');
}
// 실제 비동기 함수를 사용하는 예
work1(function (msg1){
    // 4. 지연 작업 함수를 실행함
    console.log('done after 100ms:' + msg1);
    work2(function (msg2){
        console.log('done after 300ms' + msg2);
        work3(function (msg3){
            console.log('done after 600ms' + msg3);
        })
    })
});
// 5. 지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수
urgentWork();

// B. ES6
class Promise {
    constructor(fn){
        const resolve = (...args) => {
            if(typeof this.onDone === 'function'){
                this.onDone(...args);
            }
            if(typeof this.onComplete === 'function'){
                this.onComplete();
            }
        }
        const reject = (...args) => {
            if(typeof this.onError === 'function'){
                this.onError(...args);
            }
            if(typeof this.onComplete === 'function'){
                this.onComplete();
            }
        }
        fn(resolve, reject);
    }
    then(onDone, onError){
        this.onDone = onDone;
        this.onError = onError;
        return this;
    }
    catch(onError){
        this.onError = onError;
        return this;
    }
    finally(onComplete){
        this.onComplete = onComplete;
        return this;
    }
}
// Promise 객체를 생성할 때는 클래스의 resolve() 함수 또는 reject()함수에 해당하는 콜백 함수를 직접 전달해야 함

const work1 = () => 
new Promise((resolve)=>{
    setTimeout(() => resolve('작업1 완료!'), 100);
});
const work2 = () => 
new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료!'), 200);
})
const work3 = () =>
new Promise((resovle) => {
    setTimeout(() => resolve('작업3 완료!'), 300);
});

//Promise 객체를 반환하는 함수를 정의했으므로 work1(), work2(), work3() 순서로 지연 작업을 비동기로 수행하는 예제 (실행 결과는 기존 자바스크립트로 만든 것과 동일하지만 콜백 지옥이 해결됨)
const work1 = () =>
    new Promise(resolve => {
        setTimeout(() => resovle('작업1 완료!'), 100);
});
const work2 = () =>
    new Promise(resolve => {
        setTimeout(() => resovle('작업2 완료!'), 200);
});
const work3 = () =>
    new Promise(resolve => {
        setTimeout(() => resovle('작업3 완료!'), 300);
});
function urgentWork(){
    console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms:' + msg1);
    return work2();
};

work1()
    .then(nextWorkOnDone)
    .then((msg2) => {
        console.log('done after 200ms:' + msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 600ms:' + msg3);
    });
urgentWork();

// then() 함수가 Promise 객체를 반환하는 것을 응용하여 각 지연 작업을 나누거나 다시 합칠 수 있음
const work1and2 = () => work1()
    .then((msg1) => {
        console.log('done after 100ms:' + msg1);
        return work2();
    })

work1and2()
    .then((msg2) => {
        console.log('done after 200ms:' + msg2);
        return work3();
    })
    .then((msg3) => {
        console.log('done after 600ms:' + msg3);
    });