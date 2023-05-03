import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    padding: 8px 16px;
    font-weight: normal;
    border-bottom: 1px solid lightgray;
  }

  div {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-top: 1px solid lightgray;
  }
`;

export const Content = styled.ul`
  flex: 1;
  margin: 0px;
  padding: 8px 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 16px;
`;
