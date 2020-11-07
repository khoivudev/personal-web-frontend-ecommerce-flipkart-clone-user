import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";
import Layout from "../../components/Layout";
import CartItem from "./CartItem";
import "./style.css";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Layout>
      <div className="cartContainer">
        <Card headerleft={"My Cart"} headerright={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((item_id, index) => (
            <CartItem key={item_id} cartItem={cartItems[item_id]} />
          ))}
        </Card>
        <Card style={{ width: "500px" }}>Price</Card>
      </div>
    </Layout>
  );
};

export default CartPage;
