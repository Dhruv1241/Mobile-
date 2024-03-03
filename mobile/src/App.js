import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Singleproduct from "./component/singleProductPage/SingleProduct";
import Category from "./component/category/Category";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer/Footer";
import Newsletter from "./component/Footer/Newsletter/Newsletter";
import AppContex from "./component/UI/Contex";
import AuthForm from "./component/Login/Auth-form/Auth-form";
function App() {
  return (
    <BrowserRouter>
    <AppContex>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="Singleproduct/:id" element={<Singleproduct />} />
          <Route path="login" element={<AuthForm />} />
        </Routes>
        <Newsletter />
        <Footer />
    </AppContex>
      </BrowserRouter>
  );
}

export default App;
