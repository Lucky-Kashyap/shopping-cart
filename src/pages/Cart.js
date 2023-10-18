import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Cart = ({product,setProduct}) => {
  useTitle("Cart");
  const URL = 'https://fakestoreapi.com/products';
  
 const {data:products} = useFetch(URL);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {product.length}</h1>
        { products.map((product) => (
          <CartCard product={product} setProduct={setProduct} key={product.id}  />
        )) }        
      </section>
    </main>
  )
}
