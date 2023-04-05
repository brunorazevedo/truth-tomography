import { Link } from 'react-router-dom';
import { Container } from './styles';

export function FooterCards(){
    return(
        <Container>
            <p>
            4. Após visualizar as abas tomografia estática e tomografia dinâmica da sua especialidade e de mais uma da sua escolha, responda à pesquisa que está no link  <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeggcxu9cGku9MjhRcUjLRCXdW3NfAhZTy6LV0HDfaxzhT_jQ/viewform" target="_blank"> PARTICIPAR DA PESQUISA </Link>. O preenchimento do questionário vai tomar pouco do seu tempo e vai nos ajudar a defender nosso trabalho de dissertação!
            </p>
        </Container>
    )
}