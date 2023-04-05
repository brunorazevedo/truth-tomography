import { RiMovieLine } from 'react-icons/ri';
import { Container, Icone } from './styles'

export function CardView(props){
    return(
        <Container >
            <Icone>
            <RiMovieLine fontSize={28}/>
            </Icone>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </Container>
    )
}