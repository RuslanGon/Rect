import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./components/Layout.jsx";
import { useDispatch } from "react-redux";
import { apiRefreshUser } from "./redux/auth/operations.js";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const MailBoxPage = lazy(() => import("./pages/MailBoxPage.jsx"))
const ProductsPage = lazy(() => import("./pages/ProductsPage.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const CarsPage = lazy(() => import("./pages/CarsPage.jsx"));
const CounterPage = lazy(() => import("./pages/CounterPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage.jsx"));
const CarsDetailsPage = lazy(() => import("./pages/CarsDetailsPage.jsx"));
const Loader = lazy(() => import("./components/Loader.jsx"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));

const AppRouter = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(apiRefreshUser())
  },[dispatch])

  return (
    <Layout>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registor" element={<RestrictedRoute><RegistrationPage />                     </RestrictedRoute>} />
          <Route path="/login" element={<RestrictedRoute><LoginPage /> </RestrictedRoute>} />
          <Route path="/contacts" element={<PrivateRoute><ContactsPage/> </PrivateRoute>} />
          <Route path="/mailbox" element={<PrivateRoute><MailBoxPage /> </PrivateRoute>} />
          <Route path="/counter" element={<PrivateRoute><CounterPage /> </PrivateRoute>} />
          <Route path="/products" element={<PrivateRoute><ProductsPage /> </PrivateRoute>} />
          <Route path="/products/:productId/*" element={<PrivateRoute><ProductDetailsPage /> 
          </PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
          <Route path="/cars" element={<PrivateRoute><CarsPage /> </PrivateRoute>} />
          <Route path="/cars/:carId/*" element={<PrivateRoute><CarsDetailsPage /> </PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
        </Layout>
  );
};

export default AppRouter;
