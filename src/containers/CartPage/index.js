import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getCartItems } from "../../actions";
import Card from "../../components/UI/Card";
import Layout from "../../components/Layout";
import CartItem from "./CartItem";
import "./style.css";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);

  const handleQuantityIncement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const handleQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  return (
    <Layout>
      <div className="cartContainer">
        <Card headerleft={"My Cart"} headerright={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((item_id, index) => (
            <CartItem
              key={item_id}
              cartItem={cartItems[item_id]}
              onQuantityInc={handleQuantityIncement}
              onQuantityDec={handleQuantityDecrement}
            />
          ))}
        </Card>
        <Card headerleft="Price" style={{ width: "500px" }}></Card>
      </div>
    </Layout>
  );
};

export default CartPage;
