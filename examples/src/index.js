import React from "react";
import { render } from "react-dom";
import { notification, NotificationContainer } from "../../src";

notification.config = {
  maxNotifications: 3,
  notificationDisplayTime: 5000
};

const App = () => (
  <div>
    <NotificationContainer />
    <button
      onClick={() => {
        notification.emit(
          {
            providerURL:
              "http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png",
            title: "Disk Not Ejected Properly",
            description:
              "Eject Time Machine before disconnecting or turning it off"
          },
          {
            onClick: () => console.log("Click!!"),
            onClose: () => console.log("Close!!")
          }
        );
      }}
    >
      show
    </button>
    <button
      onClick={() => {
        notification.dismissAll();
      }}
    >
      dismissAll
    </button>
  </div>
);

render(<App />, document.getElementById("root"));
