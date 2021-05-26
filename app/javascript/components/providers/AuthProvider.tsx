import React, { ReactNode, useContext, useState } from "react";

type AuthInfo = {
  token?: string;
  username?: string;
};

type AuthContextInfo = {
  authInfo?: AuthInfo;
  signIn: (AuthInfo) => void;
  signOut: () => void;
};

const AuthContext = React.createContext<AuthContextInfo>({
  authInfo: undefined,
  signIn: () => {},
  signOut: () => {},
});
AuthContext.displayName = "AuthContext";

interface AuthProviderProps {
  children: ReactNode | ReactNode[];
}

const AuthProvider = (props: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthInfo>({
    token: undefined,
    username: undefined,
  });

  const signIn = (authInfo: AuthInfo) => {
    setAuthState(authInfo);
  };

  const signOut = () => {
    setAuthState({
      token: undefined,
      username: undefined,
    });
  };

  const authContextValue: AuthContextInfo = {
    authInfo: authState,
    signIn: signIn,
    signOut: signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

const useAuthInfo = () => {
  const { authInfo } = useContext(AuthContext);
  return authInfo;
};

export { AuthInfo, AuthProvider, useAuthContext, useAuthInfo };
