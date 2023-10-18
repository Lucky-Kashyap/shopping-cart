import { ProductCard } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
    const URL = 'https://fakestoreapi.com/products';
  const {data : product} = useFetch(URL);

  return (
    <main>
      <section className="products">
        { product.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
