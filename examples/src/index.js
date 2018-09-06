import React from "react";
import { render } from "react-dom";
import { NotificationContainer } from "../../src";

const App = () => (
  <div>
    <NotificationContainer />
    <button onClick={() => {}}>show</button>
  </div>
);

render(<App />, document.getElementById("root"));
