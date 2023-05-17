import { Container } from "./styled";

const PatientTreatment = ({ value, openModalConsult }: any) => {
  return (
    <Container onClick={() => openModalConsult(value)}>
      <span>
        {value.horario.split(" ")[0]} - {value.medico.especialidade}
      </span>
    </Container>
  );
};

export default PatientTreatment;
