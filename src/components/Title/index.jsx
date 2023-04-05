import { Container } from './styles';

export function Title({data, ...rest}){

    return(
        <Container {...rest}>
            <h1>{data.title}</h1> 
        </Container>
    )
};