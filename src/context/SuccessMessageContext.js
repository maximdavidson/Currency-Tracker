import React, { createContext, useState } from 'react';

const SuccessMessageContext = createContext();

export const SuccessMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const filteredMessages = messages.filter(
      (msg) => !msg.startsWith('График успешно построен!'),
    );
    setMessages([...filteredMessages, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <SuccessMessageContext.Provider
      value={{ messages, addMessage, clearMessages }}
    >
      {children}
    </SuccessMessageContext.Provider>
  );
};

export default SuccessMessageContext;
