import { Container, Wrapper, WrappersCards, Title } from "./styles";
import { Center } from "../../components/Center";
import { Cards } from "../../components/Cards";
import { CardsText } from "../../components/CardsText";
import { FooterCards } from "../../components/FooterCards";

export function ComoAcessar() {
  return (
    <Container id="comoAcessar">
      <Center>
        <Title>
        <h1>SE VOCÊ CONCORDAR COM A PARTICIPAÇÃO NA PESQUISA, VOCÊ DEVE:</h1>
        </Title>
        <WrappersCards>
          <Wrapper>
            <Cards
              title=" 1. Assinar o termo de consentimento e esclarecido"
            />

            <CardsText
              title="2. Acessar e visualizar as
              duas abas que
              demonstram um caso da
              sua especialidade (estática
              e dinâmica)"
            />

            <CardsText title="3. Acessar e visualizarduas abas (estática e dinâmica) de mais umaespecialidade. VOCÊ ESCOLHE!" />
          </Wrapper>
          <FooterCards />
          <p>
            *Se você não for especialista em Endodontia, Cirurgia,
            Implantodontia, e Ortodontia ou não quiser participar da nossa
            pesquisa, ainda assim você está mais do que convidado a navegar
            pelas abas que demonstram os casos de tomografia estática e dinâmica
            e aprender um pouco mais sobre essa forma de visualização das
            imagens de TCFC. Reiteramos que nosso objetivo é disseminar o
            conhecimento!!
          </p>
        </WrappersCards>
      </Center>
    </Container>
  );
}
