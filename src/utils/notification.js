import { NotificationContainerId } from "./constants";
import ReactDOM from "react-dom";
import React from "react";
import NotificationContainer from "../components/NotificationContainer";

export let queue = [];
let notificationId = 0;

const notification = Object.assign({
  emit: () => {
    queue.push({ id: notificationId++ });
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(<NotificationContainer />, target);
  },
  dismissAll: () => {
    queue = [];
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.unmountComponentAtNode(target);
  }
});

export default notification;
