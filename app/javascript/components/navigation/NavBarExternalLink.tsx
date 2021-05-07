import React, { ReactNode } from "react";

export interface NavBarExternalLinkProps {
  name: string;
  href: string;
  children?: ReactNode;
}

export function NavBarExternalLink(props: NavBarExternalLinkProps): JSX.Element {
  return (
    <div className="block sm:inline-block px-2 py-1 mt-1 text-white rounded-md hover:bg-gray-800">
      <a href={props.href} className="font-semibold">
        {props.children || props.name}
      </a>
    </div>
  );
}
