import React from "react";
import PropTypes from "prop-types";

function SFC(props, context) {
  // 클래스형 컴포넌트의 this.props값과 동일
  const { somePropValue } = props;
  // 클래스형 컴포넌트의 this.context와 동일
  // (추후 6장에서 학습)
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue}</h1>;
}

SFC.PropTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: "default value" };

export default SFC;
