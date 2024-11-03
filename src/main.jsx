import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Container/Home'
import GlobalStyles from './assets/Styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
