import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../context/BasketContext";

function HomePage() {
  const [products, setProducts] = useState([]);
  const { addBasket} = useContext(BasketContext)
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Ana Sehife</h1>
      <div className="container">
      {products.map((x) => (
        <div className="card" key={x.id}>
          <div className="name">{x.name}</div>
          <div className="price">{x.unitPrice}</div>
          <button onClick={()=>{addBasket(x)}}>add basket</button>

        </div>
      ))}
      </div>
    </>
  );
}

export default HomePage;
