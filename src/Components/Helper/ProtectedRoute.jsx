import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

// Exibe a tela de login e o botão "Carregando..." enquanto faz o fetch
// const ProtectedRoute = ({ children }) => {
//   const { login } = React.useContext(UserContext);
//   return login ? children : <Navigate to="/login" />;
// };

// Exibe a tela de conta mas deixa vazia enquanto espera fazer o fetch
const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  console.log(login);
  if (login) {
    return children;
  } else if (!login) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
