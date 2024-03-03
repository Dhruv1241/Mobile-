import React from "react";
import "./Banner.css";
import Bannerimg from '../../assets/img8.jpg';
import {NavLink} from 'react-router-dom' 
export default function Banner() {
  return (
    <div className="parent">
      <img src={Bannerimg} alt="iage" />
      <div className="text-content">
      <div className="light"></div>
        <h1 className="h1">Sales</h1>
        <p>this is my first website</p>
        <div className="banner-btn">
          <div className="banner-read">Read More</div>
          <div className="banner-shop">
              <NavLink to='/' className='link'>Shop Now</NavLink></div>
        </div>
      </div>
    </div>
  );
}
