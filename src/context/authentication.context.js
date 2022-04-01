import React, { createContext, useContext, useReducer } from "react";
import { AuthenticationReducer, initialState } from "../reducers/authentication.reducer";


const AuthenticationContext = createContext({});
const AuthenticationDispatchContext = createContext({});

export function useAuthenticationState() {
  const context = useContext(AuthenticationContext);
  if (!context) throw new Error('useAuthenticationState must be used within a AuthProvider');

  return context;
}

export function useAuthenticationDispatch() {
  const context = useContext(AuthenticationDispatchContext);
  if (!context) throw new Error('useAuthenticationDispatch must be used within a AuthProvider');

  return context;
}

export function AuthenticationProvider({ children }) {
  const [user, dispatch] = useReducer(AuthenticationReducer, {}, initialState);

  return (
    <AuthenticationContext.Provider value={ user }>
      <AuthenticationDispatchContext.Provider value={ dispatch }>
        { children }
      </AuthenticationDispatchContext.Provider>
    </AuthenticationContext.Provider>
  );
};