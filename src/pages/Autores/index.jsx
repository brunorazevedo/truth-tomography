import { Link } from "react-router-dom";
import { Center } from "../../components/Center";
import { Container, BgAutores, BgInfo, InfoAutores, SectionTermo } from "./styles";
import Avatar1 from "/src/assets/avatarT.svg";
import Avatar2 from "/src/assets/avatarC.svg";

export function Autores() {
  const name1 = "Thales Castro Lacerda"

  return (
    <div>
      <Container>
        <Center>
          <h1>TRUTH TOMOGRAPHY</h1>

          <h3>
            <Link to="/"> PÁGINA INICIAL</Link>
          </h3>
        </Center>
      </Container>

      <SectionTermo>
        <h1>AUTORES</h1>
      </SectionTermo>

      <BgAutores>
        <Center>
          <BgInfo>
          
            <InfoAutores>
            <img src={Avatar1} alt="Img pessoal Thales Castro" />
              <h2>{name1}</h2>
              <p>Subtitle</p>

              <Link to="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2610244E8&tokenCaptchar=03AKH6MRFjbboZn-t07zfrxaFavbBpCQ4760Z_cIMTnzkle8kbRjS53UjMLCRd5fdIIllOBzAZV7TniGG0Lkc-3yieCpQmg_A75kKtNv1dohSAsYfoOuBsti9zVJ3G4kYXcL8LtkBNn9ehg42Nqs3LI9fNljVf2KTVRox7m8l2aTuvKsPCuW4TJrpv3w3oVb51SIyRW2lBRtQi-wW5SEaRsRgkUs7m_Ce720x-UCdyCU9jurj50Rpadsh3NgGUQ87swca54MSokruc9GXYU9zdI5wW8vOFynYhmouB0RepEnwzoa6KEEwFw2Ye1KZqTVEQoUiDopXGQCTw3D6ebDCCpF0yTP1rvsdALMonL08sqvz1lFdj1sNzKxusvT2M_dEA6QIwepAVDkNouDCSs7mafEe_CBKtLiH-pV1ZNl6mgg8ZEVoxHOgwTYJ5yJKqTxAvrBc9aDCLVp3MXyONdwwDYbkIeEpV_JIVws1dHhERIqcldvTvRlEsb9ZY3wve8ywI-b_Ob3nB3bMyG6ggPjLi0qnPaTwW0ql9xA"> Acessar Currículo Lattes </Link>
            </InfoAutores>

            <InfoAutores>
            <img src={Avatar2} alt="Img pessoal Carlos Renato" />
              <h2 className="autor">Carlos Renato Rocha Nascimento</h2>
              <p>Subtitle</p>

              <Link to="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2610244E8&tokenCaptchar=03AKH6MRFjbboZn-t07zfrxaFavbBpCQ4760Z_cIMTnzkle8kbRjS53UjMLCRd5fdIIllOBzAZV7TniGG0Lkc-3yieCpQmg_A75kKtNv1dohSAsYfoOuBsti9zVJ3G4kYXcL8LtkBNn9ehg42Nqs3LI9fNljVf2KTVRox7m8l2aTuvKsPCuW4TJrpv3w3oVb51SIyRW2lBRtQi-wW5SEaRsRgkUs7m_Ce720x-UCdyCU9jurj50Rpadsh3NgGUQ87swca54MSokruc9GXYU9zdI5wW8vOFynYhmouB0RepEnwzoa6KEEwFw2Ye1KZqTVEQoUiDopXGQCTw3D6ebDCCpF0yTP1rvsdALMonL08sqvz1lFdj1sNzKxusvT2M_dEA6QIwepAVDkNouDCSs7mafEe_CBKtLiH-pV1ZNl6mgg8ZEVoxHOgwTYJ5yJKqTxAvrBc9aDCLVp3MXyONdwwDYbkIeEpV_JIVws1dHhERIqcldvTvRlEsb9ZY3wve8ywI-b_Ob3nB3bMyG6ggPjLi0qnPaTwW0ql9xA"> Acessar Currículo Lattes </Link>
            </InfoAutores>
          </BgInfo>
        </Center>
      </BgAutores>
    </div>
  );
}
