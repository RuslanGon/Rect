import { NavLink, Route, Routes } from "react-router-dom";
import css from "./AppRouter.module.css";
import clsx from "clsx";
import { Suspense, lazy } from "react";
import RegistrationPage from "./pages/RegistrationPage .jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";

// import MailBoxPage from "./pages/MailBoxPage.jsx";
// import ProductsPage from "./pages/ProductsPage.jsx";
// import SearchPage from "./pages/SearchPage.jsx";
// import CarsPage from "./pages/CarsPage.jsx";
// import CounterPage from "./pages/CounterPage.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import NotFoundPage from "./pages/NotFoundPage.jsx";
// import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
// import CarsDetailsPage from "./pages/CarsDetailsPage.jsx";

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

const AppRouter = () => {

    const getNavLink = ({ isActive }) =>
        clsx(css.navLink, {
          [css.active]: isActive,})

  return (
    <div>
      <header>
        <nav className={css.nav}>
        <NavLink className={getNavLink} to="/registor">
        Registration
          </NavLink>
          <NavLink className={getNavLink} to="/login">
        Login
          </NavLink>
          <NavLink className={getNavLink} to="/contacts">
          Contacts
          </NavLink>
        <NavLink className={getNavLink} to="/">
            Home Page
          </NavLink>
          <NavLink className={getNavLink} to="/mailbox">
            MailBox
          </NavLink>
          <NavLink className={getNavLink} to="/counter">
            Counter
          </NavLink>
          <NavLink className={getNavLink} to="/products">
            Products
          </NavLink>
          <NavLink className={getNavLink} to="/search">
            Search
          </NavLink>
          <NavLink className={getNavLink} to="/cars">
            Cars
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registor" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage/>} />
          <Route path="/mailbox" element={<MailBoxPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId/*" element={<ProductDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/cars/:carId/*" element={< CarsDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default AppRouter;
