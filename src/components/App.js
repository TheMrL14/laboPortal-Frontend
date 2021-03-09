import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DevicesPage from "./devices/DevicesPage";
import "../style/index.css";
import SopsPage from "./sops/SopsPage";

import EditDevice from "./device/EditDevicePage";
import EditSop from "./sop/EditSopPage";
import DeviceSop from "./device/DeviceSopPage";

const App = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/devices" component={DevicesPage} />

        <Route path="/device/:slug/edit" component={EditDevice} />
        <Route path="/device/:slug/info" component={EditDevice} />
        <Route path="/device/:slug/sop" component={DeviceSop} />
        <Route path="/device/create" component={EditDevice} />

        <Route path="/sop/:slug/edit" component={EditSop} />
        <Route path="/sop/create" component={EditSop} />

        <Route path="/sops" component={SopsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  </>
);

export default App;
