import { Link } from 'react-router-dom';
import { Container, Wrapper} from './styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export function Cards(props){
    return(
        <Container>
            <Wrapper>
            <h1>{props.title}</h1>
           <AnchorLink>
           <Link to="/Termo">CONCORDAR E ASSINAR</Link>
           </AnchorLink>
            </Wrapper>  
        </Container>
    )
}