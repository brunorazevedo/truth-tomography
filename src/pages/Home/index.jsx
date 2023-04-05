import { Container } from './styles'
import { Header } from '../../components/Header';
import { Apresentacao } from '../../sections/Apresentacao';
import { ComoFunciona } from '../../sections/ComoFunciona';
import { ComoAcessar } from '../../sections/ComoAcessar';

export function Home(){
  return (
    <Container>
      <Header />
      <Apresentacao />
      <ComoFunciona />
      <ComoAcessar />
    </Container>
  )
} 