import React, { useContext } from 'react';
import SuccessMessageContext from '../../context/SuccessMessageContext';
import { Message } from './styles';

const SuccessMessage = () => {
  const { messages } = useContext(SuccessMessageContext);

  return (
    <div className="success-message">
      {messages.map((message, index) => (
        <Message key={index}>{message}</Message>
      ))}
    </div>
  );
};

export default SuccessMessage;
