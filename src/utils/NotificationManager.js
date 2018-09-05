import * as React from "react";
import Notification from "./NotificationManager";
import { render, unmountComponentAtNode } from "react-dom";

// export let queue = [];
// export let notificationId = 0;

// const notification = {
//   show() {
//     notificationId += 1;
//   }
// };

// setTimeout(() => queue.push(notificationId), 1000);

// export default notification;

// class NotificationManager {
const NotificationManager = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  render(
    <Notification
      providerURL="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png"
      title="Disk Not Ejected Properly"
      description="Eject Time Machine before disconnecting or turning it off"
    />,
    container
  );
  // setTimeout(() => {
  //   unmountComponentAtNode(container);
  //   container.parentNode.removeChild(container);
  // }, 3000);
};
// }

export default NotificationManager;
