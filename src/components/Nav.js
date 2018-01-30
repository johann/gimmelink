import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="ui secondary menu">
      <NavLink exact to="/" className="item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/new" className="item" activeClassName="active">
        New
      </NavLink>
    </div>
  );
};

export default Nav;
