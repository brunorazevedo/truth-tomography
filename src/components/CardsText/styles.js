import styled from 'styled-components';

export const Container = styled.div`
    background-color: #002E4F;
    width: 189px;
    height: 149px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    

    @media(max-width:550px){
        width: 100%;
    }

`;

export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    h1{
        font-size:14px;
        font-family: 'Lato', sans-serif;
        font-weight: normal;
        text-align: center;
        width: 156px;
        line-height: 21px;

        @media(max-width:550px){
        font-size: 18px;
        width: 100%;
        padding: 12px;
        line-height: 27px;
        }
    }

    a {
    color: #ff8a00;
    font-weight: bold;
    text-align: center;
    font-size: 14px;
  }
`;

