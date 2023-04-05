import styled from "styled-components";


export const Container = styled.div`
    h1{
    font-size:16px;
    text-align:center;
    }
`;

export const Title = styled.div`

    @media(max-width: 550px){
            padding: 0 22px;
            width: 100%;
            max-width:500px;
        }

        @media(max-width: 412px){
            padding: 0 22px;
            width: 100%;
            max-width:500px;

            border: 1px solid red;
            
            h1{
                font-size: 14px;
                line-height:21px;
            }
        }
    
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    gap:32px;

    @media(max-width: 550px){
        display: flex;
        flex-direction: column;
        width: 70%;
    }
`;

export const WrappersCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:32px;
    margin-top: 48px;

    @media(max-width: 550px){
        padding:22px; 
    }

   > p{
        font-size: 12px;
        width: 606px;
        font-weight: 300;
        font-family: 'Lato', sans-serif;
        line-height: 21px;
        margin: 32px 0 50px 0;


        @media(max-width:550px){
            width:100%;
            text-align: justify;
            margin-top: 0px;
        }
    }

`;

