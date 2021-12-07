import React from 'react';

import Tabs from '../components/TabComponents/Tabs.js';
import '../App.css';
import './RelaxKidsServices.css';
import Rainbow from '../assets/rainbow_img.png'

const RelaxKidsServices = () => {

    return(
<div className="service1-container">
        <div class="relax-kids-hero-image">
                        <div class="relax-kids-hero-text">
                            <img className="rainbow-icon" src={Rainbow} alt="rainbow" />
                            <h1 className="relax-kids-hero-title">relax kids services</h1>
                        </div>
                        <div className="white-diagonal"></div>
        </div>
        {/* <div className="white-content"> */}
        {/* <h1>Relax Kids Services</h1> */}
            <div className="relax-kids-content">
                <p>The Relax Kids' programmes supports children’s mental and emotional health and wellbeing with a range of tools and techniques to help calm their body and mind, whilst building confidence and self-esteem. We use a pioneering,  holistic approach and fun, creative techniques to help your children of all ages, feel happier and healthier.</p>
                <p>We are here to support parents, teachers and all those working with children with our unique range of meditation, mindful and relaxation products, resources, toolkits, classes and training which have improved over the last 20 years.</p>
                <p>I am a fully trained and qualified Relax Kids coach, experienced at delivering the following sessions, either in a group setting or on a 1-2-1 basis. Please get in touch if you would like more information or to have a chat about the benefits of attending any of the sessions.</p>
            </div>
        {/* </div> */}
            <Tabs />
        
</div>
    )

};

export default RelaxKidsServices;



