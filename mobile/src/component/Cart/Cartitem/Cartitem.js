import React from "react";
import { MdClose } from "react-icons/md";
import "./Cartitem.css";
import { useContext } from "react";
import { Contex } from "../../UI/Contex";
// import cart1 from './assets/cat1'
export default function Cartitem() {
  const { removeTocart, cartItem, cartproductQuantity } = useContext(Contex);
  return (
    <div className="cart-product">
      {cartItem.map((item) => (
        <div key={item.id} className="cart-product-container">
          <div className="image-container">
            <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="img" />
          </div>
          <div className="product-detail">
            <span className="product-name">{item.attributes.Title}</span>
            <MdClose
              className="closebtn"
              onClick={() => {
                removeTocart(item);
              }}
            />
            <div className="quantity-item">
              <span onClick={() => cartproductQuantity("dec", item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => cartproductQuantity("inc", item)}>+</span>
            </div>
            <div className="text-quantity">
              <span>{item.attributes.quantity}</span>
              <span className="crtcls">X</span>
              <span>{item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
