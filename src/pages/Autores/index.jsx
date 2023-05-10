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
              <p>Mestrando em Radiologia</p>

              <Link to="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2610244E8&tokenCaptchar=03AKH6MRFjbboZn-t07zfrxaFavbBpCQ4760Z_cIMTnzkle8kbRjS53UjMLCRd5fdIIllOBzAZV7TniGG0Lkc-3yieCpQmg_A75kKtNv1dohSAsYfoOuBsti9zVJ3G4kYXcL8LtkBNn9ehg42Nqs3LI9fNljVf2KTVRox7m8l2aTuvKsPCuW4TJrpv3w3oVb51SIyRW2lBRtQi-wW5SEaRsRgkUs7m_Ce720x-UCdyCU9jurj50Rpadsh3NgGUQ87swca54MSokruc9GXYU9zdI5wW8vOFynYhmouB0RepEnwzoa6KEEwFw2Ye1KZqTVEQoUiDopXGQCTw3D6ebDCCpF0yTP1rvsdALMonL08sqvz1lFdj1sNzKxusvT2M_dEA6QIwepAVDkNouDCSs7mafEe_CBKtLiH-pV1ZNl6mgg8ZEVoxHOgwTYJ5yJKqTxAvrBc9aDCLVp3MXyONdwwDYbkIeEpV_JIVws1dHhERIqcldvTvRlEsb9ZY3wve8ywI-b_Ob3nB3bMyG6ggPjLi0qnPaTwW0ql9xA"> Acessar Currículo Lattes </Link>
            </InfoAutores>

            <InfoAutores>
            <img src={Avatar2} alt="Img pessoal Carlos Renato" />
              <h2 className="autor">Carlos Renato Rocha Nascimento</h2>
              <p>Mestrando em Radiologia</p>

              <Link to="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4496546T7&tokenCaptchar=03AKH6MRHvZ0CWYlyg5_JYLG6LHJyyVhvOLngX8Acx-GpgrNnGv_TARnjA_mV9mrCiH3d_XjbX3QeagSVB7GPXJhWIq4_kKy59s78sA9PpLIpwbfo1blIiFaeRygU7pGGmULXDeXUW77Gks-ukOa6mspPz0K0Idmpa36-dlfWXjYIIv58ceEvRcbOL7hRwaFh_IDz4iAaWBsxZQmmv9TsxUzDiE6x7wDtHxCH12RQqk9iPS-kQ732gbuyobl3R45YdkUfPFQBRykBFjN4N3AUgL8xMhBM37xvDpm2unpVE1vtA8WX-vlm0pA9z6bRUIqmVKdjy2pYVRviSZkB2YD_vJ2MUHCpm6LNeAeHKWIafaiFPS2nNoEHSqGS7y4vlcJ85k28n82wd3WHccc5Ua4C6LNVsNeBNy-JUALz-PH7TdDlXMX5tXa9n4zJ8g-dwX_DReM5UNOhkh9iKDA0GUelpW2-m3umb98EhYtNmIl8v8jWaO8llVVL7Syo40ak1lcksyO7v7NcQqKIMtwVFD0nCRwRKT27TtrE7sQ"> Acessar Currículo Lattes </Link>
            </InfoAutores>
          </BgInfo>
        </Center>
      </BgAutores>
    </div>
  );
}
