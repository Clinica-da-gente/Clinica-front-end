import { Container, Content } from "./styled";

const Box = ({ children }: any) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Box;
