import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from "../responsive";
// import { useState } from 'react';
// import axios from 'axios';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i0.wp.com/clipkulture.com/wp-content/uploads/2019/06/1561193688n4g8k.png?resize=350%2C200&ssl=1")center;
`;

const Wrapper = styled.div`
   width: 40%;
   padding: 20px;
   background-color: #fff;
   ${mobile({ width: "75%" })}
`;

const Title = styled.h2`
   font-size: 24px;
   font-weight: 600;
`;

const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`;

const Input = styled.input`
   flex: 1;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px; 
`;

const Register = () => {
  


  return (
    <Container>
        <Wrapper>
            <Title>Create Account</Title>
            <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
           
                <Link to="/login">
                <Button>Create</Button>
                </Link>
                

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register