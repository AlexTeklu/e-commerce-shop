import styled from 'styled-components';
import Announcement from './../components/Announcement';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Add, Remove } from '@material-ui/icons';


const Container = styled.div`

`;

const Wrapper = styled.div`
   padding: 20px;
`;
const Title = styled.div`
    font-size: 600;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

`;
const TopTexts = styled.div`


`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:0 10px;

`;

const Bottom = styled.div`
   display: flex;
`;

const Info = styled.div`
    flex: 3;
`;

const Products = styled.div`
    display:flex;
    justify-content: space-between;
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 30vh;
    object-fit: ;
`;

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;


const ProductName = styled.span`
    
`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`;

const ProductSize = styled.span`
    
`;

const PriceDetail = styled.div`
    flex: 1;
    diplay: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-item: center;
    margin-top: 20px;
`;

const ProductAmount = styled.div`
   font-size: 22px;
   margin: 2px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;




const Summary = styled.div`
     flex: 1;
     border: 0.5px solid lightgray;
     border-radius: 10px;
     padding: 20px;
     height: 50vh;
`;

const SummaryTitle = styled.h1`
     font-weight: 200;
`;

const SummaryItem = styled.div`
     margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     font-weight: ${(props) => props.type === "total" && "500"};
     font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
     width: 100%;
     padding: 10px;
     background-color: black;
     color: white;
     font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your-Bag!</Title>
            <Top>
                <TopButton>Continue-shopping</TopButton>
                  <TopTexts>
                     <TopText>Shopping Bag(2)</TopText>
                     <TopText>Wishlist(0)</TopText>
                  </TopTexts>
                <TopButton type="filled">Check-Out</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Products>
                        <ProductDetails>
                            <Image src="https://m.media-amazon.com/images/I/717bCN2YYTL._AC_SX679_.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>Hand-Made Dress </ProductName>
                                <ProductId><b>ID:</b>291 </ProductId>
                                <ProductColor color="darkblue"/>
                                <ProductSize><b>Size:</b>40</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>699kr</ProductPrice>
                        </PriceDetail>
                    </Products>

                <Hr/>
                    <Products>
                        <ProductDetails>
                            <Image src="https://i.etsystatic.com/32814857/r/il/43f4e7/3590319175/il_1588xN.3590319175_1ul6.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b>Hand-Made T-shirt </ProductName>
                                <ProductId><b>ID:</b>292 </ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b>L</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>399kr</ProductPrice>
                        </PriceDetail>
                    </Products>
                </Info>
                <Summary>
                    <SummaryTitle>Order-Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>429kr</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>30kr</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Total</SummaryItemText>
                        <SummaryItemPrice>399kr</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CheckOut</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart