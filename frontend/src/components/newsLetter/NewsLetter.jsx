import React from 'react';
import "./NewsLetter.css";

function NewsLetter() {
    return (
        <section className="NewsLetter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your email address" />
                <button>Subscribe</button>
            </div>
        </section>
    )
}

export default NewsLetter;
