import { Container, BgText, BgCards, Center} from "./styles";
import { Title } from "../../components/Title";
import { CardView } from "../../components/CardView";
import { CardViewNote } from "../../components/CardViewNote";
import { Link } from "react-router-dom";


export function ComoFunciona() {
  return (
    <Container id="comoFunciona">
      <Center>
      <Title data={{ title: "Como Funciona?" }} backgroundColor="#002E4F" />
        
        <BgText>
          <p>
            Os vídeos, em formato mp4, são gravados pelo radiologista
            odontológico, e visam explicar de forma detalhada a
            interpretação do caso em questão. Além do caráter informativo do
            material, há também uma função educativa, uma vez que nosso
            objetivo é estimular o cirurgião-dentista a navegar pelos arquivos
            de tomografia computadorizada e perceber que, por meio dessa
            interpretação dinâmica, novas possibilidades poderão surgir e os
            exames tomográficos poderão ser aproveitados na sua totalidade.
          </p>
        </BgText>

        <BgText>
         <h3>Navegue pelo nosso site e entenda como a <span>TRUTH TOMOGRAPHY</span> pode agregar a sua prática clínica.</h3>

        <p className="teste"> Além disso, você que é especialista em Endodontia, Cirurgia, Implantodontia e Ortodontia, está sendo gentilmente convidado a colaborar com a pesquisa científica que será a dissertação de mestrado de um dos nossos desenvolvedores.
        
          </p>
        </BgText>
      </Center>
    </Container>
  );
}
