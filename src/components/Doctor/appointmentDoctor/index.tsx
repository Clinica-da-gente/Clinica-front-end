import { useDoctor } from "../../../providers/doctor";
import { Container, Content } from "./styled";
import { useNavigate } from "react-router-dom";

const AppointmentDoctor = ({ consult }: any) => {
  const navigate = useNavigate();
  const { changeConsultSelected } = useDoctor();

  const onClick = () => {
    changeConsultSelected(consult);
    navigate("/consult/" + consult.id);
  };

  return (
    <Container onClick={onClick}>
      <span>
        {consult.horario} - {consult.paciente} - {consult.data_nascimento}
      </span>
      <Content color='blue' />
    </Container>
  );
};

export default AppointmentDoctor;
