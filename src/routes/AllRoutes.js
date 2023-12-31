import { Route, Routes } from "react-router-dom";
// import { Header } from "../components";
import { ProductDetails } from "../components";
import { Cart } from "../pages";
import { Home } from "../pages";
import { PageNotFound } from "../pages";

const AllRoutes = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route
          path="*"
          element={<PageNotFound title="page not found" />}
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
