import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;

    @media(max-width:550px){
        margin-top: 130px;
        padding: 0 20px;
    }
`; 

export const BgText = styled.div`
     background-color: ${({ theme }) => theme.COLORS.BLUE_HEADER};   
     width: 577px;
     padding: 36px;
     border-radius: 10px;
     margin-top: 32px;
     margin-bottom: 73px;

     @media(max-width:550px){
        width: 100%;
     }


     > p{
        margin-bottom: 32px;
        text-align: center;
        line-height: 27px;
        font-family:'Open Sans', sans-serif;
        
        @media(max-width:550px){
         font-size: 14px;
         text-align: justify;
     }

     }
`;
