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

    h2{
        margin-top: 32px;
        font-size:28px;
        
    }
    p{
        font-size:16px;
        margin-top: 8px;
    }
    h3{
        margin-top: 32px;
    }

    a:hover{
        color:#FF8A00;
    }
`;
export const SectionTermo = styled.div`
    text-align: center;
    margin-top: 64px;
    
    h2{
        font-size: 32px;
        margin-bottom: 8px;
    }
    p{
        font-size:14px;
    }
`;

export const BoxTermo = styled.div`
   margin-top: 64px;
   padding: 12px;
   display: flex;
   flex-wrap: wrap;
   align-items:stretched;
   justify-content: center;
   gap: 48px;
`;

export const BgTermo = styled.div`
   background-color: #D9D9D9;
   padding: 32px;
   width: 50%;
   color: #002E4F;
   height: 1100px;

   @media(max-width: 550px){
    width: 100%;
    height: 1080px;
   }

   @media(max-width: 375px){
    width: 100%;
    height: 1750px;
   }

   p{
    font-size: 18px;

    @media(max-width: 550px){
    font-size: 12px;
    }

   }
`;

export const BgAssinatura = styled.div`
    margin-bottom: 80px;

    @media(max-width: 550px){
        width: 100%;
        iframe{
            width: 100%;
        }

    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 80px;

    p{
        margin-bottom: 16px;
        font-size:18px;
        font-weight: bold;

        @media(max-width: 550px){
        font-size: 14px;
        }
    }
`;