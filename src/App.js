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
import Service2 from "./pages/Service2.js";
import Service3 from "./pages/Service3.js";
import Service4 from "./pages/Service4.js";


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
        <Route path="/service-2" exact component={ Service2 } />
        <Route path="/service-3" exact component={ Service3 } />
        <Route path="/service-4" exact component={ Service4 } />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
