"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _notification = require("../utils/notification");

var _notification2 = _interopRequireDefault(_notification);

var _constants = require("../utils/constants");

var _NotificationStyles = require("../styles/NotificationStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.state = {
      isClosed: false,
      isClicked: false
    };
    return _this;
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._mounted = true;
      if (this.props.autoClose) {
        setTimeout(function () {
          if (_this2._mounted) {
            _this2.setState({
              isClosed: true
            }, function () {
              _this2.props.onClose();
              setTimeout(function () {
                _notification2.default.onClose(_this2.props.id);
              }, 500);
            });
          }
        }, _constants.NotificationDisplayTime);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "_onClose",
    value: function _onClose() {
      var _this3 = this;

      this.setState({
        isClosed: true
      }, function () {
        setTimeout(function () {
          _this3.props.onClose();
          _notification2.default.onClose(_this3.props.id);
        }, 500);
      });
    }
  }, {
    key: "_onClick",
    value: function _onClick() {
      var _this4 = this;

      this.setState({
        isClicked: true
      }, function () {
        setTimeout(function () {
          _this4.props.onClick();
          _notification2.default.onClose(_this4.props.id);
        }, 300);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Container = this.state.isClicked ? _NotificationStyles.FadeInContainer : this.state.isClosed ? _NotificationStyles.ClosedContainer : _NotificationStyles.OpenedContainer;
      return React.createElement(
        Container,
        null,
        React.createElement(
          _NotificationStyles.ContentBox,
          {
            hasCloseButton: this.props.hasCloseButton,
            onClick: this._onClick.bind(this)
          },
          React.createElement(_NotificationStyles.ProviderImage, { src: this.props.providerURL }),
          React.createElement(
            _NotificationStyles.TextBox,
            { hasCloseButton: this.props.hasCloseButton },
            React.createElement(
              _NotificationStyles.Title,
              null,
              this.props.title
            ),
            React.createElement(
              _NotificationStyles.Description,
              null,
              this.props.description
            )
          )
        ),
        this.props.hasCloseButton && React.createElement(
          _NotificationStyles.HandleBox,
          null,
          React.createElement(
            _NotificationStyles.CloseButton,
            { onClick: this._onClose.bind(this) },
            this.props.closeButtonText
          )
        )
      );
    }
  }]);

  return Notification;
}(React.Component);

Notification.propTypes = {
  id: _propTypes2.default.number.isRequired,
  providerURL: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  closeButtonText: _propTypes2.default.string,
  hasCloseButton: _propTypes2.default.bool,
  autoClose: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onClick: _propTypes2.default.func
};

Notification.defaultProps = {
  hasCloseButton: true,
  autoClose: false,
  onClose: function onClose() {},
  onClick: function onClick() {}
};

exports.default = Notification;