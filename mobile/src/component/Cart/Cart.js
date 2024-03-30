import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import React, { useContext } from "react";
import Cartitem from "./Cartitem/Cartitem";
import "./Cart.css";
import { Contex } from "../UI/Contex";
export default function Cart({ setshowcart }) {
  const { cartItem, cartSubTotal } = useContext(Contex);
  return (
    <div className="main-pannel">
      <div className="cartheader">
        <span className="heading">Shoping Cart</span>
        <span className="close-btn" onClick={() => setshowcart(false)}>
          <MdClose />
        </span>
      </div>
      {!cartItem.length && (
        <div className="empty-card">
          <BsCartX />
          <span>No product in the cart</span>
          <button className="return">Return to shop</button>
        </div>
      )}
      {!!cartItem.length && (
        <>
          <Cartitem />
          <div className="cartfooter">
            <div className="subtotal">
              <span className="subtext">SubTotal</span>
              <span className="subtotalcart">{cartSubTotal}</span>
            </div>
            <div className="subbtn">
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
