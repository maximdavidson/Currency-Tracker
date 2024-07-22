import React, { createContext, useState } from 'react';

export const SuccessMessageContext = createContext();

export const SuccessMessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const filteredMessages = messages.filter(
      (msg) => !msg.startsWith('The graph has been successfully built!'),
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
