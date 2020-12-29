import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Details from './components/Details';
import {Provider} from 'react-redux';
import store from "./store";
function App() {
  return (
    <Router>
    <Provider store={store}>
    <Nav/>
      <Route path="/" exact component={Home} />
      <Route path="/Cart" exact component={Cart} />
      <Route path="/details/:id" exact component={Details} />
      </Provider>
    </Router>
  );
}

export default App;
