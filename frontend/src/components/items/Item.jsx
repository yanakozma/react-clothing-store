import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

function Item({ image, name, newPrice, oldPrice, id, className }) {
    return (
        <div className={className ? `Item ${className}` : 'Item'}>
            <Link to={`/product/${id}`}><img src={image} alt="" /></Link>
            <p>{name}</p>
            <div className="Item-prices">
                <div className="Item-price-new">
                    ${newPrice}
                </div>
                <div className="Item-price-old">
                    ${oldPrice}
                </div>
            </div>
        </div>
    )
}

export default Item;
