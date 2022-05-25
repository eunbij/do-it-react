import React from "react";

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      //1. 컴포넌트에서 관리하려는 변수 state 초깃값을 this.state에 객체 형태로 정의
      loading: true,
      formData: "no data",
    };
    // 이후 콜백 함수를 다룰 때 bind(this) 추가 학습 예정
    // 2. 함수로 넘어갈 this는 반드시 생성자에서 bind()로 묶어주어야 함 (3-9에서 학습 예정)
    this.handleData = this.handleData.bind(this);
    // 3. setTimeout() 함수를 사용하여 4초 후에 handleData() 함수를 호출
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    // 4. 컴포넌트 특수 변수 this.state를 사용하여 state값에 접근
    const { formData } = this.state;
    //state 변경
    this.setState({
      // 5. 컴포넌트의 내장 함수 this.setState()를 사용하여 state값을 변경
      loading: false,
      formData: data + formData,
    });
    // this.state.loading은 현재 true
    console.log("loading값", this.state.loading);
    // 이후 호출될 render() 함수에서의 this.state.loading은 false
  }
  render() {
    return (
      <div>
        {/*state 데이터는 this.state로 접근 가능. */}
        <span>로딩중: {String(this.state.loading)}</span> <br />
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;

/* 
// 일반 함수와 화살표 함수를 setState() 함수의 인자로 전달하여 state 값을 변경
// 일반 함수를 사용한 예
handleData(data) {
    this.setState(function(prevState)) {
        const newState = {
            loading: false,
            formData: data + prevState.formData,
        };
        return newState;
    }
}

// 화살표 함수를 사용한 예
handleData(data) {
    this.setState(prevState =>({
        loading: false,
        formData: data + prevState.formData
    }));
} 
*/
