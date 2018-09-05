import * as React from "react";
import Notification from "./Notification";
import PropTypes from "prop-types";

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  renderToast() {
    const toastToRender = {};
    const { className, style, newestOnTop } = this.props;
    const collection = newestOnTop
      ? Object.keys(this.collection).reverse()
      : Object.keys(this.collection);

    // group toast by position
    collection.forEach(toastId => {
      const { position, options, content } = this.collection[toastId];
      toastToRender[position] || (toastToRender[position] = []);

      if (this.state.toast.indexOf(options.id) !== -1) {
        toastToRender[position].push(this.makeToast(content, options));
      } else {
        toastToRender[position].push(null);
        delete this.collection[toastId];
      }
    });

    return Object.keys(toastToRender).map(position => {
      const disablePointer =
        toastToRender[position].length === 1 &&
        toastToRender[position][0] === null;
      const props = {
        className: cx(
          "Toastify__toast-container",
          `Toastify__toast-container--${position}`,
          { "Toastify__toast-container--rtl": this.props.rtl },
          this.parseClassName(className)
        ),
        style: disablePointer
          ? { ...style, pointerEvents: "none" }
          : { ...style }
      };

      return (
        <TransitionGroup {...props} key={`container-${position}`}>
          {toastToRender[position]}
        </TransitionGroup>
      );
    });
  }

  render() {
    return <div>{this.renderNotification()}</div>;
  }
}

export default NotificationContainer;
