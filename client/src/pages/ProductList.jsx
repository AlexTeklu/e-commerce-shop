
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from './../components/Announcement';
import Products from '../components/products';
import Footer from '../components/Footer';





const Container =styled.div``;
const Title =styled.h1``;
const FilterContainer =styled.div`
display: flex;
justify-content: space-between;
`;
const Filter =styled.div`
margin: 20px;
`;

const FilterText = styled.span`
   font-weight: 600;
   font-size: 20px;
   margin-right: 20px;
`;

const Select =styled.select`
    padding: 10px;
    margin-right: 10px;
`;
const Option =styled.option`

`;

const ProductList = () => {
  return (
    <Container>       
       <Announcement/>
       <Navbar/>
         <Title>
             Dresses
         </Title>
       <FilterContainer>
           <Filter>
               <FilterText>Filter Products</FilterText>
               <Select>
               <Option disabled selected> Color</Option>
                   <Option>White</Option>
                   <Option>Red</Option>
                   <Option>Blue</Option>
                   <Option>Yellow</Option>
               </Select>
               <Select>
               <Option disabled selected> Size </Option>
                   <Option>Small</Option>
                   <Option>Medium</Option>
                   <Option>Large</Option>
               </Select>
            </Filter>
           <Filter>
               
               <FilterText>Sort Products</FilterText>
               <Select>
                   <Option disabled selected> New Arrivals</Option>
                     <Option>Price </Option>
                     <Option>Price (desc)</Option>
               </Select>   
            </Filter>
       </FilterContainer>
       <Products/>
       <Footer/>
    </Container>
  )
}

export default ProductList