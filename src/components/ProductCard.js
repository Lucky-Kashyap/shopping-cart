import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const {cartList,addToCart,removeFromCart} = useCart();
  const { name, price, image, id } = product;



  useEffect(() => {
    const productIsInCart = cartList.find(cartItem => cartItem.id === id);

    if(productIsInCart){
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

  }, [cartList, id]);

  // const passData=()=>{
  //   setShopCount(shopCount+1);

  // console.log(product);
  // setProduct(product);

  // return product;
  // }

  // const handleAdd = ()=>{
    // addToCart(product)
    // console.log(product);
  // }
  return (
    <div className="productCard">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {/* <button onClick={handleAdd}>Add To Cart</button> */}
        { isInCart ? (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>) :  (<button onClick={() => addToCart(product)}>Add To Cart</button>) }

      </div>
    </div>
  );
};
