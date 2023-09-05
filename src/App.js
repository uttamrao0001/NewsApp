import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  routes = this.categories.map((category) => (
    <Route exact path={`/${category}`}
      element={<News key={category} country="in" pageSize={3} category={category} />} />
  ));
  /* we use key beacause we want if we click on any page to render it can deffertiate it from other page so that it knows that it needs to render for gettting requied result */

  render() {

    return (
      <div>
        <Router>
          <Navbar />
          {/* Then, in your component's render method: */}
          <Routes>
            <Route path="/" element={<News key={"general"} country="in" pageSize={3} category="general" />} />
            {this.routes}
          </Routes>
        </Router>
      </div>
    )
  }
}


