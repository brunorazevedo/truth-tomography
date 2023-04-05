import { Container, BgText } from "./styles";
import { Center } from "../../components/Center";
import { Title } from "../../components/Title";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function Apresentacao() {
  return (
    <Container id="apresentacao">
      <Center>
        <Title 
        data={{ title: "Apresentação" }}
        backgroundColor='#002E4F' />
        <BgText>
          <p>
            Olá, Você está visitando <strong>TRUTH TOMOGRAPHY</strong>! Um website,
            desenvolvido por dois alunos de mestrado que tem o objetivo de
            apresentar e divulgar uma nova maneira do cirurgião-dentista receber
            e interpretar os exames de tomografia computadorizada de feixe
            cônico (TCFC): vídeos em formato MP4.
          </p>
          <Link to="/tomografias"> <Button title="ACESSAR TOMOGRAFIAS" /> </Link>
        </BgText>
      </Center>
    </Container>
  );
}
