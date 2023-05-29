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
  background: #d9d9d9;
  border-radius: 8px;
  padding: 10px 16px;
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
  padding: 0px 0px 10px;
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  button {
    border: none;
    width: 78px;
    height: 32px;
    border-radius: 20px;
    cursor: pointer;
    background-color: gray;
    color: #fff;

    &:hover {
      filter: brightness(90%);
      transform: scale(1.05);
    }
  }

  .yes_button {
    background-color: green;
  }
`;
