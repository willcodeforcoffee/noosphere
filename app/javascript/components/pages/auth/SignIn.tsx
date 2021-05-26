import React, { useState } from "react";
import { useSignInMutation } from "components/graphql/SchemaGenerated";
import { useAuthContext } from "components/providers/AuthProvider";
import { SignInForm, SignInFormValues } from "./components/SignInForm";

export function SignIn(): JSX.Element {
  const { signIn } = useAuthContext();
  const [signin, { data, loading, error }] = useSignInMutation();
  console.log("[onSubmit]", data, loading, error);

  const onSubmit = async (values: SignInFormValues) => {
    console.log("[onSubmit]", values);
    signin({
      variables: {
        emailAddress: values?.emailAddress,
        password: values?.password,
      },
    });
  };

  if (!loading && data?.signin?.authToken) {
    signIn({ token: data?.signin?.authToken });
    return <div>You have successfully signed in.</div>;
  }

  return (
    <SignInForm
      enableForm={!loading}
      errorMessage={error?.message}
      onSubmit={onSubmit}
    ></SignInForm>
  );
}
