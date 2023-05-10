import  Accordion  from "../../components/Accordion";
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
              <Button title="QUERO PARTICIPAR DA PESQUISA"></Button>
            </AnchorLink>
       <Accordion />
       </BoxTomography>
    </Container>
  );
}
