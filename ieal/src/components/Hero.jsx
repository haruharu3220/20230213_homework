import React, { useState } from 'react';
import { Wife } from '../pages/wife';
import { Husband } from '../pages/husband';
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom";
import  styled  from "styled-components";
// import { Button } from '@mui/material';
import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react';
import { PrimaryButton } from './atoms/button/PrimaryButton';
import { SearchInput } from './molecules/SearchInput';
import { Chat } from '../pages/Chat';

export const Hero = () =>{

    const [player, setPlayer] = useState('');

    const selectPlayer = () =>{
        const className = event.target.className;
        setPlayer(className);
        return;
    }


    return(
        <>
            <HeroStyle>
                <TitleStyle>一人二役チャット</TitleStyle>
                <MesseageStyle>友達がいなくてもチャットができるから楽しいよ！</MesseageStyle>
                <MesseageStyle>Who are you?</MesseageStyle>
            </HeroStyle>
            <BrowserRouter>
                <LinkStyle>
                    <ChakraProvider>
                        <Button colorScheme='blue'>
                            <Link to="/husband" className="husband" onClick={selectPlayer}>Husband</Link>
                        </Button>
                        <Button colorScheme='pink'>
                            <Link to="/wife" className="wife" onClick={selectPlayer}>Wife</Link>
                        </Button>
                    </ChakraProvider>
                </LinkStyle>
                <Routes>
                    <Route path="/husband" element={<Husband />} />
                    <Route path="/wife" element={<Wife />} />
                </Routes>
                {/* <SearchInput/> */}
                <Chat user={player} />
            </BrowserRouter>
            

        </>
    );
};

const HeroStyle = styled.div`
    background-color: #D3AC2B;
    padding: 18px;
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
    padding: 18px;
  `;

const SelectStyle = styled.div`
    width:500px;
  `;

const ButtonStyle = styled.div`
    margin
  `;
