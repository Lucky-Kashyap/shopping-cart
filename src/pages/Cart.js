import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { CartContext, useCart } from "../context/CartContext";
import { useContext } from "react";

export const Cart = ({product,setProduct}) => {
  const {total} = useCart();
  // const {total} = useContext(CartContext);

  useTitle("Cart");
  const URL = 'https://fakestoreapi.com/products';
  
 const {data:products} = useFetch(URL);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {product.length} | ${total}</h1>
        { products.map((product) => (
          <CartCard product={product} setProduct={setProduct} key={product.id}  />
        )) }        
      </section>
    </main>
  )
}
