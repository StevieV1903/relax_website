import React from "react";
import bmLogo from '../../../assets/bmLogo.png';
import bmImg from '../../../assets/baby_mindful2.svg'
import '../Tabs.css';


const FirstTab = () => {
  
    return (
        <div className="FirstTab">
        <div className="relax-kids-container">
            <img className="relax-kids-logo" src={bmLogo} alt="baby mindful logo" />
            <h2>Baby Mindful (0-18 months)</h2>
        </div>
        <div className="relax-kids-content">
        <img className="relax-kids-img" src={bmImg} alt="baby mindful image" />
        <h3><strong>Spend quality time with your baby in a supportive, calming atmosphere.</strong></h3>
            <div className="relax-kids-top-content">
                <div className="relax-kids-text">
                <p>Baby Mindful is part of the Relax Kids Programme which was created with one goal in mind – to support the mental and emotional health and wellbeing of children.</p>
                <p>It is a new approach to working with parents of young babies and has been created with a range of activities which will stimulate calm whist supporting your baby’s natural development. </p>
                <p>We give parents the tools they need to help them feel more calm and in control and bond with their baby.</p> 
                <p>Baby Mindful classes can help encourage your babies confidence and awareness along with cognitive, communicative, social, emotional and physical development. </p>
                </div>
            </div>
                <blockquote>
                    I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
                <span>- Oscar, age 9</span>
                </blockquote>
        </div>
            
    </div>

    // <div className="FirstTab">
    //     <div className="relax-kids-container">
    //         <img className="relax-kids-logo" src={bmLogo} alt="baby mindful logo" />
    //         <h2>Baby Mindful (0-18 months)</h2>
    //     </div>
    //     <div className="relax-kids-content">
    //     <h3><strong>Spend quality time with your baby in a supportive, calming atmosphere.</strong></h3>
    //         <div className="relax-kids-top-content">
    //             <div className="relax-kids-text">
    //             <p>Baby Mindful is part of the Relax Kids Programme which was created with one goal in mind – to support the mental and emotional health and wellbeing of children.</p>
    //             <p>It is a new approach to working with parents of young babies and has been created with a range of activities which will stimulate calm whist supporting your baby’s natural development. </p>
    //             <p>We give parents the tools they need to help them feel more calm and in control and bond with their baby. Baby Mindful classes can help encourage your babies confidence and awareness along with cognitive, communicative, social, emotional and physical development. </p>
    //             </div>
    //             <div className="relax-kids-img-container">
    //             <img className="relax-kids-img" src={bmImg} alt="baby mindful image" />
    //             </div>
    //         </div>
    //             <blockquote>
    //                 I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
    //             <span>- Oscar, age 9</span>
    //             </blockquote>
    //     </div>
            
    // </div>
  );
};

export default FirstTab;