import { IExame } from '../../../interfaces/Doctor';
import { Container } from './styled';

const DropdownExames = ({ exames, addExam }: any) => {
  return (
    <Container>
      {exames.map((value: IExame) => (
        <li key={value._id} onMouseDown={() => addExam(value._id)}>
          {value.nome}
        </li>
      ))}
    </Container>
  );
};

export { DropdownExames };
