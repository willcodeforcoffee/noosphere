import { AuthDetails } from "components/AppConstants";
import React, { ReactNode, useContext, useState } from "react";

const AuthContext = React.createContext<AuthDetails>({
  isSignedIn: false,
});
AuthContext.displayName = "AuthContext";

interface AuthProviderProps {
  authDetails: AuthDetails;
  children: ReactNode | ReactNode[];
}

const AuthProvider = (props: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={props.authDetails}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
