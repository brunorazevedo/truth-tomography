import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";
import { HeaderTomography } from "../../components/HeaderTomography";
import { Container, BoxTomography } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "../../components/Button";


export function Tomografias() {
  return (
    <Container>
      <HeaderTomography />
      <BoxTomography>
        <AnchorLink href="#comoAcessar">
        </AnchorLink>
        <Accordion />
      </BoxTomography>
    </Container>
  );
}
