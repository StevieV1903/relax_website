import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './Home.css';
// import SocialMediaPanel from '../components/SocialMediaPanel';

const Home = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return(
        <div className="home-container">
                <div class="hero-image">
                    {/* <div class="hero-text">
                    <h1 className="hero-title">Relax East Lothian</h1>
                    <p>Let us help you add a bit of calm to your hectic life.</p>
                        <div className="home-btn"
                        >
                            <Link to="/contact" className="home-link">
                                Contact
                            </Link>
                        </div>
                    </div> */}
                    {/* <div className="home-social-panel">
                    <SocialMediaPanel />
                    </div> */}
                </div>

        </div>
    )

};

export default Home;