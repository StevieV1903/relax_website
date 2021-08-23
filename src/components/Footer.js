import React from 'react';
import './Footer.css';

const Footer = () => {

    return(
        <div className="footer-container">

            <ul className="footer-menu">
                <li className="footer-item">
                <a href="#" className="footer-link"><i className="fab fa-facebook-square"></i></a>        
                </li>
                <li className="footer-item">
                <a href="#"><i className="fab fa-twitter-square"></i></a>        
                </li>
                <li className="footer-item">
                <a href="#"><i className="fab fa-linkedin"></i></a>        
                </li>
                <li className="footer-item">
                <a href="#"><i className="fab fa-instagram-square"></i></a>        
                </li>
            </ul>

        </div>
    )

};

export default Footer;