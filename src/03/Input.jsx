import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Input extends PureComponent {
  // 1. 클래스형 컴포넌트의 PureComponent 형태로 작성
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChage(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    // 2. autoFocus값이 true일 경우 출력 후 input 박스에 자동으로 커서를 배치
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  componentDidUpdate() {
    // 3. autoFocus값이 true일 경우 출력 후 input 박스에 자동으로 커서를 배치
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {/* 4. label 안에 전달받은 label값을 출력 */}
        {label}
        <input
          id={`input_${name}`}
          ref={this.setRef}
          // 5. input 값이 변경될 때 onChange 콜백 함수를 호출
          onChange={this.handleChange}
          // 6. 프로퍼티로 전달받은 콜백 함수를 DOM 이벤트 프로퍼티에 연결하여 input에 마우스 커서가 포커스될 때 상위 컴포넌트의 콜백 함수를 호출
          onFocus={onFocus}
          value={value}
          type={type}
        />
        {/* 7. errorMessage가 존재할 경우 출력 */}
        {errorMessage && <span className="error">{errorMessage}</span>}
      </label>
    );
  }
}

Input.propTypes = {
  // 8. 문자열형의 값 'text', 'number', 'price' 중 하나의 값만 가질 수 있음
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChage: () => {},
  onFocus: () => {},
  autoFocus: false,
  // 9. type의 기본값은 'text'
  type: "text",
};
export default Input;
