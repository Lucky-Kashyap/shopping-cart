import { Link} from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ product,shopCount,setShopCount,setProduct }) => {
  const { name, price, image,id } = product;

  const passData=()=>{
    setShopCount(shopCount+1);

    // console.log(product);
// setProduct(product);

    // return product;
  }

  return (
    <div className="productCard">
        <Link to={`/product/${id}`}>
      <img src={image} alt={name} />
      </Link>
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={passData}>Add To Cart</button>
      </div>
    </div>
  );
};
