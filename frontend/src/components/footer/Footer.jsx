import React from 'react';
import "./Footer.css";
import footer_logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pinterest_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer-logo">
                <img src={footer_logo} alt="" />
                <p>VILNI</p>
            </div>
            <nav className="Footer-links">
                <ul>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <section className="Footer-social-icon">
                <div className="Footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="Footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="Footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </section>
            <div className="Footer-copyright">
                <hr />
                <p>Copyright @2024 - All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
