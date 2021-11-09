import React from 'react';
import './PartnerGallery.css';

import elcLogo from '../assets/elc_logo.png';
import asLogo from '../assets/active-schools.jpeg';
import dpsLogo from '../assets/dps.png';

const PartnerGallery = () => {

    return(
        <div className="partner-gallery-container">
             <h2>Relax East Lothian Partnerships</h2>
             <p>Relax East Lothian has delivered well-being sessions, to a variety of age groups, in partnership with the following organisations around the county;</p>

            <div className="gallery-container">
                <div className="logo-container">
                    <img className="partner-logo" src={elcLogo} alt="east lothian council"></img>
                </div>
                <div className="logo-container">
                    <img className="partner-logo" src={dpsLogo} alt="dunbar primary school"></img>
                </div>
                <div className="logo-container">
                    <img className="partner-logo" src={elcLogo} alt="east lothian council"></img>
                </div>
                <div className="logo-container">
                    <img className="partner-logo" src={asLogo} alt="active schools"></img>
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
