import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DevicesPage from "./devices/DevicesPage";
import "../style/index.css";
import ManageDevicePage from "./devices/ManageDevicePage";

const App = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/devices" component={DevicesPage} />
        <Route path="/device/:slug" component={ManageDevicePage} />
        <Route path="/device" component={ManageDevicePage} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  </>
);

export default App;
