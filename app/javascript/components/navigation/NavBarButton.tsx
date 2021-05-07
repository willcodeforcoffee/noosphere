import React, { ReactNode } from "react";

export interface NavBarButtonProps {
  name: string;
  onClick: () => void;
  children?: ReactNode;
}

export function NavBarButton(props: NavBarButtonProps): JSX.Element {
  return (
    <button
      type="button"
      name={props.name}
      onClick={props.onClick}
      className="block sm:inline-block px-2 py-1 mt-1 text-white rounded-md hover:bg-gray-800"
    >
      {props.children || props.name}
    </button>
  );
}
