import React from 'react';
import '../App.css';
import PartnerGallery from '../components/PartnerGallery.js';

const Contact = () => {

    return(
        <>
        <div className="contact-page-container">
            <div className="sapphire-content">
            <h1 className="contact-title">This is the contact page</h1>
            </div>
            <div className="contact-diagonal">
            </div>
            <div> 
            <PartnerGallery />
            </div>
        </div>
        </>
    )

};

export default Contact;