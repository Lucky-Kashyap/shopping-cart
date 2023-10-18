import { Link, useParams } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { name, price, image,id } = product;

  return (
    <div className="productCard">
        <Link to={`/product/${id}`}>
      <img src={image} alt={name} />
      </Link>
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
