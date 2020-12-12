function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgAccount(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    id: "account_svg__account",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 22 22"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("style", null, ".account_svg__cls-1{fill:#fff}")), /*#__PURE__*/React.createElement("path", {
    id: "account_svg__Path_179",
    "data-name": "Path 179",
    className: "account_svg__cls-1",
    d: "M22 11a11 11 0 10-11 11 10.994 10.994 0 0011-11zM11 1.289a9.712 9.712 0 018.048 15.147 11 11 0 00-16.1 0A9.712 9.712 0 0111 1.289zM3.756 17.467a9.708 9.708 0 0114.488 0 9.7 9.7 0 01-14.488 0zm0 0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "account_svg__Path_180",
    "data-name": "Path 180",
    className: "account_svg__cls-1",
    d: "M169.867 70.023a3.872 3.872 0 003.867-3.867v-1.289a3.867 3.867 0 00-7.734 0v1.289a3.872 3.872 0 003.867 3.867zm-2.578-5.156a2.578 2.578 0 015.156 0v1.289a2.578 2.578 0 01-5.156 0zm0 0",
    transform: "translate(-158.867 -58.379)"
  }));
}

export default SvgAccount;