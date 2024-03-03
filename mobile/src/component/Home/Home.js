import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import Categories from "./categories/Categories";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../UI/api";
import { Contex } from "../UI/Contex";
export default function Home() {
  const {categori, setcategori, product, setproduct} = useContext(Contex)
  useEffect(()=>{
    getCategoryData()
    getProductData()
  },[])

  const getCategoryData=()=>{
      fetchDataFromApi('/api/categories?populate=*').then((res)=>{
      setcategori(res)
      console.log(res)
    })
    
  }
  const getProductData=()=>{
    fetchDataFromApi('/api/products?populate=*').then((res)=>{
      setproduct(res)
    })
    
  }
  return (
    <div>
      <Banner />
      <div>
        <Categories categori={categori}/>
        <Products  product={product}/>
      </div>
    </div>
  );
}

