import styled from "styled-components";

export const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: color 0.3s linear;

  @keyframes color {
    from {
      background-color: rgba(0, 0, 0, 0.1);
    }

    to {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 108.5px);
  background: #d9d9d9;
  max-width: 1488px;
  border-radius: 8px;
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  animation: up 0.2s linear alternate;

  @keyframes up {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  h3 {
    margin: 0px;
    font-size: 24px;
    font-weight: normal;
  }

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

export const ContentBody = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  div {
    flex: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    h4 {
      margin: 0px;
      padding: 8px 12px;
      font-size: 20px;
      border-bottom: 1px solid lightgray;
      font-weight: normal;
    }

    div {
      flex: 1;
      border-radius: 0px 0px 8px 8px;
      padding: 8px 12px;
    }
  }
`;
