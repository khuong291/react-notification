import React from "react";
import { render } from "react-dom";
import { notification, NotificationContainer } from "../../src";

const App = () => (
  <div>
    <NotificationContainer />
    <button
      onClick={() => {
        notification.emit();
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
