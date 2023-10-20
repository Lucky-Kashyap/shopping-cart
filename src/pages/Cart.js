import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { CartContext, useCart } from "../context/CartContext";
import { useContext } from "react";
import img1 from '../assets/1001.png'
import img2 from '../assets/1002.png';

export const Cart = () => {
  const { total } = useCart();
  // const {total} = useContext(CartContext);

  useTitle("Cart");
  //   const URL = 'https://fakestoreapi.com/products';

  //  const {data:products} = useFetch(URL);
  // useTitle("Cart");

  const product = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image:img1,
    },
    { id: 2, name: "boAt Rockerz 450", price: 49, image: img2 },
  ];

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {product.length} | ${total}
        </h1>
        {product.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
};
