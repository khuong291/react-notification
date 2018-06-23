import * as React from "react";
import PropTypes from "prop-types";

class Notification extends React.Component {}

Notification.PropTypes = {
  closeButton: boolean.isRequired,
  autoClose: boolean.is,
  draggable: boolean,
  onOpen: func.isRequired,
  onClose: func.isRequired,
  onClick: func.isRequired
};

export default Notification;
