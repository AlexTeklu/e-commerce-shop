import styled from "styled-components";
import {mobile} from '../responsive';
import { Link } from "react-router-dom";
 
 
 
const Container = styled.div`
 flex: 1;
 margin: 3px;
 height: 70vh;
 position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`;

 const Title = styled.h1`
 color: blue;
 margin-bottom: 20px;
 font-weight: 900;
 color: #cd9452;
 `;
const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color: #cd9452;
cursor: pointer;
font-weight: 900;
`;

const CategoryItem = ({item}) => {
  return (
    <Container> 
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
       <Info>
         <Title>{item.title}</Title>
         <Button >Buy Now</Button>
       </Info>
      
      </Link>
      
      
      
    </Container>
  )
}

export default CategoryItem