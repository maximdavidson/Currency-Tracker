import React, { useContext } from 'react';
import SuccessMessageContext from '@context/SuccessMessageContext';
import { Message } from './styles';

const SuccessMessage = () => {
  const { messages } = useContext(SuccessMessageContext);

  return (
    <>
      {messages.map((message, index) => (
        <Message key={index}>{message}</Message>
      ))}
    </>
  );
};

export default SuccessMessage;
