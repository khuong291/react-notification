"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 4px 10px 0 0;\n  width: 350px;\n  float: right;\n"], ["\n  display: flex;\n  flex-direction: column;\n  margin: 4px 10px 0 0;\n  width: 350px;\n  float: right;\n"]);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Notification = require("./Notification");

var _Notification2 = _interopRequireDefault(_Notification);

var _constants = require("../utils/constants");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _notification = require("../utils/notification");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationContainer = function (_React$Component) {
  _inherits(NotificationContainer, _React$Component);

  function NotificationContainer() {
    _classCallCheck(this, NotificationContainer);

    return _possibleConstructorReturn(this, (NotificationContainer.__proto__ || Object.getPrototypeOf(NotificationContainer)).apply(this, arguments));
  }

  _createClass(NotificationContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        Container,
        { id: _constants.NotificationContainerId },
        _notification.queue.map(function (_ref) {
          var id = _ref.id,
              providerURL = _ref.providerURL,
              title = _ref.title,
              description = _ref.description,
              closeButtonText = _ref.closeButtonText,
              hasCloseButton = _ref.hasCloseButton,
              autoClose = _ref.autoClose;

          return React.createElement(_Notification2.default, {
            key: id,
            id: id,
            providerURL: providerURL,
            title: title,
            description: description,
            closeButtonText: closeButtonText,
            hasCloseButton: hasCloseButton,
            autoClose: autoClose,
            onClick: _this2.props.onClick,
            onClose: _this2.props.onClose
          });
        })
      );
    }
  }]);

  return NotificationContainer;
}(React.Component);

NotificationContainer.propTypes = {
  onClick: _propTypes2.default.func,
  onClose: _propTypes2.default.func
};

var Container = _styledComponents2.default.div(_templateObject);

exports.default = NotificationContainer;