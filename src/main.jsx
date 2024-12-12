import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { ProdProvider } from './context/ProdProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProdProvider>
      <App />
    </ProdProvider>
  </StrictMode>,
)
