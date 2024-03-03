import React from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";
// import cart1 from "../../assets/Category/cat1.jpg";
export default function Categories({ categori }) {
  // console.log(Categori)
  const navigate = useNavigate()
  return (
    <div className="category-shop">
      <div className="categories">
        {categori &&
          categori.data.map((item) => (
            <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
              <img
                src={
                  process.env.REACT_APP_URL +
                  item.attributes.img.data[0].attributes.url
                }
                alt=""
                className="imgproduct"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
