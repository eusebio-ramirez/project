import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'

import { ProductsProvider } from './context/ProductsProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <Navbar />
      <App />
      <Footer />
    </ProductsProvider>
  </StrictMode>,
)
