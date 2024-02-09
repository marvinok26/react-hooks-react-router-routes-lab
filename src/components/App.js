import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/directors" component={Directors} />
      <Route path="/actors" component={Actors} />
    </div>
  );
};

export default App;