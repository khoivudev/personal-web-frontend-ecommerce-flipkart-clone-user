import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
