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
  Alert,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type SignInFormValues = {
  emailAddress: string;
  password: string;
};

export function SignIn(): JSX.Element {
  const [formErrors, setFormErrors] = useState<
    DeepMap<SignInFormValues, FieldError>
  >();
  const { control, handleSubmit, formState } = useForm<SignInFormValues>();
  const classes = useStyles();

  const onSubmit: SubmitHandler<SignInFormValues> = async (
    data: SignInFormValues,
    event: React.BaseSyntheticEvent
  ) => {
    console.log("[handleOnSubmit]  data", data);
    console.log("[handleOnSubmit]  event", event);
    console.log("[handleOnSubmit]  formState", formState);
    const userCredential = {
      user_credential: {
        email: data.emailAddress,
        password: data.emailAddress,
      },
    };
    console.log("[handleOnSubmit]  userCredential", userCredential);
    return true;
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
          method="POST"
          acceptCharset="UTF-8"
          data-turbo="false"
        >
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
