
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from './../components/Announcement';
import Products from '../components/products';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from "react-router";
import { useState } from 'react';





const Container =styled.div``;
const Title =styled.h1`
margin:20px;
`;
const FilterContainer =styled.div`
display: flex;
justify-content: space-between;
`;
const Filter =styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
   font-weight: 600;
   font-size: 20px;
   margin-right: 20px;
   ${mobile({ marginRight: "0px" })}
`;

const Select =styled.select`
    padding: 10px;
    margin-right: 10px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option =styled.option`

`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  
  
  const handelFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <Container>       
       <Announcement/>
       <Navbar/>
          <Title>
             {cat}
         </Title>
       <FilterContainer>
           <Filter>
               <FilterText>Filter Products</FilterText>
               <Select name='color' onChange={handelFilters}>
               <Option disabled> Color</Option>
                   <Option>White</Option>
                   <Option>Red</Option>
                   <Option>Blue</Option>
                   <Option>Yellow</Option>
               </Select>
               <Select name='size' onChange={handelFilters}>
                   <Option disabled>
                     Size 
                   </Option>
                   <Option>XSmall</Option>
                   <Option>Small</Option>
                   <Option>Medium</Option>
                   <Option>Large</Option>
               </Select>
            </Filter>
           <Filter>
               
               <FilterText>Sort Products</FilterText>
               <Select onChange={ (e)=> setSort(e.target.value)}>
                   <Option value='newest'> New Arrivals</Option>
                     <Option value='asc'>Price (asc) </Option>
                     <Option value='desc'>Price (desc)</Option>
               </Select>   
            </Filter>
       </FilterContainer>
       <Products cat={cat} filters={filters} sort={sort}/> 
       <Footer/>
    </Container>
  )
}

export default ProductList;