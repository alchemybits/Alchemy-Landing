import React, { Component } from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { Provider } from "react-redux";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-pro-react.css?v=1.1.0";

import { applyMiddleware, createStore } from "redux";
import reducers from "./Reducers/index";
import thunk from "redux-thunk";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

var hist = createBrowserHistory();
const store = createStoreWithMiddleware(reducers);



class App extends Component {
  render() {
          return (
            <Provider store={store}>
              <Router history={hist}>
                <Switch>
                  {indexRoutes.map((prop, key) => <Route path={prop.path} key={key} component={prop.component} /> )}
                </Switch>
              </Router>
            </Provider>
          );    
  }
}

export default App;

//<Route path={"/"} component={PresentationPage} />
