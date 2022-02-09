import React from 'react';
import './Footer.css';

import SocialMediaPanel from '../components/SocialMediaPanel';

const Footer = () => {

    return(
        <div className="main-footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* column1 */}
                    <div className="footer-col">
                        <h4 className="footer-service-title" >OUR SERVICES</h4>
                            <ul className="footer-list">
                                <li>relax kids services</li>
                                <li>story massage</li>
                                <li>eft - tapping</li>

                            </ul> 
                    </div>
                    {/* column2 */}
                    <div className="footer-col">
                    <h4 className="footer-service-title">TITLE</h4>
                        <ul className="footer-list">
                            <li>footer lister</li>
                            <li>footer lister</li>
                            <li>footer lister</li>

                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="footer-col">
                        <h4 className="footer-service-title">CONTACT US</h4>
                        <ul className="footer-list">
                            <li>privacy statement</li>
                            <li>terms of service</li>
                            {/* <li>Dunbar, East Lothian</li> */}

                        </ul>

                    </div>
                    <div className="footer-social-panel">
                    <SocialMediaPanel />
                    </div>
                </div>
                <hr />
                <div className="footer-row-bottom">
                    <p>&copy;{new Date().getFullYear()} Relax East Lothian | All Rights Reserved | Website created by StevieV1903</p>

                </div>
            </div>
        </div>
    )

};

export default Footer;