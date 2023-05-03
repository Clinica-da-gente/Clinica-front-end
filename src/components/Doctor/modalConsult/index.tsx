import { useDoctor } from "../../../providers/doctor";
import { Container, Content, ContentHeader, ContentBody } from "./styled";
import { CgClose } from "react-icons/cg";

const ModalConsult = ({ closeModalConsult }: any) => {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>01/01/2000 - 09:00 - Paciente 1 - Dr Médico 1 </h3>
          <CgClose onClick={() => closeModalConsult()} />
        </ContentHeader>
        <ContentBody>
          <div>
            <h4>Anamnese da consulta</h4>
            <div></div>
          </div>
          <div>
            <h4>Exames solicitados na consulta</h4>
            <div></div>
          </div>
        </ContentBody>
      </Content>
    </Container>
  );
};

export default ModalConsult;
