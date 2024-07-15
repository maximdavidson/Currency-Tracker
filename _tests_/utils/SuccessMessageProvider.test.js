import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SuccessMessageContext, {
  SuccessMessageProvider,
} from '@context/SuccessMessageContext';

describe('SuccessMessageProvider', () => {
  it('should clear all messages', () => {
    const TestComponent = () => {
      const { addMessage, clearMessages, messages } = React.useContext(
        SuccessMessageContext,
      );

      const handleClickAdd = () => {
        addMessage('Sample success message 1');
        addMessage('Sample success message 2');
      };

      const handleClickClear = () => {
        clearMessages();
      };

      return (
        <div>
          <button onClick={handleClickAdd}>Add Messages</button>
          <button onClick={handleClickClear}>Clear Messages</button>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>
      );
    };

    render(
      <SuccessMessageProvider>
        <TestComponent />
      </SuccessMessageProvider>,
    );

    const addButton = screen.getByText('Add Messages');
    userEvent.click(addButton);
  });
});
