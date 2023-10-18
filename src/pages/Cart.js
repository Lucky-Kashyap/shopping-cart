import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Cart = () => {
  useTitle("Cart");
  const URL = 'https://fakestoreapi.com/products';
  
 const {data:products} = useFetch(URL);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
