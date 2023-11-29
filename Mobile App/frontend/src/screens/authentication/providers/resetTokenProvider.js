import React, { useState } from 'react';
import ResetTokenContext from '../context/resetToken';

const ResetTokenProvider = ({ children }) => {
  const [resetToken, setResetToken] = useState('');

  const setToken = (token) => {
    setResetToken(token);
  };

  return (
    <ResetTokenContext.Provider value={{ resetToken, setToken }}>
      {children}
    </ResetTokenContext.Provider>
  );
};

export default ResetTokenProvider;
