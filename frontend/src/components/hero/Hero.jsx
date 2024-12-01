import React from 'react';
import "./Hero.css";
import arrow_icon from "../assets/arrow.png";

function Hero() {
    return (
        <section className="Hero">
            <div className="Hero-text">
                <h1>NEW ARRIVALS ONLY</h1>
                <div>
                    <p>New</p>
                    <p>Collection</p>
                    <p>For everyone</p>
                </div>
                <div className="Hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>

        </section>
    )
}

export default Hero;
