import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  CantainerHeader,
  Container,
  Content,
  StyledTextarea,
  ContentButtons,
} from "./styled";
import Box from "../Box";
import Button from "../Button";
import { CgClose } from "react-icons/cg";

const textAnamnese = `# HISTÓRIA PATOLÓGICA PREGRESSA:

# MEDICAMENTOS EM USO:

# CONSULTA ANTERIOR:

# RESULTADO DE EXAMES:

# CONDUTA:
`;

const Anamnese = () => {
  const [text, setText] = useState(
    localStorage.getItem("@Doctor_textAnamnese") || "",
  );
  const navigate = useNavigate();
  const { id } = useParams();

  const changeText = (text: string) => {
    localStorage.setItem("@Doctor_textAnamnese", text);
    setText(text);
  };

  const closeConsult = () => {
    localStorage.removeItem("@Doctor_textAnamnese");
    localStorage.removeItem("@Doctor_exams");
    navigate("/");
  };

  return (
    <Box>
      <CantainerHeader>
        <h1>01/01/2000 - 09:00 - Paciente 1 - Anamnese </h1>
        <CgClose onClick={closeConsult} />
      </CantainerHeader>
      <Container>
        <Content>
          <h4>Anamnese da consulta</h4>
          <StyledTextarea
            value={text ? text : textAnamnese}
            onChange={(e) => changeText(e.target.value)}
          />
        </Content>
        <Content>
          <h4>Ultima Anamnese</h4>
          <StyledTextarea value={textAnamnese} disabled />
        </Content>
      </Container>
      <ContentButtons>
        <Button bgColor={"green"}>SALVAR</Button>
        <Button bgColor={"gray"}>RECEITA</Button>
        <Button
          onClick={() => navigate(`/consult/${id}/exams`)}
          bgColor={"#0062BC"}>
          EXAMES
        </Button>
      </ContentButtons>
    </Box>
  );
};

export default Anamnese;
