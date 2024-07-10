import React, { useContext } from 'react';
import SuccessMessageContext from '../../context/SuccessMessageContext';
import './styles.css';

const SuccessMessage = () => {
  const { message } = useContext(SuccessMessageContext);

  return <div className="success-message">{message && <p>{message}</p>}</div>;
};

export default SuccessMessage;
