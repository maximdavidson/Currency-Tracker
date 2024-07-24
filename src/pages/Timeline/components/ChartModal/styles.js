import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  position: relative;
  width: 80%;
  max-width: 500px;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1010;

  @media (max-width: 450px) {
    width: 60%;
    margin-left: 150px;
  }

  label {
    display: block;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.pSmall};
    color: rgba(65, 71, 64, 0.8);
  }

  input {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.pSmall};
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  input[readonly] {
    background-color: #f5f5f5;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const DateError = styled.div`
  color: red;
`;
