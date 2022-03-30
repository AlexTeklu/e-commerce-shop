import styled from 'styled-components';
import  Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from './../components/Announcement';
import { Add, Remove } from '@material-ui/icons';


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
  return (
    <Container>
      <Navbar/> 
      <Announcement/>
          <Wrapper>
            <ImageContainer>
              <Image src="https://i.pinimg.com/236x/ab/79/27/ab7927ed73d1966d319b48a710b28aac.jpg"/>
            </ImageContainer>
            <InfoContainer>
              <Title>Wool T-shirt</Title>
              <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, error.</Desc>
              <Price>990kr</Price>
              <FilterContainer>
               <Filter>
                     <FilterTitle>Color</FilterTitle>
                     <FilterColor color="black" />
                     <FilterColor color="yellow" />
                     <FilterColor color="gray" />
               </Filter>
                 <Filter>
                    <FilterTitle> Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>

                    </FilterSize>
               </Filter>
              </FilterContainer>
              <AddContainer>
                 <AmountContainer>
                   <Add />
                   <Amount>0</Amount>
                   <Remove/>
                 </AmountContainer>
                 <Button>Add To Kart</Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper> 
      <Footer/>

    </Container>
  )
}

export default SingleProduct