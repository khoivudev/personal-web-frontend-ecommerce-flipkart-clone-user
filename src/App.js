import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "./actions";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
