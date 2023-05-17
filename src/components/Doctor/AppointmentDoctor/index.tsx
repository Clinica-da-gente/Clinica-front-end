import { IConsult2 } from "../../../interfaces/Doctor";
import { useDoctor } from "../../../providers/doctor";
import { Container, Content } from "./styled";
import { useNavigate } from "react-router-dom";

const AppointmentDoctor = ({ consult }: any) => {
  const consulta: IConsult2 = consult;

  const navigate = useNavigate();
  const { changeConsultSelected } = useDoctor();

  const onClick = () => {
    changeConsultSelected(consult);
    navigate("/consult/" + consult._id);
  };

  return (
    <Container onClick={onClick}>
      <span>
        {consulta.horario.split(" ")[1]} - {consulta.paciente.nome} -{" "}
        {consulta.paciente.data_nascimento}
      </span>
      <Content color='blue' />
    </Container>
  );
};

export default AppointmentDoctor;
