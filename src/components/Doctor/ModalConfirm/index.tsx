import { Container, Content, ContentBody, ContentHeader } from "./styled";

const ModalConfirm = ({ children, onConfirm, setIsOpenModal }: any) => {
  const onClickYes = () => {
    onConfirm();
  };

  const onClickNo = () => {
    setIsOpenModal(false);
  };

  return (
    <Container>
      <Content>
        <ContentHeader>{children}</ContentHeader>
        <ContentBody>
          <button onClick={onClickYes} className='yes_button'>
            SIM
          </button>
          <button onClick={onClickNo}>NÂO</button>
        </ContentBody>
      </Content>
    </Container>
  );
};

export { ModalConfirm };
