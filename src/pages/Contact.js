import React, { useEffect } from 'react';
import '../App.css';
import './Contact.css';
import PartnerGallery from '../components/PartnerGallery.js';

const Contact = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return(
        <>
        <div className="contact-page-container">
            <div class="contact-hero-image">
                        <div class="contact-hero-text">
                            <p className="contact-hero-title">REACH OUT</p>
                        </div>
            </div>
                <div className="sapphire-content">
                    <div className="contact-intro">
                    {/* <h2 className="contact-title">Contact</h2> */}
                    <p>If you would like to have a chat about any of the services that we deliver, potential collaborations or partnerships, or just to have a chat about anything from available resources to management techniques or coping strategies, please feel free to contact us using the details below or through any of our social media channels which are accessesible through the links at the bottom of this website. We look forward to hearing from you. </p>
                    </div>
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
                                {/* <p>emmav1975@relaxeastlothian.org</p> */}
                                <a className="email-link" href="mailto:emmav1975@relaxeastlothian.org?subject=Relax Kids Enquiry..." target="_blank">Click to send an e-mail</a>
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