import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import Fetch from "../hooks/Fetch";
import { useState } from "react";
import { useContext } from "react";
import { Contex } from "../UI/Contex";
export default function SingleProduct() {
  const { addTocart } = useContext(Contex);
  const { id } = useParams();
  const { data } = Fetch(`/api/products?populate=*&[filters][id]=${id}`);
  const [quantity, setquantity] = useState(1);

  if (!data) return;
  const product = data.data[0].attributes;

  const increment = () => {
    setquantity((prevstate) => prevstate + 1);
  };
  const decrement = () => {
    setquantity((prevstate) => {
      if (prevstate === 1) return 1;
      return prevstate - 1;
    });
  };
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_URL + product.img.data[0].attributes.url
              }
              alt="pic"
            />
          </div>

          <div className="right">
            <span className="name">{product.Title}</span>
            <span className="price">&#8377;{product.price}</span>
            <span className="dics">{product.Descprition}</span>
            <div className="cart-button">
              <div className="quantity">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="addcartbtn"
                onClick={() => {
                  addTocart(data.data[0], quantity);
                  setquantity(1);
                }}
              >
                Add cart
              </button>
            </div>
            <div className="info-item">
              <span className="text-bold">
                category:{"  "}
                <span>{product.categories.data[0].attributes.Title}</span>
              </span>
              <span className="text-bold-icon">
                Share
                <span className="social-icon">
                  <FaFacebookF size={14} />
                  <FaTwitter size={14} />
                  <FaInstagram size={14} />
                  <FaLinkedinIn size={14} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct
        productid={id}
        categoryid={product.categories.data[0].id}
      />
    </div>
  );
}
