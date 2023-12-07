import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

function Login() {
  const  {basket,increaseCount,decreaseCount ,removeItem } = useContext(BasketContext);
  return (
    <div>
      {basket.length ? (
        <div className="container">
          {basket.map((x) => (
            <div className="card" key={x.id}>
              <div className="name">{x.name}</div>
              <div className="price">{x.unitPrice}</div>
              
              <button onClick={() => {increaseCount(x)}}>
                +
              </button>
              <div className="price">{x.count}</div>
              <button onClick={() => {decreaseCount(x)}}>
                -
              </button>
              <button onClick={()=>removeItem(x)}>X</button>
            </div>
          ))}
        </div>
      ) : (
        <h1>Basket bosdur</h1>
      )}
    </div>
  );
}

export default Login;
