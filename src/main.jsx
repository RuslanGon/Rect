import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppHTTPCars from './AppHTTPCars.jsx'
// import AppHTTPrequests from './AppHTTPrequests.jsx'
// import App from './App.jsx'
// import AppDrinks from './AppDrinks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <AppDrinks /> */}
    {/* <AppHTTPrequests /> */}
    <AppHTTPCars />
  </StrictMode>,
)
