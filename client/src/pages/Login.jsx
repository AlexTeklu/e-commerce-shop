import styled from 'styled-components'; 
import {Link} from 'react-router-dom';
import { mobile } from "../responsive";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/ApiCalls";





const Container =styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Wrapper =styled.div`
   width: 25%;
   padding: 20px;
   background-color: #333;
   ${mobile({ width: "75%" })}
`;

const Title =styled.h2`
   font-size: 24px;
   font-weight: 300;
   color: #fff;
`;

const Form =styled.form`
   display: flex;
   flex-direction: column;
`;
    
const Input =styled.input`
   flex: 1;
   min-width: 40%;
   margin: 10px 0;
   padding: 10px;
   `;
    
const Button =styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px; 
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;
const Error = styled.span``

const StyledLinks =styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
  `;

const Login = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);
 
 
      const handleClick = (e) =>{       
        e.preventDefault();
        login(dispatch, { username, password });
      }
        
  return (
   
   
      <Container>
         
        <Wrapper>
            <Title>Sign-In</Title>
            <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
                
                <Button onClick={handleClick} disabled={isFetching}>Sing-In</Button>
               {error && <Error>Something went worng</Error>}
                
                
                <Link to="/register">
                <StyledLinks >Create Account</StyledLinks>
                </Link>
               

            </Form>
        </Wrapper>
    
        
    </Container>
  )
}

export default Login