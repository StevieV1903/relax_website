import React from 'react';
import '../App.css';
// import {ImageSliderData} from './ImageSliderData.js';
import image1 from '../assets/aboutHero.png';


const ImageSlider = () => {

    const ImageSliderData = [
        // {
        //     image: 'https://unsplash.com/photos/oAU0c0SsO8A',
        //     caption: 'image caption',
        //     alt: 'description'
        // },
        {
            image: {image1},
            caption: 'image caption',
            alt: 'description'
        },
        {
            image: "../assets/contactHero.png",
            caption: 'image caption',
            alt: 'description'
        },
        {
            image: "../assets/contactHero.png",
            caption: 'image caption',
            alt: 'description'
        },
        {
            image: "../assets/contactHero.png",
            caption: 'image caption',
            alt: 'description'
        }
    ]


    return(
        <>
            <h1>IMAGES</h1>
            {ImageSliderData.map(( slide, index )=> {
                return(
                    <>
                    <img className="slider-image" src={slide.image} />
                    </>
                )

            })}

        </>
    )

};

export default ImageSlider;

{/* <div className="image-slider-container">
        
        { ImageSliderData.map(( slide, index ) => {
            return(

            <>
            <img className="slider-image" src={ slide.image } alt={ slide.alt } />
            <p>{ slide.caption }</p>
            </>
            )
        }) }


        </div> */}