import styled from "styled-components";

export const Container = styled.div`
    background-color: #002E4F;
    width: 633px;
    height: 149px;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media(max-width: 550px){
        width: 100%;
        height: 200px;
    }

    p{
        text-align: center;
        font-size: 14px;
        width: 580px;
        line-height:21px;

        @media(max-width: 550px){
            padding:24px;
            text-align: justify;
            font-size: 14px;
            line-height: 24px;
        }
    }

    a{
        color: #FF8A00;
        font-weight: bold;
    }
`;