import { Main, Title, Titles, Container, Wrapper, Left, Image, Details, ProductDetail, Center, Quantity, Input, SubTotal, ShippingCost, Total, Button, Right } from './styled';
import { useEffect, useState } from 'react';

const Carts = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      try{
        const res = await fetch(``)
      }catch(error){
console.log(error);
      }
    } 
  })



  return (
<Main>
  
<Title>ORDER SUMMARY</Title>
<Wrapper>
{products.map((item, index) =>(
  <Left key={index}>
  <Image src={item.img}/>
  <Details>
    <Titles>A DEMO PLANT</Titles>
    <ProductDetail></ProductDetail>
  </Details>
</Left>
))}
    
  
    <Center>
      <Quantity>
        Quantity
        <Input type="number"></Input>
      </Quantity>
    </Center>
    <Right>
      <SubTotal>Subtotal: £30</SubTotal>
      
    </Right>

  </Wrapper>
  <Container>
  <ShippingCost>Shipping Cost: £6.50</ShippingCost>
      
      <Total>Total: £36.50</Total>
        <Button>CHECKOUT NOW</Button>
  </Container>
  
  </Main>

  )
}

export default Carts