import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from '../src/components/contexts/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
);

