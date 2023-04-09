import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    background-color: #00497E;
    text-align: center;
    padding: 60px;

    h1{
        font-size:38px;

        @media(max-width: 550px){
        font-size: 32px;
        }
        @media(max-width: 375px){
        font-size: 24px;
        }
    }

    h3{
        margin-top: 32px;
    }

    a:hover{
        color: #FF8A00;
    }
`;

export const BgAutores = styled.div`

`;

export const BgInfo = styled.div`
    height: 400px;
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img{
        width: 100px;
        height: 100px;
    }
`;

export const InfoAutores = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 48px;

    h2{
        color: #00b2ff;
        margin-top: 12px;

        @media(max-width:375px) {
            font-size:22px;   
        }
    }

    p{
        margin-bottom: 32px;
    }

    a{
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 56px;
    }

    a:hover{
        color: #00b2ff;
        
    }

    
    
`;