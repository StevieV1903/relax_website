import React, { useEffect } from 'react';
import '../App.css';
import './EFTTapping.css';
import PurpleHeart from '../assets/purple-heart.png';

const EFTTapping = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return(
        <div className="service-three-container">
             <div class="service-three-hero-image">
                        <div class="service-three-hero-text">
                            <h1 className="service-three-hero-title">eft (tapping)</h1>
                        </div>
            </div>
            <div className="service-three-content-container">
                <img className="purple-heart-icon" src={PurpleHeart} alt="purple heart" />
                {/* <h2 className="service-three-title">This is the service3 page</h2> */}
                <p className="opening-text-service-three"> Emotional Freedom Technique (EFT) or 'tapping' is often referred to as psychological acupressure. As with many other therapies, EFT works on the premise that the body contains energy channels. When these energy channels become blocked or unbalanced, it is believed to lead to emotional and physical illness. Using tapping techniques, Emotional Freedom Technique looks to correct these imbalances.
                </p>       
                <p>
                As well as affecting our health, emotional blocks can lead to limiting beliefs and behaviours. This may result in phobias, anxiety, depression or even addictions. EFT acknowledges this and combines energy medicine with psychological interventions for a truly holistic approach.</p>

                <p>In a similar way to acupuncture, EFT looks to release blocked energy by stimulating the meridian points. Rather than using needles, however, this therapy uses tapping techniques. Tapping (using the fingertips) on certain points on the body, combined with voicing positive affirmations is thought to neutralise the emotional block in energy.
                </p>
                <blockquote>
                    I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
                <span>- Oscar, age 9</span>
                </blockquote>

                <p>EFT aims to tackle both negative emotions and unbalanced or blocked energy. This is done by tapping meridian points on the body while focusing on the issue and repeating positive affirmations.</p>

                <p>This combination of stimulating meridian points whilst thinking about root cause enables the energy system to 'straighten out'. This is believed to eradicate the 'short circuit' to the body's learnt response or negative emotion.</p>
                
            </div>
        </div>
    )

};

export default EFTTapping;

// Emotional Freedom Technique (EFT) or 'tapping' is often referred to as psychological acupressure. Here we explore how it can help release emotional blockages.