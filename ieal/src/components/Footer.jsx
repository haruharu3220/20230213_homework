import * as React from 'react';
import  styled  from "styled-components";


export const Footer = () =>{
  return (
    <PStyle>© 2023 Hayaharu aaa123</PStyle>
  );
};

const PStyle = styled.p`
    background-color: #CBD0D8;
    position: absolute;
    bottom: 0;
    width: 100vw;
    text-align: center;
    padding: 30px 0;
`;