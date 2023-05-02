import * as React from "react";
import * as ReactDOM from "react-dom";
import {Card} from "./Card";

export function App() {
  return (<div>
    <h1>Hello world!</h1>
    <Card title="Welcome!" paragraph="To this example" />
  </div>)
}

ReactDOM.render(<App />, document.getElementById("app"));
