import { useCart } from "../context/CartContext";
import "./Cart.css";

export const CartCard = ({product}) => {
  const {removeFromCart} = useCart();
  const {name, price, image} = product;

  const handleRemove=()=>{
    
    removeFromCart(product);
    // console.log(product);
  }

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
  )
}
