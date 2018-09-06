import { NotificationContainerId } from "./constants";
import ReactDOM from "react-dom";
import React from "react";
import NotificationContainer from "../components/NotificationContainer";

export let queue = [];
let notificationId = 0;

const notification = Object.assign({
  emit: (providerURL, title, description) => {
    queue.push({ id: notificationId++, providerURL, title, description });
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(<NotificationContainer />, target);
  },
  dismissAll: () => {
    queue = [];
    notificationId = 0;
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.unmountComponentAtNode(target);
  },
  onClose: id => {
    queue = queue.filter(i => i.id !== id);
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(<NotificationContainer />, target);
  }
});

export default notification;
