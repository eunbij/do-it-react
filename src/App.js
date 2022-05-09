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
import React from 'react';

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
export default App;