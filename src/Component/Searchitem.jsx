import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

export const Searchitem = (cart,setcart) => {
  const { item: term } = useParams(); // Match the param name
  const [filterdata, setfilterdata] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const data = items.filter((p) => 
        p.title && p.title.toLowerCase().includes(term.toLowerCase())
      );
      setfilterdata(data);
    };

    if (term) filterData();
  }, [term]);

  return (
    <>
      <Product cart={cart} setcart={setcart} items={filterdata} />
    </>
  );
};
