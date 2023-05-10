import styled from "styled-components";

export const AccordionSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px 0;
`;

export const Container = styled.div`
`;

export const Wrap = styled.div`
    background-color: #F6F6F6;
    width: 350px;
    cursor: pointer;
    margin-top: 32px;

    h1{
        color: #494949;
        font-size: 20px;
        padding: 24px 0 0 16px;
    }
`;

export const Dropdown = styled.div`
    background-color: #F6F6F6;
    color: #002E4F;
    margin-bottom: 12px;
    width: 350px;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        width: 250px;
        text-align: center;
        margin-bottom: 24px;
    }
`;

export const View = styled.div`
    width: 162px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
`;

export const WrapperView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: #002E4F;    
    width: 100%;
`;

export const ViewInfo = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor:pointer;

    span{
        margin-top:8px;
        font-size: 18px;
        font-weight: bold;
    }

    p{
        margin-top: 4px;
    }
`;
