import { Heading } from "components/content";
import {
  Button,
  ButtonRow,
  Form,
  FormControlWrapper,
  FormError,
} from "components/forms";
import {
  DeepMap,
  FieldError,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import React, { useState } from "react";

type SignInFormValues = {
  emailAddress: string;
  password: string;
};

export function SignIn(): JSX.Element {
  const [formErrors, setFormErrors] = useState<
    DeepMap<SignInFormValues, FieldError>
  >();
  const { register, handleSubmit, formState } = useForm<SignInFormValues>();
  const onSubmit: SubmitHandler<SignInFormValues> = (
    data: SignInFormValues
  ): void => {
    console.log("[handleOnSubmit]  data", data, formState);
  };

  const onInvalid: SubmitErrorHandler<SignInFormValues> = (
    errors: DeepMap<SignInFormValues, FieldError>
  ) => {
    console.log("[onInvalid]", errors);
    setFormErrors(errors);
  };

  return (
    <div id="SignIn">
      <Heading level={1}>Sign In</Heading>
      <div className="lg:w-3/4 xl:w-1/2">
        <Form
          name="Sign in"
          title="Provide your application credentials"
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <FormError<SignInFormValues>
            message="Please correct the form errors"
            errors={formErrors}
          />
          <FormControlWrapper labelText="Email Address">
            <input
              type="email"
              placeholder="test@example.com"
              className="mt-1 block w-full rounded"
              {...register("emailAddress", {
                required: "Please provide your email address",
              })}
            />
          </FormControlWrapper>
          <FormControlWrapper labelText="Password">
            <input
              type="password"
              placeholder="****"
              className="mt-1 block w-full rounded"
              {...register("password", {
                required: "Please provide your password",
              })}
            />
          </FormControlWrapper>
          <ButtonRow>
            <Button label="Submit" purpose="primary" type="submit" />
          </ButtonRow>
        </Form>
      </div>
    </div>
  );
}
