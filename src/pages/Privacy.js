import React, { useEffect, useState } from 'react';
import '../App.css';
import Accordion from '../components/Accordion';

const Privacy = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    const privacyData = [
        {
            title: "How do we collect information from you?",
            content: `We obtain information from you through your service booking directly or through a partner such as Active Kids. We will receive this information verbally if you call us to make a booking or by email if you request information about any of our services.`
        },
        {
            title: "What type of information is collected from you?",
            content: `The personal information we could collect includes; your name, address, email address and contact number - this may be over the phone or through our website. We do not store credit card details, any payments are taken through PayPal’s secure online payment system or bank BACs system. Our website includes links for you to access our social networking websites. As as result, we receive information about you when you choose to post or, otherwise share information about yourself. You can control this by adjusting your privacy settings on your social media account. When using these sites you are bound by their privacy agreements. `
        },
        {
            title: "What do we do with the information that is collected from you?",
            content: `We require this information to understand your needs and provide you with a better service. Below is a list of how we might use your information: For internal record keeping; We may use your information to improve our products and services; Periodically, we may send you promotional emails about our new products, services or training courses; only if you have consented for us to do so.`
        },
        {
            title: "Who has access to your information?",
            content: `Only Relax East Lothian will have access to your information. We will, under no circumstance share, sell or rent your information to third parties for any purposes.`
        },
        {
            title: "How can you access and update your information?",
            content: `Ensuring your information is up to date is very important. If any of the information you give us changes you can contact us to let us know. Under the Data Protection Act 1998 you have the right to access any information we hold about you. If you wish to do so please get in touch with us.`
        },
        {
            title: "Data Retention",
            content: `Relax East Lothian will retain your personal data for the period you are using our services. Where we no longer need to process your personal data for the purposes set out in this privacy policy, we will delete your personal data from our system. Where permissible, we will also delete your personal data upon you request. For questions about out data retention practice please contact us.`
        },
    ]

    const { title, content } = privacyData;

    return(
        <div className="privacy-container">
            <div className="nav-block">

            </div>
                    <div className="privacy-content-container">
                        <h2 className="privacy-title">Privacy Policy</h2>
                        <p>At Relax East Lothian we are committed to protecting your privacy. Our privacy policy explains why we collect your personal information and how we use it. We may change this policy so please check this page occasionally to ensure you’re happy with any changes. In using our website and services you are agreeing to be bound by this policy. Contact us directly should you have any questions or concerns.
                        </p>  
                        <div>
                            <div className="accordion">
                                {privacyData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                                ))}
                            </div>
                        </div>
                    </div>
        </div>
    )

};

export default Privacy;