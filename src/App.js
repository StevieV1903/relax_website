import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'

import Home from "./components/pages/Home.js";
import About from "./components/pages/About.js";
import Services from "./components/pages/Services.js";
import Contact from "./components/pages/Contact.js";
import Service1 from "./components/pages/Service1.js";
import Service2 from "./components/pages/Service2.js";
import Service3 from "./components/pages/Service3.js";
import Service4 from "./components/pages/Service4.js";


const App = () => {
  return (
    <Router> 
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ About } />
        <Route path="/services" exact component={ Services } />
        <Route path="/contact" exact component={ Contact } />
        <Route path="/service-1" exact component={ Service1 } />
        <Route path="/service-2" exact component={ Service2 } />
        <Route path="/service-3" exact component={ Service3 } />
        <Route path="/service-4" exact component={ Service4 } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
