import { useState, useEffect } from 'react';
import ProductGrid from '../../molecules/ProductGrid';
import { productFormatter } from './formatter';
import data from '../../data/products';

const ProductListSection = () => {
  const [products, setProducts] = useState([]);

  const loadData = () => {
    setProducts(productFormatter(data.items));
  };

  useEffect(() =>{
    loadData();
  }, []);

  return (
    <ProductGrid
      products={products}
    />
  );
}

export default ProductListSection;