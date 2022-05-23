import React from 'react';

import facebook from '../assets/facebookLogoWhite.png'
import twitter from '../assets/twitterLogoWhite.png'
import linkedin from '../assets/linkedinLogoWhite.png'
import instagram from '../assets/instagramLogoWhite.png'

import './SocialMediaPanel.css';


const SocialMediaPanel = () => {

    return(
        <div className="social-container">

            <ul className="social-menu">
                <li className="social-item">
                <a href="https://www.facebook.com/relaxkidseastlothianemma" className="social-link"><img src={facebook} className="social-media-logo" alt="facebook" /></a>        
                </li>
                <li className="social-item">
                <a href="https://twitter.com/esvance" className="social-link"><img src={twitter} className="social-media-logo" alt="twitter" /></a>  
                </li>
                <li className="social-item">
                <a href="https://www.linkedin.com/in/emma-vance-21a30811/" className="social-link"><img src={linkedin} className="social-media-logo" alt="linked In" /></a>       
                </li>
                <li className="social-item">
                <a href="https://www.instagram.com/emmavance75/" className="social-link"><img src={instagram} className="social-media-logo" alt="instagram" /></a>      
                </li>
            </ul>

        </div>
    )

};

export default SocialMediaPanel;