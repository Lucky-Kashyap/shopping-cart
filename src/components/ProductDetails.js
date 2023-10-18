import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

export const ProductDetails = () => {
    const [products,setProducts] = useState({});
    const params = useParams();

    useEffect(()=>{
        async function fetchData(){
            const data = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const res = await data.json();

            setProducts(res);
        }
        fetchData();
    },[params.id]);

  return (
    <div className='product-detail'>


    <div>
       
        <img src={products.image} alt="product-image" />
        <div className="box">
        <h2>{products.title}</h2>
        <p>{products.description}</p>
        </div>
        </div>

    </div>
  )
}

