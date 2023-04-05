import styled from "styled-components";

export const Container = styled.button`
    background-color: ${(prop) => prop.backgroundColor};
    width: 260px;
    height: 50px;
    border-radius: 10px;
    border: none;
    

    > h1{
        text-align: center;
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;
