import React from "react";
import { render } from "react-dom";
import Notification from "../../src";

const App = () => (
  <div>
    <Notification />
  </div>
);

render(<App />, document.getElementById("root"));
