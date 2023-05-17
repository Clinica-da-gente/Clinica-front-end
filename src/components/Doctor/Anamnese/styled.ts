import styled from "styled-components";

export const CantainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    color: #ff6666;
    transition: 0.15s linear;

    &:hover {
      background-color: #ff6666;
      color: #fff;
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Content = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  h4 {
    margin: 0px;
    padding: 12.5px 12px;
    font-size: 20px;
    border-bottom: 1px solid lightgray;
    font-weight: normal;
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTextarea = styled.textarea`
  resize: none;
  flex: 1;
  border: none;
  border-radius: 0px 0px 8px 8px;
  font-size: 16px;
  padding: 8px 12px;

  &:focus-visible {
    outline: none;
  }
`;

export const ContentButtons = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 16px;
`;
