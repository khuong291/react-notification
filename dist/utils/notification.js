"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = undefined;

var _constants = require("./constants");

var C = _interopRequireWildcard(_constants);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _NotificationContainer = require("../components/NotificationContainer");

var _NotificationContainer2 = _interopRequireDefault(_NotificationContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queue = exports.queue = [];
var fullQueue = [];
var notificationId = 0;
var noop = function noop() {};

var notification = Object.assign({
  config: function config(_ref) {
    var maxNotifications = _ref.maxNotifications,
        notificationDisplayTime = _ref.notificationDisplayTime;

    C.MaxNotifications = maxNotifications, C.NotificationDisplayTime = notificationDisplayTime;
  },
  emit: function emit(_ref2, _ref3) {
    var providerURL = _ref2.providerURL,
        title = _ref2.title,
        description = _ref2.description,
        _ref2$closeButtonText = _ref2.closeButtonText,
        closeButtonText = _ref2$closeButtonText === undefined ? "Close" : _ref2$closeButtonText,
        _ref2$hasCloseButton = _ref2.hasCloseButton,
        hasCloseButton = _ref2$hasCloseButton === undefined ? true : _ref2$hasCloseButton,
        _ref2$autoClose = _ref2.autoClose,
        autoClose = _ref2$autoClose === undefined ? true : _ref2$autoClose;
    var _ref3$onClick = _ref3.onClick,
        onClick = _ref3$onClick === undefined ? noop : _ref3$onClick,
        _ref3$onClose = _ref3.onClose,
        onClose = _ref3$onClose === undefined ? noop : _ref3$onClose;

    fullQueue.push({
      id: notificationId++,
      providerURL: providerURL,
      title: title,
      description: description,
      closeButtonText: closeButtonText,
      hasCloseButton: hasCloseButton,
      autoClose: autoClose
    });
    exports.queue = queue = fullQueue.slice(0, C.MaxNotifications);
    var target = document.getElementById(_constants.NotificationContainerId);
    _reactDom2.default.render(_react2.default.createElement(_NotificationContainer2.default, { onClick: onClick, onClose: onClose }), target);
  },
  dismissAll: function dismissAll() {
    var onDismiss = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

    fullQueue = [];
    exports.queue = queue = [];
    notificationId = 0;
    var target = document.getElementById(_constants.NotificationContainerId);
    _reactDom2.default.unmountComponentAtNode(target);
    onDismiss();
  },
  onClose: function onClose(id) {
    fullQueue = fullQueue.filter(function (i) {
      return i.id !== id;
    });
    exports.queue = queue = fullQueue.slice(0, C.MaxNotifications);
    var target = document.getElementById(_constants.NotificationContainerId);
    _reactDom2.default.render(_react2.default.createElement(_NotificationContainer2.default, null), target);
  }
});

exports.default = notification;