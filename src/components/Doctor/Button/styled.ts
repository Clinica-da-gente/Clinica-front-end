import styled from "styled-components";

export const Container = styled.button`
  width: 160px;
  height: 60px;
  background-color: ${(props: any) => props.bgColor};
  border: none;
  cursor: pointer;
  border-radius: 99px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;

  &:hover {
    transform: scale(103%);
    transition: 0.2s;
    filter: brightness(90%);
  }
`;
