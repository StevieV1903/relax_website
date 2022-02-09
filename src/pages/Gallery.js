import React, { useState, useEffect } from 'react';
import '../App.css';
import './Gallery.css';
// import ImageSlider from '../components/ImageSlider.js'
import image1 from '../assets/contactHero.png';
import image2 from '../assets/aboutHero.png';
import image3 from '../assets/homeHero.png';
import image4 from '../assets/service2Hero.png';

const Gallery = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    const [ currentSlide, setCurrentSlide ] = useState(0);

    const imageSliderData = [
        {
            image: image1,
            caption: 'beach, sea and sky',
            alt: 'beach scene'
        },
        {
            image: image2,
            caption: 'beach, sea and birds',
            alt: 'beach with birds'
        },
        {
            image: image3,
            caption: 'bridge to nowhere',
            alt: 'bridge to nowhere'
        },
        {
            image: image4,
            caption: 'poppy field in the sunshine',
            alt: 'poppy field'
        }
    ]

    const totalImages = Object.keys(imageSliderData).length;
    console.log(totalImages)

    const nextSlide = () => {
        setCurrentSlide( currentSlide === totalImages -1 ? 0 : currentSlide + 1)
    }
    

    const previousSlide = () => {
        setCurrentSlide( currentSlide === 0 ? totalImages -1 : currentSlide -1)
    }
    // console.log(currentSlide)


    return(
        <div className="slider-gallery-container">
            <i className="fas fa-chevron-circle-left" 
            onClick={ previousSlide }
            ></i>
            <i className="fas fa-chevron-circle-right" 
            onClick={ nextSlide }
            ></i>
            <div className="slider">
            {imageSliderData.map(( slide, index )=> {
                // console.log(slide.image)
                
                return(
                    <div className={ index === currentSlide ? 'slide active' : 'slide' } key={index}>
                    {index === currentSlide && (
                    <>
                    <img className="slider-image" src={slide.image} alt={ slide.alt} key={index} />
                    <p className="slider-image-caption">{slide.caption}</p>
                    </>
                    )}
                    </div>
             
                )
                
            })
            
            }
            </div>
            
        </div>
    );
}

export default Gallery;