import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove from "../assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, cartItem, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="cartItem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItem-format cartItem-format-main">
                <img
                  src={e.image}
                  alt={e.name}
                  className="cartItem-product-icon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItem-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cartItem-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItem-down">
        <div className="cartItem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItem-total-item">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartItem-promoCode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartItem-promoBox">
            <input type="text" className="" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
