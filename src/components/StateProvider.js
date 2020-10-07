// setup data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext(); //empty data layer

// Build a provider to wrap the entire app and give access it to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Inside of a component
export const useStateValue = () => useContext(StateContext);
