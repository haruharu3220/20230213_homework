import { useState } from 'react'
import { Wife } from '../pages/wife';
import { Husband } from '../pages/husband';
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom";
import  styled  from "styled-components";


export const Hero = () =>{
    return(
        <>
        <HeroStyle>
            <TitleStyle>Ieal</TitleStyle>
            <MesseageStyle>Who are you?</MesseageStyle>
        </HeroStyle>
            <BrowserRouter>
            <LinkStyle>
                <SelectStyle>
                    <Link to="/husband">Husband</Link>
                </SelectStyle>
                <br />
                <SelectStyle>
                    <Link to="/wife">Wife</Link>
                </SelectStyle>
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
  color: #333d51;
  text-align: center;
  font-size:50px;
  margin:0px;
`;

const MesseageStyle = styled.p`
  color: #333d51;
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
