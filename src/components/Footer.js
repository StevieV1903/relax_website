import React from 'react';
import './Footer.css';

const Footer = () => {

    return(
        <div className="main-footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* column1 */}
                    <div className="footer-col">
                        <h4>TITLE</h4>
                        <ul className="footer-list">
                            <li>footer lister</li>
                            <li>footer lister</li>
                            <li>footer lister</li>

                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="footer-col">
                        <h4>TITLE</h4>
                        <ul className="footer-list">
                            <li>footer lister</li>
                            <li>footer lister</li>
                            <li>footer lister</li>

                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="footer-col">
                        <h4>TITLE</h4>
                        <ul className="footer-list">
                            <li>footer lister</li>
                            <li>footer lister</li>
                            <li>footer lister</li>

                        </ul>

                    </div>
                </div>
                <hr />
                <div className="footer-row-bottom">
                    <p>&copy;{new Date().getFullYear()} Relax East Lothian | All Rights Reserved | Terms of Service | Privacy Statement</p>

                </div>
            </div>
        </div>
    )

};

export default Footer;