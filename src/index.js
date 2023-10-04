import React from 'react';
import ReactDOM from 'react-dom/client';
import { E } from 'components/App';
import { Button } from 'components/Button';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <E />
    <Button />
  </React.StrictMode>
);
