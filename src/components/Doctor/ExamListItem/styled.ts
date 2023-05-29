import styled from "styled-components";

export const Container1 = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 2px 8px;
  border-radius: 4px;
`;
export const Container2 = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 2px 8px;
  border-radius: 4px;

  &:hover {
    background-color: lightgray;

    svg {
      display: block;
    }
  }

  svg {
    display: none;
    width: 24px;
    height: 24px;
    color: #cc0000;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #cc0000;
      color: #fff;
    }
  }
`;
