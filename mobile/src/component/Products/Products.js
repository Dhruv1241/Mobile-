import React from "react";
import Product from "./Product/Product";
// import SingleProduct from '../singleProductPage/SingleProduct'
import "./Products.css";

export default function Products({ product }) {
  return (
    <div className="products-container">
      <div className="sec-heading">Section Heading</div>
      <div className="prod-container">
        <div className="products">
          {product &&
            product.data.map((item) => (
              <Product key={item.id} id={item.id} data={item.attributes} />
            ))}
        </div>
      </div>
    </div>
  );
}
