import React from 'react';
import "./RelatedProducts.css";
import data_product from '../assets/data';
import Item from "../items/Item";

function RelatedProducts({ category }) {
    const filteredProducts = data_product.filter((item) => item.category === category);
    return (
        <section className="RelatedProducts">
            <h1>Related Products</h1>
            <hr />
            <div className="RelatedProducts-item">
                {filteredProducts.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            newPrice={item.new_price}
                            oldPrice={item.old_price}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default RelatedProducts;
