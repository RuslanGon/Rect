import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "../AppRouter.module.css";

const Layout = ({children}) => {

  const getNavLink = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLink} to="/">
            Home Page
          </NavLink>
          <NavLink className={getNavLink} to="/registor">
            Register
          </NavLink>
          <NavLink className={getNavLink} to="/login">
            Login
          </NavLink>
          <NavLink className={getNavLink} to="/contacts">
            Contacts
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
