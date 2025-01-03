import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import AppDrinks from './AppDrinks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AppDrinks /> */}
  </StrictMode>,
)
