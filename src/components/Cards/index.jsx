import { Container, Wrapper} from './styles';
import { Dialog } from 'primereact/dialog';

export function Cards(props){
    return(
        <Container>
            <Wrapper>
            <h1>{props.title}</h1>
           
            <a href="https://sites.google.com/view/trabalho-de-tcc/in%C3%ADcio" target ="_blank" >CONCORDAR E ASSINAR</a>
            </Wrapper>  
        </Container>

        
    )
}