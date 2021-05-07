/* eslint-disable no-console */
import { Heading } from "components/content";
import {
  Button,
  ButtonRow,
  Form,
  FormControlWrapper,
  FormError,
} from "components/forms";
import React, { FormEvent, useState } from "react";
import { BreakpointDebugger } from "components/utils/BreakpointDebugger";
import {
  DeepMap,
  FieldError,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { PushoverNotificationDocument } from "components/graphql/SchemaGenerated";
import { useMutation } from "@apollo/client";

function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  console.log("handleClick", event);
}

type TestFormValues = {
  textMessage: string;
  emailAddress: string;
  password: string;
};

export function Test(): JSX.Element {
  console.log("Test");
  const [formErrors, setFormErrors] = useState<
    DeepMap<TestFormValues, FieldError>
  >();

  const {
    register,
    handleSubmit,
    formState,
    getValues,
  } = useForm<TestFormValues>();

  const [sendMessage] = useMutation(PushoverNotificationDocument, {
    variables: { message: getValues().textMessage },
  });

  const onSubmit: SubmitHandler<TestFormValues> = (
    data: TestFormValues
  ): void => {
    console.log("[onSubmit]  data", data, getValues());
    sendMessage({ variables: { message: getValues().textMessage } });
  };

  const onInvalid: SubmitErrorHandler<TestFormValues> = (
    errors: DeepMap<TestFormValues, FieldError>
  ) => {
    console.log("[onInvalid]", errors);
    setFormErrors(errors);
  };

  return (
    <div id="Test">
      <BreakpointDebugger />

      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>

      <div className="lg:w-3/4">
        <Form
          name="Test Form"
          title="Form Title / Legend"
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <FormError<TestFormValues>
            message="Please correct the form errors"
            errors={formErrors}
          />

          <FormControlWrapper labelText="Simple Text Input">
            <input
              type="text"
              placeholder="Type something here..."
              {...register("textMessage", {
                required: "Please provide some text",
              })}
            />
          </FormControlWrapper>
          <FormControlWrapper labelText="Email Address Input">
            <input
              type="email"
              placeholder="test@example.com"
              {...register("emailAddress", {
                required: "Please provide your email address",
              })}
            />
          </FormControlWrapper>
          <FormControlWrapper labelText="Password Input">
            <input
              type="password"
              placeholder="type a p*ssw*rd"
              {...register("password", {
                required: "Please provide your password",
              })}
            />
          </FormControlWrapper>
          <ButtonRow>
            <Button label="Primary" purpose="primary" onClick={handleClick} />
            <Button label="Danger" purpose="danger" onClick={handleClick} />
            <Button label="Submit" type="submit" purpose="primary" />
          </ButtonRow>
        </Form>
      </div>
    </div>
  );
}
