import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TeamBuilder from "./pages/TeamBuilder";
import Games from "./pages/Games";
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Games} />

          <Route path='/fantasy' exact component={TeamBuilder} />

          <Redirect from='/home' to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
