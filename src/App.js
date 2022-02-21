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
import StoryMassage from "./pages/StoryMassage.js";
import EFTTapping from "./pages/EFTTapping.js";
import ServiceFour from "./pages/ServiceFour.js";
import Gallery from "./pages/Gallery.js";
import Privacy from './pages/Privacy';



const App = () => {
  return (
    <div className="app">
    <Router> 
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ About } />
        <Route path="/services" exact component={ Services } />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact" exact component={ Contact } />
        <Route path="/relax-kids-services" exact component={ RelaxKidsServices } />
        <Route path="/story-massage" exact component={ StoryMassage } />
        <Route path="/eft-tapping" exact component={ EFTTapping } />
        <Route path="/service-4" exact component={ ServiceFour } />
        <Route path="/privacy" exact component={ Privacy } />
        {/* <Route path="/terms" exact component={ Terms } /> */}

      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
