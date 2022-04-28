import React, { useEffect, useState } from 'react';
import '../App.css';
import Accordion from '../components/Accordion';

const Terms = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(()=> {
        window.scrollTo( 0, 0 )
    });

    const TermsData = [
        {
            title: "Classes & Sessions",
            content: `Bookings are dealt with Relax East Lothian and in some circumstances by third party organisations. For any questions, changes for your booking or cancellations, you may need to be contact us directly. Contact details can be found on our website. Third party booking system providers will also have their own terms and conditions, so please be aware of these.`
        },
        {
            title: "Products",
            content: `If you purchase or utilise any products related to the services we offer, these will be provided by a third party provider. All of these products, including books, CDs, MP3s and print outs are copyrighted and cannot be reproduced, duplicated or copied in anyway.`
        },
        {
            title: "Complaints Policy",
            content: `Relax East Lothian is committed to providing outstanding service to all its customers. If you are in anyway dissatisfied please contact us as soon as possible through the contact details on this website.`
        },
        {
            title: "Links To Other Sites",
            content: `Our Site may contain links to third-party sites that are not owned or controlled by us. Relax East Lothian has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We strongly advise you to read the terms and conditions and privacy policy of any third-party site that you visit.`
        },
        {
            title: "Changes To This Agreement",
            content: `We reserve the right, to modify or replace these Terms by posting the updated terms on the website. Your continued use of our website after any such changes constitutes your acceptance of the new Terms of Service. Please review this Agreement occasionally for changes.`
        },
    ]

    const { title, content } = TermsData;

    return(
        <div className="privacy-container">
            <div className="nav-block">

            </div>
                    <div className="privacy-content-container">
                        <h2 className="privacy-title">Terms of Service</h2>
                        <p>In using this website you are deemed to have read and agreed to the following terms and conditions:
                        </p>  
                        <div>
                            <div className="accordion">
                                {TermsData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                                ))}
                            </div>
                        </div>
                        <h3>Contact Us</h3>
                        <p>If you have any questions or queries about our terms of service, please <a href="/contact" className="internal-contact-link">contact us</a> at any time.</p>
                        <p>Relax East Lothian is registered in Scotland, Number 05209200, registered office Relax East Lothian, 19 Steadings Crescent, Dunbar, East Lothian, EH42 1GR, UK.</p>
            </div>
        </div>
    )
};

export default Terms;






