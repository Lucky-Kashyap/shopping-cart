import { ProductCard } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
    const URL = 'https://fakestoreapi.com/products';
  const {data : products} = useFetch(URL);

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id}  product={product} />
        )) }        
      </section>
    </main>
  )
}
