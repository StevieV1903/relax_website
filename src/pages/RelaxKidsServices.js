import React from 'react';
import '../App.css';
import './Service1.css';
import rkLogo from '../assets/relaxkidsLogo.png';
import bmLogo from '../assets/bmLogo.png';
import cuLogo from '../assets/cuLogo.png';

const RelaxKidsServices = () => {

    return(
<div className="service1-container">
        <div className="white-content">
        <h1>Relax Kids Services</h1>
            <p>I am a fully trained and qualified Relax Kids coach, experienced at delivering the following sessions, either in a group setting or on a 1-2-1 basis. Please get in touch if you would like more information or to have a chat about the benefits of attending any of the sessions.</p>
        </div>
        <div className="green-diagonal">
            </div>

        <div className="green-content">
            <div className="relax-kids-container">
            <img className="relax-kids-logo" src={rkLogo} alt="relax kids" />
            <h2>Relax Kids</h2>
            {/* <img className="relax-kids-logo" src={rkLogo} alt="relax kids" /> */}
            </div>
            <h3>Suitable for ages 3+</h3>
            <h3>Join our magical, creative and fun classes especially designed to help your child become more resilient, calm and confident.</h3>
            <p>Relax Kids magical adventure classes are fun and creative helping children become more resilient and improving their emotions. By giving children a toolbox of relaxation and mindful exercises from a young age, they will grow up with good mental health. Classes usually run for a 6 week period around a certain theme. Our class themes include Superheroes, Pirates and Mermaids, Genius Genie, Extraordinary Earth, Mighty Monsters, Intergalactic Adventures, Fairytales, Detectives and Confidence Bootcamp. Each week your child will go on a brand new adventure learning valuable skills whilst developing their imagination.
        </p>
        <blockquote>
            I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
            <span>- Billy, age 7</span>
        </blockquote>
        <br></br>
        </div>
 
        <div className="sapphire-content">
            <div className="sapphire-diagonal">
            </div>
            <div className="sapphire-text">
            <div className="relax-kids-container">
            <img className="relax-kids-logo" src={bmLogo} alt="relax kids" />
            <h2>Baby Mindful</h2>
            </div>
            <h3>Suitable for ages 0-18 months</h3>
            <h3>Spend quality time with your baby in a supportive, calming atmosphere.</h3>
            
            
            <p>Baby Mindful is a new approach to working with parents of young babies and has been created with a range of activities which will stimulate calm whist supporting your baby’s natural development. Baby Mindful classes can help encourage your babies confidence and awareness along with cognitive, communicative, social, emotional and physical development. </p>
            <blockquote>
            I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
            <span>- Oscar, age 9</span>
        </blockquote>
        <br></br>
            </div>
            <div className="white-diagonal">
            </div>
        </div>

        <div className="white-content">
            <div className="relax-kids-container">
                <img className="relax-kids-logo" src={cuLogo} alt="relax kids" />
                <h2>ChargeUP</h2>
            </div>
            <h3>Suitable for ages 11+</h3>
            <h3>Covering a range of topics from self-awareness, sleep hygiene, to consent, boundaries and stress management.</h3>
            <p>Sessions follow our tried and tested 7 step system and include interesting activities, exercises and games to encourage learning, skill acquisition and reinforcement of concepts. ChargeUp sessions give young people mindful tools to help self regulate. Sessions can help reduce stress and anxiety, improve sleep, improve mental health and wellbeing, increase self awareness and empathy, improve learning and performance, increase attention, focus and concentration, improve self-esteem, increase resilience and assertiveness.
            </p>
            <blockquote>
            Egestas purus feugiat montes sollicitudin lacinia. Lectus est at pellentesque eros lacinia interdum curabitur laoreet semper....
                <span>- Clara, age 12</span>
            </blockquote>
        </div>
        
</div>
    )

};

export default RelaxKidsServices;