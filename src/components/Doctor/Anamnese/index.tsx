import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
import { useDoctor } from "../../../providers/doctor";
import api from "../../../services";
import { toast } from "react-hot-toast";
import { IAnamnese } from "../../../interfaces/Doctor";
import { Loader } from "../Loader";
import { ModalConfirm } from "../ModalConfirm";

const textAnamnese = `# HISTÓRIA PATOLÓGICA PREGRESSA:

# MEDICAMENTOS EM USO:

# CONSULTA ANTERIOR:

# RESULTADO DE EXAMES:

# CONDUTA:
`;

const Anamnese = () => {
  const [text, setText] = useState(
    localStorage.getItem("@Doctor_textAnamnese") || textAnamnese,
  );
  const [lastAnamnese, setLastAnamnese] = useState<IAnamnese | undefined>();
  const [isOpenModal, setIsOpenModal] = useState<boolean | undefined>();
  const navigate = useNavigate();
  const { id } = useParams();
  const { consultSelected } = useDoctor();

  const changeText = (text: string) => {
    localStorage.setItem("@Doctor_textAnamnese", text);
    setText(text);
  };

  const confirmCloseConsult = () => {
    if (!localStorage.getItem("@Doctor_postAnamnese")) {
      setIsOpenModal(true);
    } else {
      closeConsult();
    }
  };

  const onConfirm = () => {
    setIsOpenModal(false);
    closeConsult();
  };

  const closeConsult = async () => {
    localStorage.removeItem("@Doctor_postExams");
    localStorage.removeItem("@Doctor_textAnamnese");
    localStorage.removeItem("@Doctor_exams");
    localStorage.removeItem("@Doctor_postAnamnese");
    localStorage.removeItem("@Doctor_exams");
    navigate("/");
  };

  const verifyAnamnese = () => {
    if (localStorage.getItem("@Doctor_postAnamnese")) {
      toast.error("Anamnese dessa consulta ja salval!!", {
        duration: 3000,
        id,
      });
    } else if (text == textAnamnese) {
      toast.error("Preencha a anamnese antes de salvar!!", {
        duration: 2500,
        id,
      });
    } else {
      postAnamnese();
    }
  };

  const postAnamnese = async () => {
    const data: IAnamnese = {
      descricao: text,
      consulta_id: consultSelected!._id,
      paciente_id: consultSelected!.paciente_id,
    };
    await api.post("/anamneses", data).then(() => {
      setText(textAnamnese);
      setLastAnamnese(data);
      localStorage.removeItem("@Doctor_textAnamnese");
      localStorage.setItem("@Doctor_postAnamnese", "1");
    });
  };

  useMemo(() => {
    api
      .get(`/anamneses/last/${consultSelected?.paciente_id}`)
      .then(({ data }) => {
        if (data) {
          setLastAnamnese(data);
        } else {
          setLastAnamnese({});
        }
      });
  }, []);

  if (!localStorage.getItem("@UserToken")) {
    return <Navigate to={"/"} />;
  }

  return (
    <Box>
      <CantainerHeader>
        <h1>
          {consultSelected?.horario} - {consultSelected?.paciente.nome} -
          Anamnese
        </h1>
        <CgClose onClick={confirmCloseConsult} />
      </CantainerHeader>
      <Container>
        <Content>
          <h4>Anamnese da consulta</h4>
          <StyledTextarea
            value={text ? text : textAnamnese}
            onChange={(e) => changeText(e.target.value)}
            disabled={
              localStorage.getItem("@Doctor_postAnamnese") == "1" ? true : false
            }
          />
        </Content>
        <Content>
          <h4>Ultima Anamnese</h4>
          {lastAnamnese ? (
            <StyledTextarea
              value={
                lastAnamnese.descricao ? lastAnamnese.descricao : textAnamnese
              }
              disabled
            />
          ) : (
            <div>
              <Loader />
            </div>
          )}
        </Content>
      </Container>
      <ContentButtons>
        <Button onClick={verifyAnamnese} bgColor={"green"}>
          SALVAR
        </Button>
        <Button bgColor={"gray"}>RECEITA</Button>
        <Button
          onClick={() => navigate(`/consult/${id}/exams`)}
          bgColor={"#0062BC"}>
          EXAMES
        </Button>
      </ContentButtons>
      {isOpenModal && (
        <ModalConfirm onConfirm={onConfirm} setIsOpenModal={setIsOpenModal}>
          Gostaria de sair sem{" "}
          {text !== textAnamnese ? "salvar a" : "criar uma"} anamnese?
        </ModalConfirm>
      )}
    </Box>
  );
};

export default Anamnese;
