import React from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "./HomePage";
import Game from "./Game";
import ZeroKnowledge from "./ZeroKnowledge";

import Career from "./Career";
import CareerDetail from "./CareerDetail";
import Disclaimer from "./Disclaimer";
import Faq from "./Faq";
import Privacy from "./Privacy";
import DynamicPage from "./DynamicPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/zero-knowledge" component={ZeroKnowledge} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/career-detail" component={CareerDetail} />
      <Route exact path="/disclaimer" component={Disclaimer} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/page/:route?" component={DynamicPage} />
    </Switch>
  );
}
