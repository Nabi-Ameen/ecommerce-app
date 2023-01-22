import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncProducts, getAllProducts } from '../../Store/productSlice';
import { fetchAsyncCategories, getAllCategory } from '../../Store/categorySlice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const category = useSelector(getAllCategory)
  console.log(category);

  useEffect(() => {
    dispatch(fetchAsyncProducts(100))
    dispatch(fetchAsyncCategories())
  }, [])
  return (
    <div>
      home page
    </div>
  )
}

export default Home;
