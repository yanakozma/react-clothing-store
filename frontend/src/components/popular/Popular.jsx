import React from 'react';
import "./Popular.css";
import data_product from "../assets/data";
import Item from "../items/Item";

function Popular({category}) {
    const filteredProducts = data_product.filter((item) => item.category === category);

    return (
        <section className="Popular">
            <h1>POPULAR IN {category.toUpperCase()}</h1>
            <hr />
            <div className="Popular-item">
                {filteredProducts.map((item, i) => {
                    return <Item 
                    key={i}
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    newPrice={item.new_price}
                    oldPrice={item.old_price}
                    />
                })}
            </div>
        </section>
    )
}

export default Popular;
