import React from 'react';
import '../../App.css';
import relax1 from '../../assets/relax1.jpg';

const About = () => {

    return(
        <div className="about">
        {/* <h1 className="about-title">Relax East Lothian</h1> */}
        <h2>ABOUT Relax East Lothian</h2>
        <hr class="divider"></hr>
        <p>Lectus habitant pellentesque ultrices arcu vehicula arcu vestibulum. Porttitor primis duis dignissim pharetra potenti cras leo porttitor fames phasellus. Dictum ultrices vel nam ut nascetur condimentum habitant magna adipiscing cubilia laoreet eros. </p>
            
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
        
        <p>
        Dui cursus fringilla sem elit montes, mattis consectetur augue penatibus cubilia netus class. Amet vivamus non, elit tincidunt felis amet est. Facilisi hac nisl vel blandit id enim! Nam accumsan nascetur tristique pretium? Facilisi vel eget eget praesent condimentum venenatis! A nunc habitasse, parturient orci. Leo inceptos, duis urna metus inceptos suscipit vel luctus amet lacinia. Pellentesque vel condimentum pulvinar morbi.
        </p>
        <blockquote>
            I had a really fun and relaxing time. Emma is a wonderful teacher who really looks after us and I want to do this every week to help me when I get annoyed.
            <span>- Oscar, 9</span>
        </blockquote>
        <br></br>
        </div>
    )

};

export default About;