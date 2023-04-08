import { Link } from 'react-router-dom';
import { Container, Wrapper} from './styles';


export function Cards(props){
    return(
        <Container>
            <Wrapper>
            <h1>{props.title}</h1>
           
            <Link to="/Termo">CONCORDAR E ASSINAR</Link>
            </Wrapper>  
        </Container>

        
    )
}