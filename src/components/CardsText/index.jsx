import { Link } from 'react-router-dom';
import { Container, Wrapper, } from './styles';

export function CardsText(props){
    return(
        <Container>
            <Wrapper>
            <h1>{props.title}</h1>
            <Link to="/tomografias">ACESSAR TOMOGRAFIAS</Link>
            </Wrapper>  

        </Container>

        
    )
}