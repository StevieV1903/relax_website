import React from "react";
import rkLogo from '../../../assets/relaxkidsLogo.png';


const SecondTab = () => {
  
    return (
    <div className="SecondTab">
      <div className="relax-kids-container">
            <img className="relax-kids-logo" src={rkLogo} alt="relax kids" />
            <h2>Relax Kids (ages 3+)</h2>
      </div>
        <div className="relax-kids-content">
            <h3>Join our magical, creative and fun classes especially designed to help your child become more resilient, calm and confident.</h3>
            <p>Relax Kids magical adventure classes are fun and creative helping children become more resilient and improving their emotions. By giving children a toolbox of relaxation and mindful exercises from a young age, they will grow up with good mental health. Classes usually run for a 6 week period around a certain theme. Our class themes include Superheroes, Pirates and Mermaids, Genius Genie, Extraordinary Earth, Mighty Monsters, Intergalactic Adventures, Fairytales, Detectives and Confidence Bootcamp. Each week your child will go on a brand new adventure learning valuable skills whilst developing their imagination.
            </p>
            <blockquote>
                I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
                <span>- Billy, age 7</span>
            </blockquote>
        </div>
    </div>
  );
};

export default SecondTab;