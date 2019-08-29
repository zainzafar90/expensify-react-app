import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" activeClassName="active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="active">
        Create
      </NavLink>
      <NavLink to="/help" activeClassName="active">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
