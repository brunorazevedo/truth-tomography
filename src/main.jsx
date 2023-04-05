import React from "react";
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import  GlobalStyle from './styles/global';
import theme  from "./styles/theme";
import { AppRouter } from "./routes";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
