import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const resetCounter = () => {
    setContador(0);
  };
  return (
    <CounterContext.Provider value={{ counter, setCounter, resetCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
