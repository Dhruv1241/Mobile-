import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

export default function Product({ id, data }) {
const navigate = useNavigate()  
  return (
    <div className="product-card">
      <div className="prod-content">
        <div className="thumbnail" onClick={()=> navigate('/Singleproduct/'+id)}>
          <img
            src={process.env.REACT_APP_URL + data.img.data[0].attributes.url}
            alt=""
            className="imgproduct"
          />
        </div>
      </div>
      <div className="product-detail">
        <span className="name">{data.Title}</span>
        <span className="price">{data.price}</span>
      </div>
    </div>
  );
}
