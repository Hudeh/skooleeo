import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import MainApp from "./components/MainApp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
 
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <MainApp />
        </Switch>
      </Router>
        <Footer />
    </div>
  );
}

export default App;
