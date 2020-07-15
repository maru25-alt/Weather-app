import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Navigation from './navigation/Navigation'
import Footer from './navigation/Footer'
import Home from './views/Home'
import About from './views/About'
import Map from './views/Map'
import Graph from './views/Graph'
import Table from './views/Table'
import Page404 from './views/Page404'

function App() {
  return (
   <Router>
     <div>
       <Navigation/>
     <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/map">
            <Map/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Router  path="/table">
            <Table/>
          </Router>
          <Router path="/graph">
            <Graph/>
          </Router>
          <Router path="*">
            <Page404/>
          </Router>
      </Switch>
      <Footer/>
     </div>
   </Router>
  
  );
}

export default App;
