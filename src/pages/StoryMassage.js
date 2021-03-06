import React, { useEffect } from 'react';
import '../App.css';
import './StoryMassage.css';
import bestPracticeLogo from '../assets/smBestPracticeAward.png'
import ReturnToTopBtn from '../components/ReturnToTopBtn';
import rkhr from '../assets/rkhr.png'

const StoryMassage = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return(
        <div className="service-two-container">
             <div class="service-two-hero-image">
                        <div class="service-two-hero-text">
                            <h1 className="service-two-hero-title">story massage</h1>
                        </div>
            </div>
            <div className="service-two-content-container">
                {/* <h2 className="service-two-title">This is the service2 page</h2> */}
                <p>
                <img className="best-practice-logo" src={bestPracticeLogo} alt="best practice award" /> We all love stories. When combined with the benefits of simple massage strokes, stories present wonderful opportunities for creative fun and interaction. Sharing positive touch offers great scope for imaginative activity and learning for children of all ages and abilities.
                </p> 
                <p>
                The Story Massage Programme combines the benefits of positive touch with the fun and creativity of words – whether as story, rhyme or song.  Ten simple massage strokes form the basis of the programme. These strokes have a name, such as The Circle or The Sprinkle, and an easy to recognise symbol making it fully accessible for all ages and abilities.
                </p> 
                <p>
                Story Massage offers a way of learning and communicating through play and positive interaction. You can adapt your own massage stories from favourite stories and nursery rhymes, or have fun creating your own stories to reflect particular interests, activities or events. 
                </p>     
                <p>
                There is also an educational element as the Story Massage Programme can be used to fit in with the national curriculum. Many children have learnt their numbers and letters, plus history, geography and nature through massage stories.
                </p>
                <p>
                In December 2021, I was awarded the Story Massage "Best Practice Award" for sharing the multiple benefits of the Story Massage Programme in a respectful and meaningful way in a variety of settings, showing the versatility, creativity, and fun of the programme for people of all ages and abilities.  
                </p>
                <p>I really saw first-hand the positive impact of the Story Massage Programme on concentration and focus levels when children returned to school after lockdown. Indeed, many were so engaged they practiced the techniques at home. I actively encourage this by creating materials to send home so families can benefit from positive touch together.</p>
                <p>Click <b><a href="https://www.storymassage.co.uk/best-practice-award-winners-december-2021/">here</a></b> to find out more information about this award.</p>

               

                    <blockquote>
                        I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
                    <span>- Oscar, age 9</span>
                    </blockquote>
                    
                    <img className="rkhr" src={rkhr} alt="break" />

                    <div className="video-container">
                        <iframe width="450" height="275" src="https://www.youtube.com/embed/e20onK9jypY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                
                <ReturnToTopBtn />
            </div>
            {/* <hr></hr> */}
        </div>
    )

};

export default StoryMassage;