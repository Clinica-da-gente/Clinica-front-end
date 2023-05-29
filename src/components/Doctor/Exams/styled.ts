import styled from "styled-components";

export const ContainerHeader = styled.div`
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

  div {
    width: 100%;

    input {
      border: 1px solid lightgray;
      border-radius: 8px;
      width: calc(100% - 16px);
      height: 40px;
      padding: 8px;
      margin: 8px;
      font-size: 16px;

      &:hover {
        border-color: gray;
      }

      &:focus-visible {
        outline: none;
        border-color: black;
      }
    }
  }

  h4 {
    margin: 0px;
    padding: 12.5px 12px;
    font-size: 20px;
    border-bottom: 1px solid lightgray;
    font-weight: normal;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p {
    margin: 10px auto;
  }

  .div_input {
    position: relative;

    ul {
      display: none;
    }

    &:focus-within {
      ul {
        display: block;
      }
    }
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
