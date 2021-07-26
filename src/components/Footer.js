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

{/* <footer class="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
  <a href="#"><i class="fa fa-facebook-official"></i></a>
  <a href="#"><i class="fa fa-pinterest-p"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-flickr"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <p class="w3-medium">
  Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
  </p>
</footer> */}

        </div>
    )

};

export default Footer;