import { useMemo, useState } from "react";
import Box from "../Box";
import Button from "../Button";
import { ContainerHeader, Container, Content, ContentButtons } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ExamListItem from "../ExamListItem";
import { CgClose } from "react-icons/cg";

const Exams = ({}: any) => {
  const [exams, setExams] = useState([{ id: "aa" }]);
  const navigate = useNavigate();
  const { id } = useParams();

  const addExam = (id: string) => {};

  const removeExam = (id: string) => {
    setExams(exams.filter((value) => value.id !== id));
  };

  const closeConsult = () => {
    localStorage.removeItem("@Doctor_textAnamnese");
    localStorage.removeItem("@Doctor_exams");
    navigate("/");
  };

  useMemo(() => {
    const exams = localStorage.getItem("@Doctor_exams");
    if (exams) {
      setExams(JSON.parse(exams));
    }
  }, []);

  return (
    <Box>
      <ContainerHeader>
        <h1>01/01/2000 - 09:00 - Paciente 1 - Exames </h1>
        <CgClose onClick={closeConsult} />
      </ContainerHeader>
      <Container>
        <Content>
          <input placeholder='Digite o nome do exame' />
          {exams.length > 0 ? (
            <ul>
              {exams.map((value) => (
                <ExamListItem
                  key={value.id}
                  onClick={() => removeExam(value.id)}>
                  EXAME 1 - 01/12/1900 - Dr Médico 1
                </ExamListItem>
              ))}
            </ul>
          ) : (
            <p>Sem exame selecionado</p>
          )}
        </Content>
        <Content>
          <h4>Ultimos exames solicitados</h4>
          <ul>
            <ExamListItem is_disable>
              EXAME 1 - 01/12/1900 - Dr Médico 1
            </ExamListItem>
            <ExamListItem is_disable>
              EXAME 1 - 01/12/1900 - Dr Médico 1
            </ExamListItem>
          </ul>
        </Content>
      </Container>
      <ContentButtons>
        <Button bgColor={"green"}>SALVAR</Button>
        <Button bgColor={"gray"}>RECEITA</Button>
        <Button
          onClick={() => navigate(`/consult/${id}/anamnese`)}
          bgColor={"#0062BC"}>
          ANAMNESE
        </Button>
      </ContentButtons>
    </Box>
  );
};

export default Exams;
