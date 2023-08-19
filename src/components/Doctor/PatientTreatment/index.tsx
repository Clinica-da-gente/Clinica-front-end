import { Container } from './styled';

const PatientTreatment = ({ value, openModalConsult }: any) => {
  return (
    <Container onClick={() => openModalConsult(value)}>
      <span>
        {value.data} - {value.medico?.infos_medico?.especialidade}
      </span>
    </Container>
  );
};

export default PatientTreatment;
