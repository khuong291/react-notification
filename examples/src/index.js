import React from "react";
import { render } from "react-dom";
import { notification, NotificationContainer } from "../../src";

const App = () => (
  <div>
    <NotificationContainer />
    <button
      onClick={() => {
        notification.emit({
          providerURL:
            "http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png",
          title: "Disk Not Ejected Properly",
          description:
            "Eject Time Machine before disconnecting or turning it off"
        });
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
