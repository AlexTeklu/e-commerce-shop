
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled  from 'styled-components';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom'

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden important;
    ${mobile({display:"none"})}
   
`;
const Arrow = styled.div`
     width: 50px;
     height: 50px;
     background-color: #fff7f7;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     position: absolute;
     top: 0;
     bottom: 0;
     left: ${(props) => props.direction === "left" && "10px"};
     right: ${(props) => props.direction === "right" && "10px"};
     margin: auto;
     cursor: pointer;
     opacity: 0.5;
     z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
`;

const Slide =styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  widht: 100%;
  flex: 1;
`;
const Image = styled.img`
    height: 80%;
    padding-top: 70px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
   font-size: 50px;
`;
const Desc = styled.h1`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;



const slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
            <ImgContainer>
                <Image src="https://m.media-amazon.com/images/I/71VdHOvsefL._AC_SY450_.jpg"/>

            </ImgContainer>
            <InfoContainer>
                <Title>Best Clothing</Title>
                <Desc> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, culpa!</Desc>
                <Link to="/">
                <Button>BUY NOW</Button>
                </Link>
                
            </InfoContainer>

            </Slide>

        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default slider