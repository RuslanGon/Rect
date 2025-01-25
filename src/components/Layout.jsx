import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "../AppRouter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignedIn, selectUserData } from "../redux/auth/selectors.js";
import { apiLogOut } from "../redux/auth/operations.js";

const Layout = ({children}) => {
  const dispatch = useDispatch()
  const isSignedIn = useSelector(selectIsSignedIn)
  const userData = useSelector(selectUserData)

  const logOutButton = () => {
    dispatch(apiLogOut())
  }

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
          {isSignedIn?  <></>:<></>  }
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
          <div>
          <span>hello, {userData?.name || "Guest"}</span>
            <button onClick={logOutButton} type="button">LogOut</button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
