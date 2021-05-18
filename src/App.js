import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Anime from "./pages/anime";
import Login from "./pages/login";

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/anime" component={Anime} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
