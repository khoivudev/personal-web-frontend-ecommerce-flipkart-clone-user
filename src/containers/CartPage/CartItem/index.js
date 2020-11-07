import React from "react";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";

const CartItem = (props) => {
  const { _id, name, price, qty, img } = props.cartItem;
  return (
    <div className="cartItemContainer">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={generatePublicUrl(img)} alt={""} />
        </div>
        <div className="cartItemDetails">
          <div>
            <p>{name}</p>
            <p>Rs. {price}</p>
          </div>
          <div>Delivery in 3 - 5 days</div>
        </div>
      </div>
      <div style={{ display: "flex", margin: "5px 0" }}>
        {/* Quantity control */}
        <div className="quantityControl">
          <button>-</button>
          <input value={qty} readOnly />
          <button>+</button>
        </div>
        <button className="cartActionBtn">save for later</button>
        <button className="cartActionBtn">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
