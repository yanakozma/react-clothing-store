import React, { useContext } from 'react';
import "./css/ShopCategory.css";
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/items/Item";

function ShopCategory({ category, bgColor = "#ffffff", backgroundImg, video }) {
    const { all_product } = useContext(ShopContext);
    const categoryClass = `ShopCategory-${category}`;

    return (
        <div className={`ShopCategory ${categoryClass}`}>
            <section
                className="ShopCategory-banner"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="ShopCategory-banner-text">
                    <h1>{category.toUpperCase()} CLOTHING COLLECTION</h1>
                    <h2>UP TO 25% OFF</h2>
                    <div className="ShopCategory-banner-btn">
                        <div>Shop Now</div>
                    </div>
                </div>
            </section>
            <section
                className="ShopCategory-collection"
                style={{ backgroundColor: bgColor }}
            >
                <div className="ShopCategory-indexSort">
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                    <div className="ShopCategory-sort">
                        Sort by <img src={dropdown_icon} alt="" />
                    </div>
                </div>
                <div className="ShopCategory-products">
                    {all_product.map((item, i) => {
                        if (item.category === category) {
                            return <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                newPrice={item.new_price}
                                oldPrice={item.old_price} />
                        } else {
                            return null;
                        }
                    })}
                </div>
                <div className="ShopCategory-loadmore-btn">
                    Explore More
                </div>
                <div className="ShopCategory-video">
                    <video src={video} autoPlay loop muted />
                </div>
            </section>
        </div>
    );
};

export default ShopCategory;
