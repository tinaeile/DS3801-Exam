import React, { useState } from 'react';
import {menuItems} from '../database.js';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';

const ProductRender = (menuItem) => {

  const initialList = menuItems.filter(menuItem => menuItem.category === "hotCoffee");

  const [list, setList] = useState(initialList);

  const filteredList = list.filter(menuItem => menuItem.category === "hotCoffee");

  return(
      <div>
        <ProductCard
        list={list}
        setList={setList}
        initialList={initialList}
        key={menuItem.productId}
        filteredList={filteredList}
        />
      </div>
    )
  }

export default ProductRender;
