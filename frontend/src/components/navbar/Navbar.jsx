import React, { useState, useEffect, useContext, useRef } from 'react';
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from "../assets/nav_dropdown.png";


function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef();
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const { getTotalCartItems, all_product } = useContext(ShopContext);

    const getProductCategory = () => {
        if (productId) {
            const product = all_product.find(product => product.id === Number(productId));
            if (product) {
                return product.category;
            }
        }
        return null;
    };

    useEffect(() => {
        if (location.pathname === "/men") {
            setMenu("men");
        } else if (location.pathname === "/women") {
            setMenu("women");
        } else if (location.pathname === "/kids") {
            setMenu("kids");
        } else if (location.pathname === "/login") {
            setMenu("");
        } else if (location.pathname === "/cart") {
            setMenu("");
        } else if (productId) {
            const category = getProductCategory();
            if (category) {
                setMenu(category);
            } else {
                setMenu("shop");
            }
        } else {
            setMenu("shop");
        }
    }, [location.pathname, productId]);

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("Navbar-nav-visible");
        e.target.classList.toggle("open");
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`Navbar ${scrolled ? 'Navbar-scrolled' : ''}`}>
            <div className="Navbar-logo">
                <img src={logo} alt="logo" />
                <h1>VILNI</h1>
            </div>
            <nav ref={menuRef} className="Navbar-nav">
                <img className="Navbar-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
                <ul>
                    <li onClick={() => { setMenu("shop") }}><Link className="Navbar-nav-link" to="/">Shop</Link> {menu === "shop" && <hr />}</li>
                    <li onClick={() => { setMenu("men") }}><Link className="Navbar-nav-link" to="/men">Men</Link> {menu === "men" && <hr />}</li>
                    <li onClick={() => { setMenu("women") }}><Link className="Navbar-nav-link" to="/women">Women</Link> {menu === "women" && <hr />}</li>
                    <li onClick={() => { setMenu("kids") }}><Link className="Navbar-nav-link" to="/kids">Kids</Link> {menu === "kids" && <hr />}</li>
                </ul >
            </nav>
            <section className="Navbar-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="Navbar-cart-count">{getTotalCartItems()}</div>
            </section>
        </header>
    )
}

export default Navbar;
