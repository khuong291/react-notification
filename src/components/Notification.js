import * as React from "react";
import PropTypes from "prop-types";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: true
      // flag = {
      //   canCloseOnClick: true,
      //   canDrag: false
      // },
      // drag = {
      //   start: 0,
      //   x: 0,
      //   deltaX: 0,
      //   removalDistance: 0
      // }
    };
  }

  componentDidMount() {
    this.props.onOpen(this.props.children.props);
    if (this.props.draggable) {
      this.bindDragEvents();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.draggable !== this.props.draggable) {
      this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents();
    }
  }

  componentWillUnmount() {
    this.props.onClose(this.props.children.props);
    if (this.props.draggable) {
      this.unbindDragEvents();
    }
  }

  pauseToast = () => {
    this.setState({ isRunning: false });
  };

  playToast = () => {
    this.setState({ isRunning: true });
  };

  bindDragEvents() {
    document.addEventListener("mousemove", this.onDragMove);
    document.addEventListener("mouseup", this.onDragEnd);

    document.addEventListener("touchmove", this.onDragMove);
    document.addEventListener("touchend", this.onDragEnd);
  }

  unbindDragEvents() {
    document.removeEventListener("mousemove", this.onDragMove);
    document.removeEventListener("mouseup", this.onDragEnd);

    document.removeEventListener("touchmove", this.onDragMove);
    document.removeEventListener("touchend", this.onDragEnd);
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

Notification.propTypes = {
  providerName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  iconURL: PropTypes.string,
  hasCloseButton: PropTypes.boolean,
  autoClose: PropTypes.boolean,
  draggable: PropTypes.boolean,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onClick: PropTypes.func
};

Notification.defaultProps = {
  providerName: "",
  title: "",
  description: "",
  iconURL: "",
  hasCloseButton: false,
  autoClose: true,
  draggable: true,
  onOpen: () => {},
  onClose: () => {},
  onClick: () => {}
};

export default Notification;
