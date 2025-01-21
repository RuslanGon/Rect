import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
// import AppHTTPCars from './AppHTTPCars.jsx'
// import AppHTTPrequests from './AppHTTPrequests.jsx'
// import App from './App.jsx'
// import AppDrinks from './AppDrinks.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        {/* <AppDrinks /> */}
        {/* <AppHTTPrequests /> */}
        {/* <AppHTTPCars /> */}
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
