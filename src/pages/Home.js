import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return(
        <div className="home-container">
                <div class="hero-image">
                <div class="hero-text">
                    <h1 className="hero-title">Relax East Lothian</h1>
                    <p>Let us help you add a bit of calm to your hectic life.</p>
                    <div 
                    // className="home-btn"
                    >
                        <Link to="/contact" className="home-link">
                            Contact
                        </Link>
                    </div>
                </div>
                </div>

        </div>
    )

};

export default Home;