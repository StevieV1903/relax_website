import React, { useEffect } from 'react';
import '../App.css';
import './ServiceFour.css';

const ServiceFour = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    return(
        <div className="service-four-container">
                <div class="service-four-hero-image">
                    <div class="service-four-hero-text">
                        <h1 className="service-four-hero-title">service 4 title</h1>
                    </div>
                    
                    <div class="custom-shape-divider-bottom-1651149449">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                         <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                     </svg>
                    </div>
                    {/* <div className="white-diagonal"></div> */}
                </div>
                    <div className="service-four-content-container">
                        <div className="service-four-text">
                        {/* <h2 className="service-four-title">This is the service4 page</h2> */}
                        <p>Consequat sit purus nisi penatibus massa elementum lorem, praesent cubilia interdum. Egestas purus feugiat montes sollicitudin lacinia. Lectus est at pellentesque eros lacinia interdum curabitur laoreet semper. Est, adipiscing viverra volutpat magnis fusce laoreet dictumst. Eleifend, senectus himenaeos id. Praesent lorem mauris nisi in scelerisque elementum gravida metus. Duis interdum bibendum fusce at euismod tempor est morbi natoque donec.
                        </p>       
                        <p>
                        Senectus nunc, cras amet torquent. Vulputate inceptos ad nullam? Aenean vestibulum nibh justo tellus. Venenatis dapibus urna commodo eleifend quisque quam semper senectus. Magna primis hendrerit id, vel mattis ut natoque ac aenean. Lacinia in, et tristique maecenas hendrerit aptent eleifend. In sociosqu mus facilisi, ante auctor nisl interdum diam praesent sodales non. Malesuada mauris nascetur congue libero est vehicula.
                        </p>
                        </div>
                        <blockquote>
                            I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
                        <span>- Oscar, age 9</span>
                        </blockquote>
                    </div>
        </div>
    )

};

export default ServiceFour;