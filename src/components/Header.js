import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
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
      <button onClick={startLogout}>Logout</button>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
