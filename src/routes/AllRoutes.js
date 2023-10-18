import { Route, Routes } from "react-router-dom";
// import { Header } from "../components";
import { ProductDetails } from "../components";
import { Cart } from "../pages";
import { Home } from "../pages";
import { PageNotFound } from "../pages";
import { useState } from "react";

const AllRoutes = ({shopCount,setShopCount}) => {
  const [product,setProduct]=useState([]);
 

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home shopCount={shopCount} setShopCount={setShopCount}/>}></Route>
        <Route path="/cart" element={<Cart product={product} setProduct={setProduct}/>}></Route>
        <Route path="/product/:id" element={<ProductDetails  />}></Route>
        <Route path="*" element={<PageNotFound title="page not found"/>}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
