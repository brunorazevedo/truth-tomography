import { Container, Wrapper} from './styles';

export function Cards(props){
    return(
        <Container>
            <Wrapper>
            <h1>{props.title}</h1>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd9s2vZDTzf2Rj731QNbSxIHmqwPBbI_SITEAFbKCz2uDvWlA/viewform" target ="_blank" >CONCORDAR E ASSINAR</a>
            </Wrapper>  
        </Container>

        
    )
}