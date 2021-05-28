export interface AppPaths {
  graphql: string;
  signIn: string;
  signOut: string;
}

export interface AuthDetails {
  isSignedIn: boolean;
  username: string;
}

export interface AppConstants {
  env: string;
  authDetails: AuthDetails;
  paths: AppPaths;
}
