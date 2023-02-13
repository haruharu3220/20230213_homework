import { useState } from 'react'
import { Wife } from '../pages/wife';
import { Husband } from '../pages/husband';
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom";
import  styled  from "styled-components";


export const Hero = () =>{
    return(
        <>
            <TitleStyle>Ieal</TitleStyle>
            <p>Who are you?</p>
            
            <BrowserRouter>
    
            <Link to="/husband">Husband</Link>
            <br />
            <Link to="/wife">Wife</Link>
    
        
            <Routes> 
                <Route path="/husband" element={<Husband />} />
                <Route path="/wife" element={<Wife />} />
            </Routes>
            </BrowserRouter>

        </>
    );
};

const TitleStyle = styled.h1`
  color: red;
  text-align: center;
`;
