import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SnowProvider from './context/SnowProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import ProductProvider from './context/ProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <SnowProvider>
          <App />
        </SnowProvider>
      </ProductProvider>
    </Provider>
  </StrictMode>,
)
