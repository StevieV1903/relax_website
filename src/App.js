import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import Contact from "./pages/Contact.js";
import RelaxKidsServices from "./pages/RelaxKidsServices.js";
import ServiceTwo from "./pages/ServiceTwo.js";
import ServiceThree from "./pages/ServiceThree.js";
import ServiceFour from "./pages/ServiceFour.js";


const App = () => {
  return (
    <div className="app">
    <Router> 
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ About } />
        <Route path="/services" exact component={ Services } />
        <Route path="/contact" exact component={ Contact } />
        <Route path="/relax-kids-services" exact component={ RelaxKidsServices } />
        <Route path="/service-2" exact component={ ServiceTwo } />
        <Route path="/service-3" exact component={ ServiceThree } />
        <Route path="/service-4" exact component={ ServiceFour } />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
