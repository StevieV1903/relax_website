import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import SocialMediaPanel from '../components/SocialMediaPanel';

const Footer = () => {

    return(
        <div className="main-footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* column1 */}
                    <div className="footer-col">
                        <h4 className="footer-service-title" >SERVICES</h4>
                            <ul className="footer-list">
                                {/* <li className="footer-list-item"><a href="/relax-kids-services"> relax kids services</a></li>
                                <li className="footer-list-item"><a href="/story-massage">story massage</a></li>
                                <li className="footer-list-item">eft - tapping</li> */}

                                <li className="footer-list-item">
                                    <Link to="/relax-kids-services" className="footer-list-item-link"> 
                                    relax kids services
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/story-massage" className="footer-list-item-link">
                                        story massage
                                    </Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/eft-tapping" className="footer-list-item-link">
                                        eft - tapping
                                    </Link>
                                </li>

                            </ul> 
                    </div>

                    {/* <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={ closeMobileMenu }>
                        Home
                    </Link> */}

                    {/* </li> */}
                    {/* column2 */}
                    <div className="footer-col">
                    <h4 className="footer-service-title">TITLE</h4>
                        <ul className="footer-list">
                            <li className="footer-list-item">footer lister</li>
                            <li className="footer-list-item">footer lister</li>
                            <li className="footer-list-item">footer lister</li>

                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="footer-col">
                        <h4 className="footer-service-title">CONTACT US</h4>
                        <ul className="footer-list">
                            {/* <li>contact us</li> */}
                            <li className="footer-list-item">
                                <Link to="/privacy" className="footer-list-item-link">
                                    privacy statement
                                </Link>
                            </li>
                            <li className="footer-list-item">terms of service</li>
                            

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