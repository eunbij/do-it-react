import React from "react";

class LifecycleExample extends React.Component {
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps 호출");
    return {};
  }
  constructor(props) {
    super(props);
    // getDerivedStateFromProps() 함수를 사용하므로 경고 메시지 건너 뛰기 위해 state 초깃값 설정
    this.state = {};
    console.log("constructor 호출");
  }
  componentDidMount() {
    console.log("componentDidMount 호출");
    // shouldComponent() 함수 결괏값 상관없이 화면 동기화
    this.forceUpdate();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate 호출");
    // setState()를 사용하여 state값 변경
    // this.setState({ updated: true });
  }
  componentWillUnmount() {
    console.log("componentWillUnmout 호출");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate 호출");
    return {};
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate 호출");
    // return true;
    // return 반환값 강제로 false
    return false;
  }

  render() {
    console.log("render 호출");
    return null;
  }
}

export default LifecycleExample;
