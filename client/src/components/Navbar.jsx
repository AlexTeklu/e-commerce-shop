import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height:60px; 
    padding-top: 10px;
    `;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-item: center;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-item: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid green;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
 
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`;

const MenuItem = styled.div`
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;
`


const navbar = () => {
  return (
    <Container>
        <Wrapper> 
            <Left>
                <Language>SE</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{ color: "gray", fontSize: 16 }}/>
                </SearchContainer>
            </Left>
            
            <Center>
                <Logo>SHOPPING.</Logo>
            </Center>

            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                  <Badge badgeContent = {3} color="primary">
                  <ShoppingCartOutlined/>
                  </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        </Container>
  )
}

export default navbar