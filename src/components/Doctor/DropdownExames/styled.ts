import styled from "styled-components";

export const Container = styled.ul`
  position: absolute;
  top: 50px;
  left: 8px;
  width: calc(100% - 16px);
  border: 1px solid;
  border-radius: 4px;
  background-color: #fff;
  max-height: 200px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 2px;
  }

  li {
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }

    &:first-child {
      border-radius: 4px 4px 0 0;
    }

    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`;
