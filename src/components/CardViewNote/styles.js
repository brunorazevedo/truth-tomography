import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BLUE_HEADER};
    width: 214px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    h1{
        font-size: 20px;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        margin-top: 12px;
        @media(max-width:5550px){
            margin:0;
        }

    }

    p{
        font-size: 12px;
        font-weight: lighter;
        font-family: 'Lato', sans-serif;
        margin-top: 8px;
        
        @media(max-width: 550px){
            padding: 0;
            margin:0;
        }
    }

   
`;

export const Icone = styled.div`

`;