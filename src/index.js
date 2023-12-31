import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';

import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);




