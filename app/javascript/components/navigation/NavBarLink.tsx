import React from "react";
import { NavLink } from "react-router-dom";

export interface NavBarLinkProps {
  name: string;
  route: string;
}

export function NavBarLink(props: NavBarLinkProps): JSX.Element {
  return (
    <div className="block sm:inline-block px-2 py-1 mt-1 text-white rounded-md hover:bg-gray-800">
      <NavLink className="" activeClassName="font-semibold" exact={true} to={props.route}>
        {props.name}
      </NavLink>
    </div>
  );
}
