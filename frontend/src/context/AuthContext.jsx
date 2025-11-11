import React, { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  token: localStorage.getItem('access_token') || null
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('access_token', action.payload.token);
      if (action.payload.refresh) {
        localStorage.setItem('refresh_token', action.payload.refresh);
      }
      return { ...state, user: action.payload.user, token: action.payload.token };

    case 'LOGOUT':
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      return { ...state, user: null, token: null };

    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
