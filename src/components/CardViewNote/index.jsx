import { RiStickyNoteLine } from 'react-icons/ri';
import { Container, Icone } from './styles'

export function CardViewNote(props){
    return(
        <Container >
            <Icone>
            <RiStickyNoteLine fontSize={28} backgroundColor='#0094FF'/>
            </Icone>
            <h1>{props.title}</h1>
            <p><i>{props.subtitle}</i></p>
        </Container>
    )
}