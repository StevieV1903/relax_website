import React from "react";
import cuLogo from '../../../assets/cuLogo.png';


const ThirdTab = () => {
  
    return (
    <div className="ThirdTab">
        <div className="relax-kids-container" >
                        <img className="relax-kids-logo" src={cuLogo} alt="relax kids" />
                        <h2 className="charge-up-title">ChargeUP [Suitable for ages 11+]</h2>
                        {/* <div className="expand-plus">{chargeUpServiceIsActive ? '-' : '+'}</div> */}
                        {/* <div className="expand-plus">+</div> */}
        </div>
            {/* <h3>Suitable for ages 11+</h3> */}
            {/* {chargeUpServiceIsActive && <div className="relax-kids-content"> */}
            <div className="relax-kids-content">
                <h3>Covering a range of topics from self-awareness, sleep hygiene, to consent, boundaries and stress management.</h3>
                <p>Sessions follow our tried and tested 7 step system and include interesting activities, exercises and games to encourage learning, skill acquisition and reinforcement of concepts. ChargeUp sessions give young people mindful tools to help self regulate. Sessions can help reduce stress and anxiety, improve sleep, improve mental health and wellbeing, increase self awareness and empathy, improve learning and performance, increase attention, focus and concentration, improve self-esteem, increase resilience and assertiveness.
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