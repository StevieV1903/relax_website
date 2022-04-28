import React from "react";
import rkLogo from '../../../assets/relaxkidsLogo.png';
import relaxImg from '../../../assets/relax_kids.svg';
import '../Tabs.css';


const SecondTab = () => {
  
    return (
    <div className="SecondTab">
      <div className="relax-kids-container">
      <img className="relax-kids-logo" src={rkLogo} alt="relax kids logo" />
      <h2>Relax Kids (ages 3+)</h2>
      </div>
        <div className="relax-kids-content">
        <img className="relax-kids-img" src={relaxImg} alt="baby mindful image" />
          <h3>Join our magical, creative and fun classes especially designed to help your child become more resilient, calm and confident.</h3>
              <div className="relax-kids-top-content">
                  <div className="relax-kids-text">
                      <p>Every child has a right to feel calm and confident. Relax Kids was created with one goal in mind – to help children feel happier, more positive and believe in themselves.</p>
                      <p>Relax Kids magical adventure classes are fun and creative helping children become more resilient and improving their emotions. By giving children a toolbox of relaxation and mindful exercises from a young age, they will grow up with good mental health.</p> 
                      <p>Classes usually run for a 6 week period around a certain theme. Our class themes include Superheroes, Pirates and Mermaids, Genius Genie, Extraordinary Earth, Mighty Monsters, Intergalactic Adventures, Fairytales, Detectives and Confidence Bootcamp. </p>
                      <p>Each week your child will go on a brand new adventure learning valuable skills whilst developing their imagination.
                      </p>
                    </div>
                         
              </div>                                      
                <blockquote>
                    I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
                    <span>- Billy, age 7</span>
                </blockquote>
          
      </div>
    </div>
  );
};

export default SecondTab;


{/* //       <div className="relax-kids-content">
//       <h3><strong>Spend quality time with your baby in a supportive, calming atmosphere.</strong></h3>
//           <div className="relax-kids-top-content">
//               <div className="relax-kids-text">
//               <p>Baby Mindful is part of the Relax Kids Programme which was created with one goal in mind – to support the mental and emotional health and wellbeing of children.</p>
//               <p>It is a new approach to working with parents of young babies and has been created with a range of activities which will stimulate calm whist supporting your baby’s natural development. </p>
//               <p>We give parents the tools they need to help them feel more calm and in control and bond with their baby. Baby Mindful classes can help encourage your babies confidence and awareness along with cognitive, communicative, social, emotional and physical development. </p>
//               </div>
//               <div className="relax-kids-img-container">
//               <img className="relax-kids-img" src={bmImg} alt="baby mindful image" />
//               </div>
//           </div>
//               <blockquote>
//                   I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
//               <span>- Oscar, age 9</span>
//               </blockquote>
//       </div>
          
//   </div> */}
// );