import React from "react";
// import Fetch from "../../hooks/Fetch";
import "./RelatedProduct.css";
import Products from "../../Products/Products";
import Fetch from "../../hooks/Fetch";
export default function RelatedProduct({productid, categoryid}) {
  const { data } = Fetch(
    `/api/products?populate=*&filters[id][$ne]=${productid}&filters
    [categories][id]=${categoryid}&pagination[start]=0&pagination[limit]=4`
  );
  return (
    <div className="related-product">
      <Products product={data}/>
    </div>
  );
}
