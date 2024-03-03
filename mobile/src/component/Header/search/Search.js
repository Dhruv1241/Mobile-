import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.css";
import cart1 from "../../assets/Category/cat1.jpg";
export default function Search({ setshowsearch }) {
  return (
    <div className="search-page">
      <div className="search-container">
        <div className="form-field">
          <input type="text" autoFocus placeholder="Search for product" />
          <MdClose onClick={() => setshowsearch(false)} className="svg" />
        </div>
      </div>
      <div className="search-result-container">
        
            <div className="image-container">
              <img src={cart1} alt="" />
              <div className="product-details">
                <span className="name">Poduct name</span>
                <span className="desc">Poduct Description</span>
            </div>
            
            </div>
          </div>
        </div>
  );
}
