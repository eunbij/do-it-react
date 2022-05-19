/* import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="APP">
                <h1 className="title">두잇! 리액트 시작하기</h1>
            </div>
        );
    }
}

export default App; */


//JSX 
/* import React from 'react';

class App extends React.Component{
    render() {
        return (
            // JSX 양식
            <div>
                <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
                <div>안녕하세요</div>
            </div>
        );
    }
}
export default App; */

/* 작성한 컴포넌트 추가하기 */
/* import React from 'react';
// 작성된 컴포넌트를 불러들임
import TodaysPlan from './03/TodaysPlan';

class App extends React.Component {
    render() {
        return (
            <div className="body">
                <TodaysPlan />
            </div>
        )
    }
}
export default App;
 */
import React from "react";
import PropComponent from "./03/PropsComponent";

class App extends React.Component {
  render() {
    return <PropComponent name="두잇 리액트" />;
  }
}
export default App;
