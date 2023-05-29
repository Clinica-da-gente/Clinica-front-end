import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import PatientTreatment from "../PatientTreatment";
import { Container, Content } from "./styled";
import ModalConsult from "../ModalConsult";
import { useDoctor } from "../../../providers/doctor";
import Box from "../Box";
import Button from "../Button";
import api from "../../../services";
import { Loader } from "../Loader";
import { ILastExames } from "../../../interfaces/Doctor";

const ConfirmConsult = () => {
  const [openModal, setOpenModal] = useState(false);
  const [consultModal, setConsultModal] = useState({});
  const [latestConsults, setLatestConsults] = useState<
    undefined | ILastExames[]
  >();
  const { changeConsultSelected, consultSelected } = useDoctor();
  const navigate = useNavigate();

  const changeModalConsult = (value: any) => {
    setConsultModal(value);
    setOpenModal(!openModal);
  };

  const attendConsult = async () => {
    api.patch(`/consultas/${consultSelected!._id}`, { status: "atendido" });
    navigate(`/consult/${consultSelected!._id}/anamnese`);
  };

  const closeCurrentConsultSelected = () => {
    changeConsultSelected(undefined);
    navigate("/");
  };

  useMemo(() => {
    api
      .get(`/consultas/${consultSelected?.paciente._id}/latest`)
      .then(({ data }) => setLatestConsults(data));
  }, [consultSelected]);

  if (!localStorage.getItem("@UserToken")) {
    return <Navigate to={"/"} />;
  }

  return (
    <Box>
      <h1>
        {consultSelected?.horario} - {consultSelected?.paciente.nome}
      </h1>
      <Container>
        <h3>Ultimos atendimentos</h3>
        {latestConsults ? (
          latestConsults.length ? (
            <Content>
              {latestConsults.map((value, index) => (
                <PatientTreatment
                  key={index}
                  value={value}
                  openModalConsult={changeModalConsult}
                />
              ))}
            </Content>
          ) : (
            <div className="div_not_consult">
              <p>Sem atendimentos anteriores!</p>
            </div>
          )
        ) : (
          <div className='div_loader'>
            <Loader />
          </div>
        )}

        <div className='div_buttons'>
          {consultSelected?.status == "sala de espera" && (
            <Button onClick={attendConsult} bgColor={"green"}>
              ATENDER
            </Button>
          )}
          <Button onClick={closeCurrentConsultSelected} bgColor={"gray"}>
            FECHAR
          </Button>
        </div>
      </Container>
      {openModal && (
        <ModalConsult
          consultModal={consultModal}
          closeModalConsult={changeModalConsult}
        />
      )}
    </Box>
  );
};

export default ConfirmConsult;
