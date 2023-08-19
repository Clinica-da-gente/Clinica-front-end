import { IConsult2 } from '../../../interfaces/Doctor';
import { useDoctor } from '../../../providers/doctor';
import { Container, Content } from './styled';
import { useNavigate } from 'react-router-dom';

const AppointmentDoctor = ({ consult }: any) => {
  const consulta: IConsult2 = consult;

  const navigate = useNavigate();
  const { changeConsultSelected } = useDoctor();

  const onClick = () => {
    changeConsultSelected(consult);
    navigate('/consult/' + consult._id);
  };

  return (
    <Container onClick={onClick}>
      <span>
        {consulta.horario} - {consulta.paciente.nome} -{' '}
        {consulta.paciente.data_nascimento}
      </span>
      <Content
        color={
          consult.status == 'agendado'
            ? 'whitesmoke'
            : consult.status == 'ausente'
              ? 'red'
              : consult.status == 'atendido'
                ? 'green'
                : consult.status == 'confirmado'
                  ? 'yellow'
                  : 'blue'
        }
      />
    </Container>
  );
};

export default AppointmentDoctor;
