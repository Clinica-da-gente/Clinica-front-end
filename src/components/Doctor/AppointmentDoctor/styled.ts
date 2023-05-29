import styled from "styled-components";

export const Container = styled.li`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;

  &:hover {
    background: darkgrey;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  background: ${(props) => props.color};
  border-radius: 25px;
  width: 30px;
  height: 30px;
`;
