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
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondButton } from './components/atoms/button/SecondButton';
import { SearchInput } from './components/molecules/SearchInput';
import { CommentCard } from './components/organism/CommentCard';
import { Chat } from './pages/Chat';


const user = {
  comment: "テストだよ〜ん",
  name: "Bさん",
  image: "https://source.unsplash.com/%E5%86%99%E7%9C%9F/dvifDfIB3W0"
};

const App = () => {


  // const onclickDetailA = () => history.push("pages/wife");

  return (
    <BodyStyle>
        <Header />
        <Hero />
                {/* <PrimaryButton>テスト</PrimaryButton>
                <SecondButton>だよ</SecondButton> */}
                {/* <br />
                <SearchInput/> */}
        {/* <p>kitchin</p>
        <p>bath</p>
        <p>washRoom</p>
        <p>FC</p> */}

        {/* <CommentCard user={user}/> */}
        {/* <Chat userId="UserIdを入力するところ" selectedUser={1}/> */}
        <Footer />
    </BodyStyle>
  );
};



const TitleStyle = styled.h1`
  color: red;
  text-align: center;
`;

const BodyStyle = styled.div`
  min-height: 100vh;
`;

export default App
