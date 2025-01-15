import { NavLink } from "react-router-dom";
import css from "./AppRouter.module.css";
import clsx from "clsx";

const AppRouter = () => {

    const getNavLinkClassName = ({ isActive }) =>
        clsx(css.navLink, {
          [css.active]: isActive,})

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/mailbox">MailBox</NavLink>
          <NavLink className={getNavLinkClassName} to="/products">Products</NavLink>
          <NavLink className={getNavLinkClassName} to="/search">Search</NavLink>
          <NavLink className={getNavLinkClassName} to="/cars">Cars</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default AppRouter;
