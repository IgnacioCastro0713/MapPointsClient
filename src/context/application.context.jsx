import React, { createContext, useContext, useMemo, useReducer } from "react";
import { AuthenticationReduce, initialAuthState } from "../reducers/authentication.reduce";
import { alertReducer, initialAlertState } from "../reducers/alert.reduce";


const ApplicationContext = createContext({});
const ApplicationDispatchContext = createContext({});

export function useApplicationState() {
  const context = useContext(ApplicationContext);
  if (!context) throw new Error('useApplicationState must be used within a ApplicationProvider');

  return context;
}

export function useApplicationDispatch() {
  const context = useContext(ApplicationDispatchContext)
  if (!context) throw new Error('useApplicationDispatch must be used within a ApplicationProvider');

  return context
}

export function ApplicationProvider({ children }) {
  const [auth, authDispatch] = useReducer(AuthenticationReduce, {}, initialAuthState)
  const [alert, alertDispatch] = useReducer(alertReducer, {}, initialAlertState)

  const combinedState = useMemo(() => ({ auth, alert, }), [auth, alert]);
  const combinedDispatch = useMemo(() => ({ authDispatch, alertDispatch }), [authDispatch, alertDispatch])

  return (
    <ApplicationContext.Provider value={ combinedState }>
      <ApplicationDispatchContext.Provider value={ combinedDispatch }>
        { children }
      </ApplicationDispatchContext.Provider>
    </ApplicationContext.Provider>
  )
}