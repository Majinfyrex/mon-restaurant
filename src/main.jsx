import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'
import { FilterProvider } from './context/FilterContext'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </StrictMode>,
)
