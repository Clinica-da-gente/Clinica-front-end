import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientTreatment from "../patientTreatment";
import { Container, Content } from "./styled";
import ModalConsult from "../modalConsult";
import { useDoctor } from "../../../providers/doctor";
import Box from "../Box";
import Button from "../Button";

const mock = [
  { data: "10/12/2021", medico: "Gastroenterologista" },
  { data: "10/12/2023", medico: "Ginecologista" },
  { data: "10/12/2022", medico: "Gastroenterologista" },
  { data: "10/12/2020", medico: "Ginecologista" },
  { data: "09/09/2021", medico: "Gastroenterologista" },
  { data: "10/12/2021", medico: "Ginecologista" },
];

const ConfirmConsult = () => {
  const [openModal, setOpenModal] = useState(false);
  const { changeConsultSelected, consultSelected } = useDoctor();
  const navigate = useNavigate();

  const changeModalConsult = () => {
    setOpenModal(!openModal);
  };

  const attendConsult = () => {
    console.log("AA");
    navigate(`/consult/${consultSelected!.id}/anamnese`);
  };

  const closeCurrentConsultSelected = () => {
    changeConsultSelected(undefined);
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("@UserToken")) {
      return navigate("/");
    }
  }, []);
  return (
    <Box>
      <h1>01/01/2023 - 09:00 - Paciente 1</h1>
      <Container>
        <h3>Ultimos atendimentos</h3>
        <Content>
          {mock.map((value, index) => (
            <PatientTreatment
              key={index}
              value={value}
              openModalConsult={changeModalConsult}
            />
          ))}
        </Content>
        <div>
          <Button onClick={() => attendConsult()} bgColor={"green"}>
            ATENDER
          </Button>
          <Button onClick={closeCurrentConsultSelected} bgColor={"gray"}>
            FECHAR
          </Button>
        </div>
      </Container>
      {openModal && <ModalConsult closeModalConsult={changeModalConsult} />}
    </Box>
  );
};

export default ConfirmConsult;
