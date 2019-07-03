import React from "react";
import { Switch, Route } from "react-router-dom";
import Comprar from "../Comprar";
import Home from "../Home";
import Alquiler from "../Alquiler";
import Vender from "../Vender";

const routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/comprar" component={Comprar} />
      <Route path="/alquiler" component={Alquiler} />
      <Route path="/vender" component={Vender} />
    </Switch>
  </main>
);
