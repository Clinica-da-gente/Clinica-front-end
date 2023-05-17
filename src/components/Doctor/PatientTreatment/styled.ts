import styled from "styled-components";

export const Container = styled.li`
  height: 50px;
  padding: 0px 20px;
  background-color: #ddeedd;
  text-align: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #bbddbb;
    transform: scale(1.01);
  }
`;
