import React, { useState } from 'react';
import "./ReturnToTopBtn.css"


const ReturnToTopBtn = () => {

    const [isButtonActive, setIsButtonActive] = useState( false )

    const showReturnToTopBtn = () => {
        if( window.scrollY >= 80 ) {
            setIsButtonActive( true )
        } else {
            setIsButtonActive( false )
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    window.addEventListener( 'scroll', showReturnToTopBtn )
    window.addEventListener( 'click', scrollToTop )


    return(
        <>
             {isButtonActive && 
             <button class="top"><i class="fas fa-arrow-up my-float"></i></button>
            //  <button class="top" onclick={()=> scrollToTop()}>TOP</button>
            //  <a href="#" class="top" >
            //      <i class="fas fa-arrow-up my-float"></i>
            //  </a>
             }
        </>

    )

};

export default ReturnToTopBtn;

