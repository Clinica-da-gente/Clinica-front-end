import { useDoctor } from "../../../providers/doctor";
import { Container, Content, ContentHeader, ContentBody } from "./styled";
import { CgClose } from "react-icons/cg";

const ModalConsult = ({ closeModalConsult, value }: any) => {
  console.log(value);
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>
            {value.horario.split(" ").join(" - ")} - {value.medico.nome}
          </h3>
          <CgClose onClick={() => closeModalConsult()} />
        </ContentHeader>
        <ContentBody>
          <div>
            <h4>Anamnese da consulta</h4>
            <div>{value.anamnese ? <></> : <span>Nenhuma anamnese</span>}</div>
          </div>
          <div>
            <h4>Exames solicitados na consulta</h4>
            <div>
              {value.exames ? (
                <></>
              ) : (
                <span>Não á exames para essa consulta</span>
              )}
            </div>
          </div>
        </ContentBody>
      </Content>
    </Container>
  );
};

export default ModalConsult;
