/* 
JSX와 기존 개발 방법의 차이점 알아보기
1. App 컴포넌트를 사용하지 않고 화면 구성해 보기

// 필수 리액트 구동 모듈들
import React from 'react';
import ReactDOM from 'react-dom/client';
// 초기 화면을 구성하는 사용자 코드
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// 리액트 엔진이 화면을 출력하는 코드
// id가 root인 엘리먼트에 컴포넌트를 출력
ReactDOM.render(<App />, document.getElementById('root'));

/* 삭제
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
*/

// 서비스 워커 구동 코드로 오프라인 모드로 작동하는 데 도움이 되는 모듈
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); //삭제
/* serviceWorker.unregister(); */


/* 2. App 컴포넌트 사용하지 않을 경우 코드 수정 */
/* 
var img = document.createElement('img');
img.setAttribute('src','http://www.easyspub.co.kr/images/logo_footer.png');
var divEl = document.createElement('div');
divEl.innerText = '안녕하세요';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);

var root = document.getElementById('root');
root.append(welcomeEl);
 */

/* 3. 코드 정리 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* 
JSX 작동 원리 (리액트 엔진이 JSX를 자바스크립트로 변환한 코드 일부)
return (
  // JSX가 자바스크립트로 변환된 것
  React.createElement(
    "div",
    null,
    React.createElement("img", {
      src: "http://easyspub.co.kr/images/logo_footer.png"
    }),
    React.createElement(
      "div",
      null,
      "안녕하세요"
    )
  )
); */