import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './Home.css';
import facebook from '../assets/facebookLogoWhite.png'
import twitter from '../assets/twitterLogoWhite.png'
import linkedin from '../assets/linkedinLogoWhite.png'
import instagram from '../assets/instagramLogoWhite.png'

const Home = () => {

    return(
        <div className="home-container">
                <div class="hero-image">
                    <div class="hero-text">
                    {/* <h1 className="hero-title">Relax East Lothian</h1> */}
                    {/* <p>Let us help you add a bit of calm to your hectic life.</p> */}
                        {/* <div className="home-btn"
                        >
                            <Link to="/contact" className="home-link">
                                Contact
                            </Link>
                        </div> */}
                    </div>
                    <ul className="social-menu">
                        <li className="social-item">
                        <a href="#" className="social-link"><img src={facebook} className="social-media-logo" alt="facebook" /></a>        
                        </li>
                        <li className="social-item">
                        <a href="#" className="social-link"><img src={twitter} className="social-media-logo" alt="twitter" /></a>  
                        </li>
                        <li className="social-item">
                        <a href="#" className="social-link"><img src={linkedin} className="social-media-logo" alt="linked In" /></a>       
                        </li>
                        <li className="social-item">
                        <a href="#" className="social-link"><img src={instagram} className="social-media-logo" alt="instagram" /></a>      
                        </li>
                    </ul>
                </div>

        </div>
    )

};

export default Home;