import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n';
import { ModalProvider } from './context/ModalContext';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </HelmetProvider>
  </StrictMode>,
)
