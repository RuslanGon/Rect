import { NavLink, Route, Routes } from "react-router-dom";
import css from "./AppRouter.module.css";
import clsx from "clsx";
import MailBoxPage from "./pages/MailBoxPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CarsPage from "./pages/CarsPage.jsx";

const AppRouter = () => {

    const getNavLink = ({ isActive }) =>
        clsx(css.navLink, {
          [css.active]: isActive,})

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLink} to="/mailbox">
            MailBox
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
        <Routes>
          <Route path="/mailbox" element={<MailBoxPage />}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/cars" element={<CarsPage />}/>


        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
