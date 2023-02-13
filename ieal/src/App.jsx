import { useState } from 'react'
import { FirstButton } from './components/FirstButton';
import { Wife } from './pages/wife';
import { Husband } from './pages/husband';
import { Member } from './pages/member';
import { BrowserRouter, Routes, Route, Link,  } from "react-router-dom";
import { Hero }  from './components/Hero';
import Header from './components/Header';
import { Footer } from './components/Footer';
import  styled  from "styled-components";

const App = () => {

  // const onclickDetailA = () => history.push("pages/wife");

  return (
    <>
      <Header />
      <Hero />
      
      <p>kitchin</p>
      <p>bath</p>
      <p>washRoom</p>
      <p>FC</p>
      <Footer />
     </>
  );
};



const TitleStyle = styled.h1`
  color: red;
  text-align: center;
`;


export default App
