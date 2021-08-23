import React from 'react';
import '../App.css';
import PartnerGallery from '../components/PartnerGallery.js';

const Contact = () => {

    return(
        <>
        <div className="contact">
            <h1 className="contact-title">This is the contact page</h1>
            <div>
            <h1>Esteemed Partners</h1>
            <PartnerGallery />
            </div>
        </div>
        </>
    )

};

export default Contact;