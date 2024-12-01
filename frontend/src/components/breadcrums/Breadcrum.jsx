import React from 'react';
import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

function Breadcrum({product}) { 
    return (
        <div className="Breadcrum">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrum;
