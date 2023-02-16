import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";
import  styled  from "styled-components";

export const SearchInput = () => {
    return(
        <SBody>
            <SContainer>
                <Input placeholder="メッセージを入力" />
                <SButtonWrapper>
                    <PrimaryButton2>送信</PrimaryButton2>
                </SButtonWrapper>
            </SContainer>
        </SBody>

    );

};

const SContainer = styled.div`
    display:flex;
    align-items:center;
`;

const SButtonWrapper = styled.div`
    padding-left:8px;

`;


const PrimaryButton2 = styled(PrimaryButton)`
    background-color: red;

`;

const SBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;