import React, { useState } from 'react';
import '../css/Pos.css'
import '../css/POS/POS_Footer.css';
import '../css/POS/POS_Header.css';
import '../css/POS/POS_ProductCard.css';
import '../css/POS/POS_ShoppingCart.css';
import '../css/POS/POS_WorkerSelect.css';
import POS_Header from './components/POS/POS_Header.jsx';
import POS_ColdCoffe from './components/POS/POS_ColdCoffee.jsx';
import POS_Foods from './components/POS/POS_Foods.jsx';
import POS_Footer from './components/POS/POS_Footer.jsx';
import POS_Coffee from './components/POS/POS_Coffee.jsx';
import POS_ProductCard from './components/POS/POS_ProductCard.jsx';
import POS_ShoppingCart from './components/POS/POS_ShoppingCart.jsx';
import POS_WorkerSelect from './components/POS/POS_WorkerSelect.jsx';




const Pos = (props) => {

  let target;
  function handleClick(e) {
    target = e.target.getAttribute('data-render');
    setTarget(target);
    console.log(target + "skrevet fra app.jsx(handleClick()")
  }

  let [where, setWhere] = useState(target);
  function setTarget() {
    setWhere(target);
  }


  let [refresh, setRefresh] = useState(Math.floor(Math.random() * 100));
  function setUpdate() {
    setRefresh(Math.floor(Math.random() * 100));
  }

  function removeItemFromCart(e) {
    target = e.target.getAttribute('data-id');

    let temp = JSON.parse(localStorage.getItem('cart'));
    temp.splice(target, 1);
    localStorage.setItem('cart', JSON.stringify(temp));
    setUpdate("update");
  }

  return (
    <>
      <div className='pos-container' data-windowSize={props.data}>
        <POS_Header />
        <POS_WorkerSelect />
        <POS_ShoppingCart />
        <POS_Coffee />
        <POS_Footer />
      </div>
    </>
  )
}

export default Pos;