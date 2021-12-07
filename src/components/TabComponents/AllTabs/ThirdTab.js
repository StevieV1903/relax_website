import React from "react";
import cuLogo from '../../../assets/cuLogo.png';
import '../Tabs.css';


const ThirdTab = () => {
  
    return (
    <div className="ThirdTab">
        <div className="relax-kids-container" >
            <img className="relax-kids-logo" src={cuLogo} alt="relax kids" />
            <h2>ChargeUP (ages 11+)</h2>
        </div>
            <div className="relax-kids-content">
                <h3>Covering a range of topics from self-awareness, sleep hygiene, to consent, boundaries and stress management.</h3>
                <p>Every young person has a right to feel calm, confident and empowered with skills for life! We offer teens and young people a range of tools to help support their mental and emotional wellbeing as they face life’s tough challenges. </p>
                <p>Relaxation and a positive outlook are the keys to good mental health, self-esteem, emotional intelligence and emotional resilience.</p>
                <p>Sessions follow our tried and tested 7-step system and include interesting activities, exercises and games to encourage learning, skill acquisition and reinforcement of concepts. </p>
                <p>ChargeUp sessions can help reduce stress and anxiety, improve sleep, improve mental health and wellbeing, increase self awareness and empathy, improve learning and performance, increase attention, focus and concentration, improve self-esteem, increase resilience and assertiveness.
                </p>
                <blockquote>
                Egestas purus feugiat montes sollicitudin lacinia. Lectus est at pellentesque eros lacinia interdum curabitur laoreet semper....
                    <span>- Clara, age 12</span>
                </blockquote>
            </div>
    </div>
  );
};
export default ThirdTab;