import React from 'react';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ReactDOM from 'react-dom/client';
import App from '../src/App.tsx';
import reportWebVitals from './reportWebVitals';
import { Theme } from "../src/Theme.ts";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log = function(){};
console.log = console.warn = console.error = () => {};

root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();