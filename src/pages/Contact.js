import React from 'react';
import '../App.css';
import './Contact.css';
import PartnerGallery from '../components/PartnerGallery.js';

const Contact = () => {

    return(
        <>
        <div className="contact-page-container">
            <div className="sapphire-content">
                <h2 className="contact-title">Contact Us...</h2>
                <p>If you would like to have a chat about any of the services that we deliver, or have a chat about anything from available resources to management techniques or coping strategies, please feel free to contact us using the details below or through any of our social media channels which are accessesible through the links at the bottom of this website. We look forward to hearing from you. </p>
                    <div className="contact-info-container">
                        <div className="contact-item">
                        <i className='fas fa-phone'/>
                        </div>
                        <div className="contact-item">
                            <p>(07730) 507 902</p>
                        </div>
                        <div className="contact-item">
                            <i className='fas fa-envelope'/>
                        </div>
                        <div className="contact-item">
                            <p>emmav1975@relaxeastlothian.org</p>
                        </div>
                    </div>

        
            </div>
            
            <div className="contact-diagonal"></div>

            <div> 
            <PartnerGallery />
            </div>
        </div>
        </>
    )

};

export default Contact;