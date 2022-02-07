import React from 'react';
import '../App.css';
import './Gallery.css';
// import ImageSlider from '../components/ImageSlider.js'
import image1 from '../assets/contactHero.png';
import image2 from '../assets/aboutHero.png';
import image3 from '../assets/homeHero.png';
import image4 from '../assets/service2Hero.png';

const Gallery = () => {

    const ImageSliderData = [
        {
            image: image1,
            caption: 'image caption',
            alt: 'description'
        },
        {
            image: image2,
            caption: 'image caption',
            alt: 'description'
        },
        {
            image: image3,
            caption: 'image caption',
            alt: 'description'
        },
        {
            image: image4,
            caption: 'image caption',
            alt: 'description'
        }
    ]


    return(
        <div className="slider-gallery-container">

            <h1>IMAGES</h1>
            {ImageSliderData.map(( slide, index )=> {
                console.log(slide.image)
                
                return(
                    
                    <img className="slider-image" src={slide.image} />
                    // <img className="slider-image" src={require('../assets/' + slide.image + '.png')} alt={ slide.alt} key={index} />  
             
                )
                
            })
            
            }
            ;
        </div>
    );
}

export default Gallery;