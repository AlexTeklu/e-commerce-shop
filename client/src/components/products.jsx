import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
flex-wrap: wrap;
padding-top: 100px;
`;


const Products = ({cat, filters, sort}) => {
  console.log(cat, filters, sort);
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
        
    </Container>
  )
}

export default Products