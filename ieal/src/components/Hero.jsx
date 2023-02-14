import { useState } from 'react'
import { Wife } from '../pages/wife';
import { Husband } from '../pages/husband';
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom";
import  styled  from "styled-components";
// import { Button } from '@mui/material';
import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react';

export const Hero = () =>{
    return(
        <>
        <HeroStyle>
            <TitleStyle>Ieal</TitleStyle>
            <MesseageStyle>Who are you?</MesseageStyle>
        </HeroStyle>
            <BrowserRouter>
            <LinkStyle>
                <ChakraProvider>
                    <Button colorScheme='blue'>
                        <Link to="/husband">Husband</Link>
                    </Button>
                    <Button colorScheme='pink'>
                        <Link to="/wife">Wife</Link>
                    </Button>
                </ChakraProvider>
            </LinkStyle>
    

            <Routes> 
                <Route path="/husband" element={<Husband />} />
                <Route path="/wife" element={<Wife />} />
            </Routes>
            </BrowserRouter>

        </>
    );
};

const HeroStyle = styled.div`
  background-color: #D3AC2B;
`;

const TitleStyle = styled.h1`
  color: #fff;
  text-align: center;
  font-size:50px;
  margin:0px;
`;

const MesseageStyle = styled.p`
  color: #ffff;
  text-align: center;
  font-size:28px;
  margin:0px;
  `;

const LinkStyle = styled.div`
    display:flex;
    justify-content: space-around;
  `;

const SelectStyle = styled.div`
    width:500px;
  `;

const ButtonStyle = styled.div`
    margin
  `;
