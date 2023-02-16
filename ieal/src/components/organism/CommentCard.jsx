import styled from "styled-components";

export const CommentCard = (props) =>{

    const{user} =props;

    return(
        <CardBodyStyle>
            <img height={160} width={160} src={user.image} alt="プロフィール" />
            
            <p>タイトル</p>
            <SDl>
                <dt>コメント:</dt>
                <dd>{user.comment}</dd>
                <dt>投稿者:</dt>
                <dd>{user.name}</dd>
            </SDl>
        </CardBodyStyle>
    );

}




const SDl = styled.dl`
    text-align:left;
    dt{
        float: left;
    }
    dd{
        padding-left:32px;
    }
`;

const CardBodyStyle = styled.div`
    background-color:#ffff;
    box-shadow: #ddd 0px 0px 4px 2px;
    border-radius:8px;
    padding:16px;
`;
