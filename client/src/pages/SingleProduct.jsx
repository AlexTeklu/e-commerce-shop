import styled from 'styled-components';
import  Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from './../components/Announcement';
import { Add, Remove } from '@material-ui/icons';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../Redux/cartRedux';
import { useDispatch } from 'react-redux';


const Container =styled.div`

`;
const Wrapper =styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer =styled.div`
   flex: 1;
`;
const Image =styled.img`;
   width: 100%;
   height: 60vh;
   object-fit: cover;
`;
const InfoContainer =styled.div`
   flex: 1;
   padding: 0px 50px;
`;
const Title =styled.h1`
   font-weight: 800;
`; 
const Desc =styled.div`
   margin: 20px 0px;
`; 
const Price =styled.div`
   font-weight: 100;
   font-size: 40px;
`;

const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
`;
const Filter= styled.div`
   display: flex;
   align-items: center;
`;
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 1px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;

const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
     padding: 10px;
     border: 4px solid teal;
     border-radius: 20px;
     background-color: white;
     cursor: pointer;
     font-weight: 500;
     &:hover{
     background-color: #f8f4f4;
     }
`;




const SingleProduct = () => {
   const location = useLocation();
   const id = location.pathname.split("/")[2];
   const [product, setProduct]= useState({});
   const [quantity, setQuantitiy]= useState(0);
   const [color, setColor] = useState("");
  const [size, setSize] = useState("");
   const dispatch = useDispatch()


     useEffect(() =>{
      const getProduct = async () =>{
      try {
         const res = await publicRequest.get("/products/"+id);
         setProduct(res.data);
      } catch (err) {
         
      }
   }
   getProduct();

     }, [id]);


     const handleQuantity = (type) => {
      if (type=== "dec"){
         quantity > 1 && setQuantitiy(quantity -1 );
      }else{
         setQuantitiy(quantity + 1);
      };
     };


     const handleClick = () =>{
      dispatch(addProduct({...product, quantity, color, size}));
     };

  return (
    <Container>
      <Navbar/> 
      <Announcement/>
          <Wrapper>
            <ImageContainer>
              <Image src={product.img}/>
            </ImageContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Desc>{product.desc}</Desc>
              <Price>{product.price}</Price>
              <FilterContainer>
               <Filter>
                     <FilterTitle>Color</FilterTitle>
                     {product.color?.map((c) => (
                <FilterColor color={c} key={c} />
                ))}  
               </Filter>
                 <Filter>
                    <FilterTitle> Size</FilterTitle>
                    <FilterSize>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}

                    </FilterSize>
               </Filter>
              </FilterContainer>
              <AddContainer>
                 <AmountContainer>
                 <Remove onClick={() =>handleQuantity("dec")}/>                 
                   <Amount>{quantity}</Amount>
                   <Add onClick={() =>handleQuantity("inc")}/>
                 </AmountContainer>
                 <Button onClick={handleClick}>Add To Kart</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper> 
      <Footer/>

    </Container>
  )
}

export default SingleProduct