import { Container1, Container2 } from "./styled";
import { CgClose } from "react-icons/cg";

const ExamListItem = ({ children, is_disable, onClick }: any) => {
  return (
    <>
      {is_disable ? (
        <Container1>
          <span>{children}</span>
        </Container1>
      ) : (
        <Container2>
          <span>{children}</span>
          <CgClose onClick={onClick} />
        </Container2>
      )}
    </>
  );
};

export default ExamListItem;
