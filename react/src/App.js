import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import RestauranstList from "./components/RestauranstList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Logout from "./components/Logout";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/logout" component={<Logout />} />
        <Route path="/login" render={(props) => <Login {...props} />}></Route>
        <Protected exact path="/details" component={RestaurantDetail} />
        <Protected exact path="/update/:id" component={RestaurantUpdate} />
        <Protected exact path="/search" component={RestaurantSearch} />
        <Protected exact path="/create" component={RestaurantCreate} />
        <Protected exact path="/list" component={RestauranstList} />
        <Protected exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
