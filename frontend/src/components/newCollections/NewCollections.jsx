import React, { useRef, useState } from 'react';
import "./NewCollections.css";
import new_collection from "../assets/new_collections";
import Item from "../items/Item";

function NewCollections() {
    const [newCollection, setNewCollection] = useState(new_collection);

    const sliderRef = useRef(null);
    const scrollAmount = 300;
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= scrollAmount;
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <section className="NewCollections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="NewCollections-scroll-carousel">
                <button
                    className="nav-btn left-btn"
                    onClick={scrollLeft}
                >
                    {"<"}
                </button>

                <div className="NewCollections-items" ref={sliderRef}>
                    {newCollection.map((item, i) => {
                        return (
                            <Item
                                className="scroll-item"
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                newPrice={item.new_price}
                                oldPrice={item.old_price}
                            />
                        );
                    })}
                </div>

                <button
                    className="nav-btn right-btn"
                    onClick={scrollRight}
                >
                    {">"}
                </button>
            </div>
        </section>
    );
}


export default NewCollections;
