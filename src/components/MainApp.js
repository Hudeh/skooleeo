import React from 'react'
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import contactUs from "./contactUs";
import Home from "./Home";
import FooterDetails from './FooterDetails';
import Demo from './Demo';

export default function MainApp() {
    return (
        <>
          <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/contact" component={contactUs} />
          <Route path="/demo" component={Demo} />
        </Switch>
        <FooterDetails />
        </>
    )
}
