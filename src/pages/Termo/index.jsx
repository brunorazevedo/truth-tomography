import {
  Container,
  BoxTermo,
  BgTermo,
  BgAssinatura,
  Footer,
  FooterScrol,
  SectionTermo,
} from "./styles";
import { Center } from "../../components/Center";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { RiArrowUpCircleFill } from "react-icons/ri";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Termo() {
  return (
    <div>
      <Container id="termo">
        <Center>
          <h1>TRUTH TOMOGRAPHY</h1>

          <h3>
            <Link to="/"> PÁGINA INICIAL</Link>
          </h3>
        </Center>
      </Container>

      <SectionTermo>
        <h2>TERMO </h2>
        <p>TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO</p>
      </SectionTermo>

      <BoxTermo>

        <BgAssinatura>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeggcxu9cGku9MjhRcUjLRCXdW3NfAhZTy6LV0HDfaxzhT_jQ/viewform"
            height="1100"
            width="600"
          />
        </BgAssinatura>
      </BoxTermo>

      <Footer>
        <Center>
          <p>APÓS CONCORDAR E ASSINAR O TERMO, CLIQUE NO LINK ABAIXO</p>
          <Link to="/tomografias">
            <Button title="ACESSAR TOMOGRAFIAS" />
          </Link>

          <FooterScrol>
            Ler o Temo
            <AnchorLink href="#termo">
              <RiArrowUpCircleFill fontSize={32} />
            </AnchorLink>
          </FooterScrol>
        </Center>
      </Footer>
    </div>
  );
}
