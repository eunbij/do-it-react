import React from "react";
// 1. prop-types 라이브러리를 PropTypes라는 이름으로 임포트
import PropTypes from "prop-types";

class PropsComponent extends React.Component {
  render() {
    // 2. name 프로퍼티로 받은 문자열 출력
    return <div className="message-container">{this.props.name}</div>;
  }
}

// 자료형을 선언하는 예제
PropsComponent.propTypes = {
  // 3. PropsComponent의 propTypes라는 특수 변수(prop-types 라이브러리 임포트 이름과 다름)를 사용하여 프로퍼티의 자료형 정의
  // 4. 프로퍼티의 자료형을 객체 형태로 지정하여 PropsComponent.propTypes에 저장
  name: PropTypes.string,
};

export default PropsComponent;
