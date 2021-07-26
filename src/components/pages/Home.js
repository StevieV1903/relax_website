import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div className="home">
            {/* <h1 className="home-title">Relax East Lothian</h1>
            <h2>Welcome to Relax East Lothian.</h2>
            <p>Lectus habitant pellentesque ultrices arcu vehicula arcu vestibulum. Porttitor primis duis dignissim pharetra potenti cras leo porttitor fames phasellus. Dictum ultrices vel nam ut nascetur condimentum habitant magna adipiscing cubilia laoreet eros. Consequat sit purus nisi penatibus massa elementum lorem, praesent cubilia interdum. Egestas purus feugiat montes sollicitudin lacinia. Lectus est at pellentesque eros lacinia interdum curabitur laoreet semper. Est, adipiscing viverra volutpat magnis fusce laoreet dictumst. Eleifend, senectus himenaeos id. Praesent lorem mauris nisi in scelerisque elementum gravida metus. Duis interdum bibendum fusce at euismod tempor est morbi natoque donec.
            </p> */}

                <div class="hero-image">
                <div class="hero-text">
                    <h1>Welcome to RELAX East Lothian</h1>
                    <p>Let us help you add a bit of calm to your hectic life.</p>
                    <button className="home-btn">
                        <Link to="/contact" className="home-btn-link">
                            Contact Me
                        </Link>
                    </button>
                </div>
                </div>

        </div>
    )

};

export default Home;