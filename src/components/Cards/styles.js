import styled from 'styled-components';

export const Container = styled.div`
    background-color: #002E4F;
    width: 189px;
    height: 149px;
    border-radius: 10px;

    @media(max-width: 550px){
        width: 100%;

    }
    
    h1{
        font-size:14px;
        font-family: 'Lato', sans-serif;
        font-weight: normal;
        text-align: center;
        width: 156px;
        line-height: 21px;
        margin-bottom: 20px;

        @media(max-width:550px){
        font-size: 18px;
        width: 100%;
        padding: 12px;
        line-height: 27px;
        margin-bottom: 0;
        }
    }

    
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 12px;

    a{
        background-color: #FF8A00;
        padding:8px 10px;
        font-size: 12px;
        border-radius: 10px;
    }
    
`;

