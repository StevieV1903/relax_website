import React, { useEffect, useState } from 'react';
import "./ReturnToTopBtn.css"


const ReturnToTopBtn = () => {

    const [ isButtonVisible, setIsButtonVisible ] = useState( false )

    useEffect(()=> {
        window.addEventListener('scroll', showReturnToTopButton ) //adds event listener to user scrolling

        return () => {
            window.removeEventListener( 'scroll', showReturnToTopButton ) // return function removes event listener when component unmounts
        }

    }, [])

    const showReturnToTopButton = () => {
        if( window.pageYOffset >= 100 ) { //when user scrolls 200px changes state to true to IsButtonVisible
            setIsButtonVisible( true )
        } else {
            setIsButtonVisible( false )
        }
    };

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        })
    }


    return(
        <>
            { isButtonVisible && <button type="button" className="top" onClick={scrollToTop} ><i class="fas fa-arrow-up my-float"></i></button>}   
        </>

    )

};

export default ReturnToTopBtn;

