import { Container1, Container2 } from "./styled";
import { CgClose } from "react-icons/cg";

const ExamListItem = ({ value, is_disable, onClick }: any) => {
  return (
    <>
      {is_disable ? (
        <Container1>
          <span>{value.nome}</span>
        </Container1>
      ) : (
        <Container2>
          <span>{value.nome}</span>
          <CgClose onClick={onClick} />
        </Container2>
      )}
    </>
  );
};

export default ExamListItem;
