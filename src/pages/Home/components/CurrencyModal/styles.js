import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  width: 400px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(204, 204, 204, 1);
  padding-bottom: 10px;
  margin-bottom: 10px;

  h2 {
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  padding: 10px 0;

  p {
    margin: 0;
    font-size: 16px;
  }

  select {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    padding: 8px 16px;
    background-color: rgba(105, 105, 105, 1);
    color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: rgba(51, 51, 51, 1);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
