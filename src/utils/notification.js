import { NotificationContainerId } from "./constants";
import ReactDOM from "react-dom";
import React from "react";
import NotificationContainer from "../components/NotificationContainer";

export let queue = [];
let notificationId = 0;
const noop = () => {};

const notification = Object.assign({
  emit: (
    { providerURL, title, description },
    { onClick = noop, onClose = noop }
  ) => {
    queue.push({ id: notificationId++, providerURL, title, description });
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(
      <NotificationContainer onClick={onClick} onClose={onClose} />,
      target
    );
  },
  dismissAll: (onDismiss = noop) => {
    queue = [];
    notificationId = 0;
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.unmountComponentAtNode(target);
    onDismiss();
  },
  onClose: id => {
    queue = queue.filter(i => i.id !== id);
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(<NotificationContainer />, target);
  }
});

export default notification;
