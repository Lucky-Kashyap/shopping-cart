import { ProductCard } from "../components";

export const Home = () => {
  const [data : product] = useFetch();

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
