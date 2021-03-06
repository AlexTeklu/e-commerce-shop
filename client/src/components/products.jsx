import styled from 'styled-components'
//  import { popularProducts } from '../data';
import Product from './Product';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
flex-wrap: wrap;
padding-top: 100px;
`;


const Products = ({cat, filters, sort}) => {
 
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() =>{
   const getProducts = async () =>{
     try {
       const res = await axios.get(
       
        "http://localhost:5151/products");

       setProducts(res.data);
       
     } catch (err) {
       
     }
    }
    getProducts();
   }, [cat]);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
         item[key].includes(value)
      )
      )

      )
    
  }, [products, cat, filters]);

  
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
         {cat
        ? filteredProducts.map((item) => 
        <Product item={item.value} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
        
    </Container>
  )
}

export default Products