"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseButton = exports.HandleBox = exports.TextBox = exports.ContentBox = exports.ProviderImage = exports.Description = exports.Title = exports.FadeInContainer = exports.ClosedContainer = exports.OpenedContainer = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  from {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n\n  to {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n"], ["\n  from {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n\n  to {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  from {\n    transform: scale(1, 1)\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(0.3, 0.3);\n    opacity: 0;\n  }\n"], ["\n  from {\n    transform: scale(1, 1)\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(0.3, 0.3);\n    opacity: 0;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 60px;\n  background-color: #f6f6f6;\n  float: right;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  z-index: 999;\n  margin-bottom: 14px;\n  -moz-box-shadow: 0 0 14px #7d7d7d;\n  -webkit-box-shadow: 0 0 14px #7d7d7d;\n  box-shadow: 0 0 14px #7d7d7d;\n"], ["\n  width: 100%;\n  height: 60px;\n  background-color: #f6f6f6;\n  float: right;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  z-index: 999;\n  margin-bottom: 14px;\n  -moz-box-shadow: 0 0 14px #7d7d7d;\n  -webkit-box-shadow: 0 0 14px #7d7d7d;\n  box-shadow: 0 0 14px #7d7d7d;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  animation: ", " 0.5s ease-in-out;\n"], ["\n  animation: ", " 0.5s ease-in-out;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  animation: ", " 0.4s ease-in-out;\n"], ["\n  animation: ", " 0.4s ease-in-out;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 15px;\n  color: #565656;\n  font-weight: 600;\n  margin-bottom: 3px;\n"], ["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 15px;\n  color: #565656;\n  font-weight: 600;\n  margin-bottom: 3px;\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: #717171;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-height: 2em;\n  line-height: 1em;\n"], ["\n  font-size: 14px;\n  color: #717171;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-height: 2em;\n  line-height: 1em;\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  width: 35px;\n  height: 35px;\n  object-fit: scale-down;\n  margin: 7px 8px 0 4px;\n"], ["\n  width: 35px;\n  height: 35px;\n  object-fit: scale-down;\n  margin: 7px 8px 0 4px;\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n  width: ", ";\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n  cursor: pointer;\n"]),
    _templateObject11 = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: ", ";\n"], ["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: ", ";\n"]),
    _templateObject12 = _taggedTemplateLiteral(["\n  width: 20%;\n  height: 100%;\n  float: right;\n  text-align: center;\n  border-left: 1px solid #cfcfcf;\n"], ["\n  width: 20%;\n  height: 100%;\n  float: right;\n  text-align: center;\n  border-left: 1px solid #cfcfcf;\n"]),
    _templateObject13 = _taggedTemplateLiteral(["\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: #646464;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n  :hover {\n    background-color: #f0f0f0;\n  }\n"], ["\n  border: none;\n  background: none;\n  outline: none;\n  font-size: 13px;\n  font-weight: 600;\n  color: #646464;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n  :hover {\n    background-color: #f0f0f0;\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fromRightToLeft = (0, _styledComponents.keyframes)(_templateObject);

var fromLeftToRight = (0, _styledComponents.keyframes)(_templateObject2);

var fadeIn = (0, _styledComponents.keyframes)(_templateObject3);

var Container = _styledComponents2.default.div(_templateObject4);

var OpenedContainer = exports.OpenedContainer = Container.extend(_templateObject5, fromRightToLeft);

var ClosedContainer = exports.ClosedContainer = Container.extend(_templateObject5, fromLeftToRight);

var FadeInContainer = exports.FadeInContainer = Container.extend(_templateObject6, fadeIn);

var Title = exports.Title = _styledComponents2.default.div(_templateObject7);

var Description = exports.Description = _styledComponents2.default.div(_templateObject8);

var ProviderImage = exports.ProviderImage = _styledComponents2.default.img(_templateObject9);

var ContentBox = exports.ContentBox = _styledComponents2.default.div(_templateObject10, function (props) {
  return props.hasCloseButton ? "80%" : "100%";
});

var TextBox = exports.TextBox = _styledComponents2.default.div(_templateObject11, function (props) {
  return props.hasCloseButton ? "200px" : "100%";
});

var HandleBox = exports.HandleBox = _styledComponents2.default.div(_templateObject12);

var CloseButton = exports.CloseButton = _styledComponents2.default.button(_templateObject13);