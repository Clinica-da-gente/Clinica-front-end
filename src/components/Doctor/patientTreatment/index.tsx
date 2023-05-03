import { Container } from "./styled";

const PatientTreatment = ({ value, openModalConsult }: any) => {
  return (
    <Container onClick={() => openModalConsult(value)}>
      <span>
        {value.data} - {value.medico}
      </span>
    </Container>
  );
};

export default PatientTreatment;
