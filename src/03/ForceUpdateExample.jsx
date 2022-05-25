import React from "react";

class ForceUpdateExample extends React.Component {
  constructor(props) {
    super(props);
    // state 정의
    // 1. 클래스 변수로 초깃값을 정의
    this.loading = true;
    // 2. 클래스 변수로 초깃값을 정의
    this.formData = "no data";
    // 이후 콜백 함수를 다룰 때 bind를 선언하는 부분에 대해 다룸
    this.handleData = this.handleData.bind(this);
    // 4초 후에 handleData를 호출
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = "new data";
    // state 변경
    // 3. 내부 state 변경
    this.loading = false;
    // 4. 내부 state 변경
    this.formData = data + this.formData;
    // 5. 컴포넌트 내장 함수 forceUpdate()를 호출하여 강제로 화면을 새로고침함
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능 */}
        <span>로딩중: {String(this.loading)}</span> <br />
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
