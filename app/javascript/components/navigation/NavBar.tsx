import React, { useState, ReactNode } from "react";
import { NavBarExternalLink } from "./NavBarExternalLink";
import { NavBarLink } from "./NavBarLink";
import { Routes } from "components/Router";
import { AppPaths, AuthDetails } from "components/AppConstants";

interface NavBarProps {
  authDetails: AuthDetails;
  paths: AppPaths;
}

export function NavBar(props: NavBarProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  console.log("[NavBar]", props);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleClick() {
    toggleIsOpen();
  }

  function svgIconPath() {
    if (isOpen) {
      return (
        <path
          fillRule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      );
    } else {
      return (
        <path
          fillRule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      );
    }
  }

  function generateLogoutButton(): ReactNode {
    return (
      <div className="block sm:inline-block px-2 py-1 mt-1 text-white rounded-md hover:bg-gray-800">
        <a rel="nofollow" data-method="delete" href={props.paths.signOut}>
          Sign out
        </a>
      </div>
    );
  }

  // NOTE: mr-auto pushes the bar left. Remove mr-auto for right aligned navs
  const navClasses = ["px-2", "pt-2", "pb-3", "sm:flex", "mr-auto"];
  const toolbarClasses = ["px-2", "pt-2", "pb-3", "sm:flex"];
  if (!isOpen) {
    navClasses.push("hidden");
    toolbarClasses.push("hidden");
  }

  const authenticationButton = props.authDetails.isSignedIn ? (
    generateLogoutButton()
  ) : (
    // <NavBarExternalLink name="Login" href={props.paths.signIn} />
    <NavBarLink name="Sign In" route={Routes.Auth.SignIn} />
  );

  const navBar = (
    <>
      <div className={navClasses.join(" ")}>
        <NavBarLink name="Home" route={Routes.Home} />
        <NavBarLink name="Test" route={Routes.Test} />
      </div>
      <div className={toolbarClasses.join(" ")}>{authenticationButton}</div>
    </>
  );

  return (
    <div id="Router" className="sm:flex sm:justify-between bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-white font-bold">Noosphere</div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={handleClick}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {svgIconPath()}
            </svg>
          </button>
        </div>
      </div>
      {navBar}
    </div>
  );
}
