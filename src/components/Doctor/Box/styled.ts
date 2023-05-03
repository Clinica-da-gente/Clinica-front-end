import styled from "styled-components";

export const Container = styled.main`
  width: calc(100vw);
  height: calc(100vh - 68.5px);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  max-width: 1488px;
  border-radius: 8px;
  padding: 0px 35px 35px;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 8px 0px;
    font-weight: normal;
  }
`;
