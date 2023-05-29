import { useDoctor } from "../../../providers/doctor";
import { StyledTextarea } from "../Anamnese/styled";
import ExamListItem from "../ExamListItem";
import { Container, Content, ContentHeader, ContentBody } from "./styled";
import { CgClose } from "react-icons/cg";

const ModalConsult = ({ closeModalConsult, consultModal }: any) => {
  const { exams } = useDoctor();
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>
            {consultModal?.data} - {consultModal?.medico.nome}
          </h3>
          <CgClose onClick={() => closeModalConsult()} />
        </ContentHeader>
        <ContentBody>
          <div>
            <h4>Anamnese da consulta</h4>
            <div>
              {consultModal.anamnese ? (
                <StyledTextarea disabled>
                  {consultModal.anamnese.descricao}
                </StyledTextarea>
              ) : (
                <span>Nenhuma anamnese</span>
              )}
            </div>
          </div>
          <div>
            <h4>Exames solicitados na consulta</h4>
            <div>
              {consultModal.exames ? (
                consultModal.exames.exames.map((exam: any, index: number) => {
                  const result = exams?.find((value) => value._id == exam.id);
                  return <ExamListItem key={index} value={result} is_disable />;
                })
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
