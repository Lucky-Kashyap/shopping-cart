import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const {addToCart} = useCart();
  const { name, price, image, id } = product;

  // const passData=()=>{
  //   setShopCount(shopCount+1);

  // console.log(product);
  // setProduct(product);

  // return product;
  // }

  const handleAdd = ()=>{
    addToCart(product)
    console.log(product);
  }
  return (
    <div className="productCard">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={handleAdd}>Add To Cart</button>
      </div>
    </div>
  );
};
