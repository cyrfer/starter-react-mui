// inspired by
// https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
import React, {createContext, useContext, useReducer} from 'react';

export const Context = createContext();

export const Provider = ({reducer, initialState, children}) =>(
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useContextState = () => useContext(Context);
