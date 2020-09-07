import React from "react";
import { HeroList } from "./heroList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HeroDetail } from "./heroDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HeroList />
        </Route>
        <Route exact path={"/:id"}>
          <HeroDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
