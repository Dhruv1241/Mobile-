import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-contain">
        <div className="col1">
          <div className="title">Title</div>
          <div className="text">
            The copyright notice, although not mandatory, is still a must-have
            for any website. It is a notice that helps to prevent copyright
            infringement. In case someone copies elements of your website, those
            persons can’t claim ignorance. Footers containing only the copyright
            notice have a simple, yet elegant presentation.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <div className="text">Noida sec 53 UP</div>
            <div className="text">64823794739</div>
            <div className="text">Abc@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <span className="text">HeadPhone</span>
          <span className="text">Smart Watch</span>
          <span className="text">Home Theater</span>
          <span className="text">Watch</span>
          <span className="text">LED</span>
          <span className="text">Light</span>
        </div>
        <div className="col">
          <div className="title">pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Home Retuns</span>
          <span className="text">Trams & Condition</span>
          <span className="text">Contact US</span>
          <span className="text">Education</span>
        </div>
      </div>
    </div>
  );
}
