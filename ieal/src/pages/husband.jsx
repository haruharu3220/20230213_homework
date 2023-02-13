import { FirstButton } from "../components/FirstButton";
import  styled  from "styled-components";

export const Husband = () =>{
    return(
        <>
            <NameStyle>夫のページ</NameStyle>
            <FirstButton text="garally" />
            <FirstButton text="FloorMap" />
        </>


    );
};


const NameStyle = styled.h2`
  color: #6C55EB;
  text-align: center;
  font-size:32px;
  margin:12px;
`;
