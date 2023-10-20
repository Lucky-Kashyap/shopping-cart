import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { cartList, addToCart, removeFromCart } = useCart();
  const { name, price, image, id } = product;
  // const {state,dispatch} = useCart();
  // const save = JSON.parse(localStorage.getItem('cartList'));
  // const [save,setSave] = useState(JSON.parse(localStorage.getItem('product') || false));
  // console.log(product);
  // const { name, price, image, id } = JSON.parse(localStorage.getItem('product')) || "";
  // JSON.parse(localStorage.getItem('product'));

  useEffect(() => {
    // const savedProd
    // localStorage.setItem('cartList',JSON.stringify(cartList));
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

    // localStorage.setItem('product',JSON.stringify(cartList));
  }, [cartList, id]);

  // useEffect(() => {
  //   const savedProducts = JSON.parse(localStorage.getItem('cartList'));
  //   if (savedProducts) {
  //     dispatch({ type: 'LOAD_PRODUCTS', payload: savedProducts });
  //   }
  // }, []);

  // Save products to localStorage whenever they change
  // useEffect(() => {
  //   localStorage.setItem('cartList', JSON.stringify(state.cartList));
  // }, [state?.cartList]);

  // const passData=()=>{
  //   setShopCount(shopCount+1);

  // console.log(product);
  // setProduct(product);

  // return product;
  // }

  const handleAdd = () => {
    addToCart(product);
    // console.log(product);
    // localStorage.setItem('product',JSON.stringify(product));
  };
  return (
    <div className="productCard">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {/* <button onClick={handleAdd}>Add To Cart</button> */}
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={handleAdd}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
