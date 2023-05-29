import styled from "styled-components";

export const Content = styled.div`
  background: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-height: calc(100% - 62px);

  .no_consult_div {
    flex: 1;
    display: flex;

    p {
      margin: 10px auto;
    }
  }

  .legenda_div {
    padding: 10px 20px 20px;
    border-top: 1px solid lightgrey;

    h3 {
      margin: 0px 0px 8px;
    }

    .legenda_legendas {
      display: flex;
      gap: 16px;
      padding-left: 16px;

      div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }
`;

export const ContentUl = styled.ul`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  margin: 0;
  list-style: none;
  padding: 0;
  overflow-x: overlay;

  &:first-child {
    border-radius: 8px;
  }
`;
