import {
  Controller,
  DeepMap,
  FieldError,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useStyles } from "./SignInForm.style";

export type SignInFormValues = {
  emailAddress: string;
  password: string;
};

interface SignInFormProps {
  enableForm: boolean;
  errorMessage?: string;
  onSubmit: (SignInFormValues) => void;
}

export function SignInForm(props: SignInFormProps): JSX.Element {
  const [formErrors, setFormErrors] =
    useState<DeepMap<SignInFormValues, FieldError>>();
  const { control, handleSubmit, formState } = useForm<SignInFormValues>();
  const classes = useStyles();
  const onSubmit: SubmitHandler<SignInFormValues> = async (
    data: SignInFormValues,
    event: React.BaseSyntheticEvent
  ) => {
    console.log("[handleOnSubmit]  data", data);
    console.log("[handleOnSubmit]  event", event);
    console.log("[handleOnSubmit]  formState", formState);

    if (props.onSubmit) {
      await props.onSubmit(data);
    }
  };

  const onInvalid: SubmitErrorHandler<SignInFormValues> = async (
    errors: DeepMap<SignInFormValues, FieldError>
  ) => {
    console.log("[onInvalid]", errors);
    setFormErrors(errors);
  };

  return (
    <Container maxWidth="xs" component="main">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form
          id="new_user_credential"
          className={classes.form}
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          action="/user_credentials/sign_in"
          data-turbo="false"
        >
          {props.errorMessage && (
            <Alert severity="error">{props.errorMessage}</Alert>
          )}
          <Controller
            name="emailAddress"
            control={control}
            defaultValue=""
            rules={{
              required: "Please provide your email address",
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="user_credential[email]"
                autoComplete="email"
                autoFocus
                error={!!formErrors?.emailAddress}
                helperText={
                  formErrors?.emailAddress
                    ? formErrors?.emailAddress?.message
                    : null
                }
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Please provide your password",
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="user_credential[password]"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!formErrors?.password}
                helperText={
                  formErrors?.password ? formErrors?.password?.message : null
                }
                {...field}
              />
            )}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                name="user_credential[remember_me]"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
