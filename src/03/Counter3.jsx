import React from "react";

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increaseCount() {
    this.setState((count) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button
          // 1. 버튼이 클릭될 때 카운트를 증가하는 함수 호출
          onClick={this.increaseCount}
          // 2. 버튼 밖으로 마우스가 이동하면 카운트를 초기화하는 함수를 호출
          onMouseOut={this.resetCount}
        >
          카운트 증가
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화됩니다.
      </div>
    );
  }
}

export default Counter3;
