import React from "react";
import bmLogo from '../../../assets/bmLogo.png';
import '../Tabs.css';


const FirstTab = () => {
  
    return (
    <div className="FirstTab">
        <div className="relax-kids-container">
            <img className="relax-kids-logo" src={bmLogo} alt="relax kids" />
            <h2>Baby Mindful (0-18 months)</h2>
        </div>
        <div className="relax-kids-content">
                <h3>Spend quality time with your baby in a supportive, calming atmosphere.</h3>
                <p>Baby Mindful is a new approach to working with parents of young babies and has been created with a range of activities which will stimulate calm whist supporting your baby’s natural development. Baby Mindful classes can help encourage your babies confidence and awareness along with cognitive, communicative, social, emotional and physical development. </p>
                
                <blockquote>
                    I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
                <span>- Oscar, age 9</span>
                </blockquote>
        </div>
            
    </div>
  );
};

export default FirstTab;