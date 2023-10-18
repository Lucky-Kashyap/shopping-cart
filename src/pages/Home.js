import { ProductCard } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Home = ({shopCount,setShopCount,product,setProduct}) => {
    const URL = 'https://fakestoreapi.com/products';
  const {data : products} = useFetch(URL);

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard shopCount={shopCount} setShopCount={setShopCount} key={product.id} setProduct={setProduct} product={product} />
        )) }        
      </section>
    </main>
  )
}
