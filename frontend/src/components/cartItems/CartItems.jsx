import React, { useContext } from 'react';
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

function CartItems() {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className="CartItems">
            <div className="CartItems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="CartItems-format CartItems-format-main">
                                <img src={e.image} alt="" className="CartItems-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="CartItems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="CartItems-remove-icon" src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="CartItems-down">
                <div className="CartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="CartItems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="CartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="CartItems-total-item">
                            <h2>Total</h2>
                            <h2>${getTotalCartAmount()}</h2>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="CartItems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="CartItems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;
