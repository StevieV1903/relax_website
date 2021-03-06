import React, { useEffect } from 'react';
import '../App.css';
import relax1 from '../assets/relax1.jpg';
import ReturnToTopBtn from '../components/ReturnToTopBtn';
import './About.css';

const About = () => {

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });



    return(
        <div className="about-container">
            <div class="about-hero-image">
                        <div class="about-hero-text">
                            <h1 className="about-hero-title">about</h1>
                        </div>
            </div>
            <div className="about-content-container">
                {/* <h2>Relax East Lothian</h2> */}
                {/* <hr className="divider"></hr> */}
                
                <p>Relax East Lothian is Lectus habitant pellentesque ultrices arcu vehicula arcu vestibulum. Porttitor primis duis dignissim pharetra potenti cras leo porttitor fames phasellus. Dictum ultrices vel nam ut nascetur condimentum habitant magna adipiscing cubilia laoreet eros. </p>
                    
                <figure className="fig">
                    <img src={ relax1 } className="fig__media" alt="children at relax kids" />
                    <figcaption className="image-caption-text">Children enjoying a Relax Kids session in Dunbar, East Lothian.</figcaption>
                </figure>

                <p>Consequat sit purus nisi penatibus massa elementum lorem, praesent cubilia interdum. Egestas purus feugiat montes sollicitudin lacinia. Lectus est at pellentesque eros lacinia interdum curabitur laoreet semper. Est, adipiscing viverra volutpat magnis fusce laoreet dictumst. Eleifend, senectus himenaeos id. Praesent lorem mauris nisi in scelerisque elementum gravida metus. Duis interdum bibendum fusce at euismod tempor est morbi natoque donec.
                </p>
                
                <p>
                Senectus nunc, cras amet torquent. Vulputate inceptos ad nullam? Aenean vestibulum nibh justo tellus. Venenatis dapibus urna commodo eleifend quisque quam semper senectus. Magna primis hendrerit id, vel mattis ut natoque ac aenean. Lacinia in, et tristique maecenas hendrerit aptent eleifend. In sociosqu mus facilisi, ante auctor nisl interdum diam praesent sodales non. Malesuada mauris nascetur congue libero est vehicula.
                </p>
                <p>
                Dignissim pulvinar et scelerisque fermentum. Feugiat eget platea est varius suspendisse ridiculus inceptos ullamcorper velit curabitur ultrices laoreet! A rutrum class sem mattis ante inceptos. Vitae sodales, lorem aptent? Eget tortor non augue semper himenaeos suspendisse taciti aptent phasellus. Non curae; purus consectetur montes amet porttitor ut elit. At cursus, suspendisse non. Dapibus nulla ad hendrerit. Himenaeos enim suscipit fringilla luctus? Pulvinar risus mollis porttitor tincidunt nascetur vitae turpis.
                </p>
                <h3>Relax East Lothain Mission Statement</h3>
                <p>
                We believe that relaxation and a positive outlook are the keys to good mental health, self-esteem, emotional intelligence and emotional resilience. We want to provide children, young people and their families with appropriate tools and techniques to help them to feel happier, more positive and empowered with skills for life!  </p>
        </div>
        {/* <blockquote>
            I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
            <span>- Oscar, 9</span>
        </blockquote>
        <br></br> */}
        {/* <ReturnToTopBtn /> */}
        <ReturnToTopBtn />
        </div>
        
    )

};

export default About;