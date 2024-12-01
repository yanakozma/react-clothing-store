import React, { useContext } from 'react';
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay({ product }) {
    const { addToCart } = useContext(ShopContext);
    const category = product.category;
    return (
        <div className="ProductDisplay">
            <section className="ProductDisplay-left">
                <div className="ProductDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="ProductDisplay-img">
                    <img className="ProductDisplay-main-img" src={product.image} alt="" />
                </div>
            </section>
            <section className="ProductDisplay-right">
                <h1>{product.name}</h1>
                <div className="ProductDisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{122}</p>
                </div>
                <div className="ProductDisplay-right-prices">
                    <div className="ProductDisplay-right-price-old">${product.old_price}</div>
                    <div className="ProductDisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="ProductDisplay-right-description">
                    Regular fit collared overshirt made of a lyocell, cotton and linen blend. Long sleeves with buttoned cuffs.
                    Chest patch pocket with button. Button-up front.
                </div>
                <div className="ProductDisplay-right-size">
                    <h2>Select Size</h2>
                    <div className="ProductDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                    <p className="ProductDisplay-right-category"><span>Category:</span> {category.charAt(0).toUpperCase() + category.slice(1)}, T-Shirt, Crop Top</p>
                    <p className="ProductDisplay-right-category"><span>Tags: </span>Modern, Latest</p>
                </div>
            </section>
        </div>
    )
}

export default ProductDisplay;
