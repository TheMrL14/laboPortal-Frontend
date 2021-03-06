import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DevicesPage from "./devices/DevicesPage";
import "../style/index.css";
import ManageDevicePage from "./device/EditDevicePage";
import SopsPage from "./sops/SopsPage";
import DevicePage from "./device/DevicePage";

const App = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/devices" component={DevicesPage} />

        <Route path="/device/:slug/edit" component={ManageDevicePage} />
        <Route path="/device/:slug/info" component={ManageDevicePage} />
        <Route path="/device/create" component={ManageDevicePage} />

        <Route path="/device" component={DevicePage} />
        <Route path="/sops" component={SopsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  </>
);

export default App;
