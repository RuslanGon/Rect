import { NavLink } from "react-router-dom";
import css from "./AppRouter.module.css";
import clsx from "clsx";

const AppRouter = () => {

    const getNavLink = ({ isActive }) =>
        clsx(css.navLink, {
          [css.active]: isActive,})

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLink} to="/mailbox">MailBox</NavLink>
          <NavLink className={getNavLink} to="/products">Products</NavLink>
          <NavLink className={getNavLink} to="/search">Search</NavLink>
          <NavLink className={getNavLink} to="/cars">Cars</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default AppRouter;
