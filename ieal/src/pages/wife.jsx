import { FirstButton } from "../components/FirstButton";
import  styled  from "styled-components";

export const Wife = () =>{
    return(
        <>
            <NameStyle>妻のページ</NameStyle>
            {/* <FirstButton text="garally" /> */}
            <FirstButton text="FloorMap" />
        </>


    );
};

const NameStyle = styled.h2`
  color: #EB5742;
  text-align: center;
  font-size:32px;
  margin:12px;
`;