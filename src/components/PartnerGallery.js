import React from 'react';
import './PartnerGallery.css';

import elcLogo from '../assets/elc_logo.png';
import asLogo from '../assets/active-schools.jpeg';

const PartnerGallery = () => {

    return(
        <div className="partner-gallery-container">

            <div className="gallery-container">
                <div className="logo-container">
                    <img src={elcLogo} alt="east lothian council"></img>
                </div>
                <div className="logo-container">
                    <img src={asLogo} alt="east lothian council"></img>
                </div>
                <div className="logo-container">
                    <img src={elcLogo} alt="east lothian council"></img>
                </div>
                <div className="logo-container">
                    <img src={asLogo} alt="east lothian council"></img>
                </div>


            </div>


            {/* <div class="box">
                <div class="imgwrap">
                    <img />
                </div>
            </div> */}

{/* <div class="row">
  <div class="column">
    <img src="img_snow.jpg" alt="Snow" style="width:100%">
  </div>
  <div class="column">
    <img src="img_forest.jpg" alt="Forest" style="width:100%">
  </div>
  <div class="column">
    <img src="img_mountains.jpg" alt="Mountains" style="width:100%">
  </div>
</div> */}

            

        </div>
    )

};

export default PartnerGallery;
