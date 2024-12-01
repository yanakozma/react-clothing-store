import React, { useState } from 'react';
import "./DescriptionBox.css";

function DescriptionBox() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <section className="DescriptionBox">
            <div className="DescriptionBox-navigator">
                <div className="DescriptionBox-nav-box">Description</div>
                <div className="DescriptionBox-nav-box fade">Reviews (122)</div>
            </div>
            <div className='DescriptionBox-description-container'>
                <div className={`DescriptionBox-description ${isExpanded ? 'expanded' : 'collapsed'}`}>
                    <p>COMPOSITION</p>
                    <p>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products.
                        To assess compliance, we have developed a programme of audits and continuous improvement plans.</p>
                    <p>OUTER SHELL</p>
                    <p>
                        76% lyocell <br />
                        24% polyamide
                    </p>
                    <p>LINING</p>
                    <p>
                        52% viscose <br />
                        48% polyester
                    </p>
                    <p>CARE</p>
                    <p>Caring for your clothes is caring for the environment.
                        Lower temperature washes and delicate spin cycles are gentler on garments and help to protect the colour, shape and structure of the fabric.
                        Furthermore, they reduce the amount of energy used in care processes.</p>
                    <p>To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush.
                        If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment. </p>
                    <p>ORIGIN</p>
                    <p>We work with our suppliers, workers, unions and international organisations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.
                        Thanks to the collaboration with our suppliers, we work to know the facilities and processes used to manufacture our products in order to understand their traceability.</p>
                    <p>Made in Morocco</p>
                </div>
                <button className="DescriptionBox-toggle" onClick={toggleDescription}>
                    {isExpanded ? 'View Less' : 'View More'}
                </button>
            </div>
        </section>
    )
}

export default DescriptionBox;
