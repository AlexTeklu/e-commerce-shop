import styled from 'styled-components'; 
import {Link} from 'react-router-dom';
import { mobile } from "../responsive";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';




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
`;

const StyledLinks =styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
  `;

const Login = () => {
  const [username, setUsername] = useState(""); 
 
const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log('Clicked sign in');

    const { username, password } = document.forms[0];
    console.log('username: ', username.value);
    console.log('password: ', password.value);
     
    try {
      const loginUser = await fetch("http//:localhost:5151/login", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
      });
         // On a succesful login attempt, update state and redirect to homepage
         if (loginUser.status === 200) {
          const json = await loginUser.json();
          console.log('user logged in');
          setUsername(json);
          Navigate('/');
          console.log(username);
      } else {
          console.log('not logged in');
      }
      
    } catch (err) {
      
    }
  }
  
  return (
   
   
      <Container>
         
        <Wrapper>
            <Title>Sign-In</Title>
            <Form onSubmit={handleSubmit}>               
                
                <Input  type="text"
                        id="username"
                        name="username"
                        placeholder="Username"  
                 />
                <Input type="password"
                        id="password"
                        name="password"
                        placeholder="Password"             
                />
                
                <Button>Sing-In</Button>
                
                
                <Link to="/register">
                <StyledLinks >Create Account</StyledLinks>
                </Link>
               

            </Form>
        </Wrapper>
    
        
    </Container>
  )
}

export default Login