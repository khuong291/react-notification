import { NotificationContainerId } from "./constants";
import ReactDOM from "react-dom";
import React from "react";
import NotificationContainer from "../components/NotificationContainer";

export let queue = [];
let notificationId = 0;
const noop = () => {};

const notification = Object.assign({
  emit: ({ providerURL, title, description }, onRender = noop) => {
    queue.push({ id: notificationId++, providerURL, title, description });
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(<NotificationContainer />, target);
    onRender();
  },
  dismissAll: (onDismiss = noop) => {
    queue = [];
    notificationId = 0;
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.unmountComponentAtNode(target);
    onDismiss();
  },
  onClose: (id, onClose = noop) => {
    queue = queue.filter(i => i.id !== id);
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(<NotificationContainer />, target);
    onClose();
  }
});

export default notification;
