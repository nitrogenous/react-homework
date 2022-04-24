import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../../routes";
import "./index.scss";

export const Layout = () => {
  return (
    <div className="navbar-wrapper">
      <ul className="navbar">
        {routes.map((route) => (
          <li key={route.name} className="navbar-item">
            <NavLink to={route.url} activeClassName="selected">
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
