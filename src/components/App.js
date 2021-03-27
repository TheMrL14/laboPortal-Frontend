import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DevicesPage from "./devices/DevicesPage";
import "../style/index.css";
import "../style/nav.css";

import SopsPage from "./sops/SopsPage";

import EditDevice from "./device/EditDevicePage";
import EditSop from "./sop/EditSopPage";
import DeviceSop from "./device/DeviceSopPage";
import DeviceCode from "./device/DeviceCode";
import SopDetailPage from "./sop/SopDetailPage";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => (
  <>
    <Header />

    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/devices/create" component={EditDevice} />

        <Route path="/devices/:slug/edit" component={EditDevice} />
        <Route path="/devices/:slug/code" component={DeviceCode} />
        <Route path="/devices/:slug/info" component={EditDevice} />
        <Route path="/devices/:slug/sop" component={DeviceSop} />
        <Route path="/devices" component={DevicesPage} />

        <Route path="/sops/:slug/info" component={SopDetailPage} />
        <Route path="/sops/:slug/edit" component={EditSop} />
        <Route path="/sops/create" component={EditSop} />
        <Route path="/sops" component={SopsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  </>
);

export default App;
