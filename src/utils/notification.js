import { NotificationContainerId } from "./constants";
import ReactDOM from "react-dom";
import React from "react";
import NotificationContainer from "../components/NotificationContainer";
import * as C from "./constants";

export let queue = [];
let fullQueue = [];
let notificationId = 0;
const noop = () => {};

const notification = Object.assign({
  config: ({ maxNotifications, notificationDisplayTime }) => {
    (C.MaxNotifications = maxNotifications),
      (C.NotificationDisplayTime = notificationDisplayTime);
  },
  emit: (
    {
      providerURL,
      title,
      description,
      closeButtonText = "Close",
      hasCloseButton = true,
      autoClose = true,
      draggable = true
    },
    { onClick = noop, onClose = noop }
  ) => {
    fullQueue.push({
      id: notificationId++,
      providerURL,
      title,
      description,
      closeButtonText,
      hasCloseButton,
      autoClose,
      draggable
    });
    queue = fullQueue.slice(0, C.MaxNotifications);
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(
      <NotificationContainer onClick={onClick} onClose={onClose} />,
      target
    );
  },
  dismissAll: (onDismiss = noop) => {
    fullQueue = [];
    queue = [];
    notificationId = 0;
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.unmountComponentAtNode(target);
    onDismiss();
  },
  onClose: id => {
    fullQueue = fullQueue.filter(i => i.id !== id);
    queue = fullQueue.slice(0, C.MaxNotifications);
    let target = document.getElementById(NotificationContainerId);
    ReactDOM.render(<NotificationContainer />, target);
  }
});

export default notification;
