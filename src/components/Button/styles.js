import  styled  from 'styled-components';

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.WHITE};

    padding: 12px;
    border: 0;
    border-radius: 5px;
    font-weight:400;

    &:disabled{
        opacity: 0.5;
    }
`