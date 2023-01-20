import { useReducer, createContext } from "react";
import { reducer } from "./reducer";

// initial state
const initialState = {
  number: 0,
};

// create context
const Context = createContext(0);

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(reducer), initialState); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
};

export { Context, Provider };