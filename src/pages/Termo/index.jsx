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
      <BgTermo>
          <p>
            ANEXO A - TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE) – para o participante cirurgião dentista O Sr.(a) está sendo convidado(a) a participar da pesquisa “PERCEPÇÃO DOS CIRURGIÕES DENTISTAS SOBRE AS FORMAS DE APRESENTAÇÃO ESTÁTICA E DINÂMICA DOS EXAMES DE TOMOGRAFIA COMPUTADORIZADA DE FEIXE CÔNICO”. Nesta pesquisa pretendemos avaliar a percepção dos cirurgiões dentistas da cidade de Brasília sobre a forma de apresentação de tomografias computadorizadas por meio de vídeos Além disso, será desenvolvido para ser utilizado na divulgação dos vídeos de tomografia computadorizada de feixe cônico como uma possível forma de apresentação a ser empregada pelos centros de diagnóstico odontológico. A sua participação nesta pesquisa consistirá na visualização dos arquivos disponíveis no website e resposta a um questionário contendo 15 perguntas. A sua identidade será protegida, e o Sr(a) não será identificado em nenhuma das etapas da pesquisa. Para participar deste estudo o Sr.(a) não terá nenhum custo, nem receberá qualquer vantagem financeira. O Sr.(a) terá o esclarecimento sobre o estudo em qualquer aspecto que desejar e estará livre para participar ou recusar-se a participar e a qualquer tempo e sem quaisquer prejuízos, valendo a desistência a partir da data de formalização desta. A sua participação é voluntária, e a recusa em participar não acarretará qualquer penalidade ou modificação na forma em que o Sr. (a) é atendido (a) pelo pesquisador. Em caso de dúvidas, com respeito aos aspectos éticos desta pesquisa, você poderá consultar: Nome dos Pesquisadores Responsáveis: Carlos Renato Rocha Nascimento: e-mail: carrenato@hotmail.com Thales Lacerda de Castro: e-mail: thales2417@outlook.com CEP - Comitê de Ética Faculdade São Leopoldo Mandic Rua José Rocha Junqueira, 13 Campinas/SP, 13045-755 Telefone: (19) 3211-3600 e-mail: cep@slmandic.edu.br Comissão Nacional de Ética em Pesquisa (CONEP) Ministério da Saúde - Esplanada dos Ministérios Edifício Anexo Bl. G Ala B Sl. 13-B Brasília/DF, 70.058-900 Telefone: (61) 3315-2951 e-mail: conep@saude.gov.br O Sr.(a) terá acompanhamento e assistência durante toda a pesquisa e após o encerramento da mesma pela equipe contactante, inclusive com livre acesso aos resultados obtidos. Ao(À) Sr.(a) é garantido o direito à indenização diante de eventuais danos decorrentes da pesquisa. Os resultados obtidos pela pesquisa estarão à sua disposição quando finalizada. Seu nome ou qualquer outra forma que possa indicar sua participação não será liberado sem a sua permissão. O(A) Sr.(a) não será identificado(a) em nenhuma publicação que possa resultar. Fui informado(a) dos objetivos da pesquisa “PERCEPÇÃO DOS CIRURGIÕES DENTISTAS SOBRE AS FORMAS DE APRESENTAÇÃO ESTÁTICA E DINÂMICA DOS EXAMES DE TOMOGRAFIA COMPUTADORIZADA DE FEIXE CÔNICO”. de maneira clara e detalhada e esclareci minhas dúvidas. Sei que a qualquer momento poderei solicitar novas informações e modificar minha decisão de participar se assim o desejar. Declaro que concordo em participar desta pesquisa e que recebi uma via original deste termo de consentimento livre e esclarecido rubricada em todas as folhas e assinada por mim e pelo pesquisador. (Assinatura do participante) Responsabilidade do Pesquisador: Asseguro ter cumprido as exigências da resolução 466/2012 CNS/MS e complementares na elaboração do protocolo da pesquisa e na obtenção deste termo de consentimento livre e esclarecido. Asseguro, também, ter explicado e fornecido uma via deste documento ao participante. Informo que o estudo foi aprovado pelo CEP perante o qual o projeto foi apresentado e pela CONEP, quando pertinente. Comprometo-me a utilizar o material e os dados obtidos nesta pesquisa exclusivamente para as finalidades previstas neste documento ou conforme o consentimento dado pelo participante.
          </p>
        </BgTermo>

        <BgAssinatura>
          <iframe
            src="https://forms.gle/T8YhjxVVxXdDnqWd8"
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
