import React from "react";
import { render } from "react-dom";
import NotificationManager from "../../src";

// window.show = NotificationManager;

const App = () => (
  <div>
    <button
      onClick={() => {
        NotificationManager();
      }}
    >
      show
    </button>
  </div>
);

render(<App />, document.getElementById("root"));
