import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Produtos from './pages/Produtos/Produtos.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Produtos/>
  </StrictMode>,
)
