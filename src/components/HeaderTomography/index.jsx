import { Container, Nav, TextInfo } from "./styles";
import { Center } from "../../components/Center";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function HeaderTomography() {
  return (
    <Container>
      <Center>
        <h1>TOMOGRAFIAS</h1>

        <Nav>
          <ul>
            <li>
              <Link to="/"> PÁGINA INICIAL</Link>
            </li>
            <li>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdCJ0-_-PUDitcubue9ZAGcWB05DjBMTayuXR5d_isu0qikWw/viewform?usp=sf_link" target="_blank">
                <Button title="QUERO PARTICIPAR DA PESQUISA"></Button>
              </Link>
            </li>
            <li>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdUJC-VbhYrwl7R4xrvjpNj8TTYDXhaa8NYt_bhU1qBN6JbTw/viewform?usp=sf_link" target="_blank"> AVALIAR O SITE</Link>
            </li>
          </ul>
        </Nav>

        <TextInfo>
          <p className="text-information">
            Escolha sua especialidade no modelo
            <strong> Tomografia Dinâmica </strong>e<strong> Tomografia Estática</strong>
          </p>
        </TextInfo>
      </Center>
    </Container>
  );
}
