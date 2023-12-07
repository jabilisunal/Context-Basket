import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"
import { BasketContext } from '../../context/BasketContext';







function Navbar() {
  
  const {basket} = useContext(BasketContext)
  console.log(basket);
  return (
    <nav>
        <h2>Navbar</h2>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/detail/2"}>Contact</Link></li>
            <li> <Link to={"/basket"}>basket <sup>{basket.length ? basket.length : ""}</sup></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar