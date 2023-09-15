import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { CounterProvider } from "./context/CounterContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </CounterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
