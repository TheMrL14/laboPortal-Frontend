import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import DevicesPage from "./devices/DevicesPage";
import "../style/index.css";

const App = () => (
    <>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/devices" component={DevicesPage}/>
            <Route component={PageNotFound}/>
        </Switch>
    </>
);

export default App;
