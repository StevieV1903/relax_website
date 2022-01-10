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

    window.addEventListener( 'scroll', showReturnToTopBtn )


    return(
        <>
             {isButtonActive && 
             <a href="#" class="top">
                 <i class="fas fa-arrow-up my-float"></i>
             </a>
             }
        </>

    )

};

export default ReturnToTopBtn;

