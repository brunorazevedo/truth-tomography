import { Link } from "react-router-dom";
import { RiArrowUpCircleFill } from "react-icons/ri";
import { Button } from "../Button";
import { Container, Nav } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Header() {
  return (
    <Container id="inicio">
      <p>Bem-vindo ao</p>
      <Link to="/">
        <h1>TRUTH TOMOGRAPHY</h1>
      </Link>

      <Nav>
        <ul>
          <li>
            <AnchorLink href="#apresentacao">APRESENTAÇÃO</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#comoFunciona">COMO FUNCIONA</AnchorLink>
          </li>
          <li>
            <Link to="/tomografias"> ACESSAR TOMOGRAFIAS</Link>
          </li>
          <li>
            <AnchorLink href="#comoAcessar">
              <Button title="QUERO PARTICIPAR DA PESQUISA"></Button>
            </AnchorLink>
          </li>

          <li>
            <Link to="/autores"> AUTORES</Link>
          </li>
        </ul>
      </Nav>

      <footer>
        <AnchorLink href="#inicio">
          <RiArrowUpCircleFill fontSize={32} />
        </AnchorLink>
      </footer>
    </Container>
  );
}
