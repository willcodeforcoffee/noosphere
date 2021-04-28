/* eslint-disable no-console */
import { Heading } from "components/content";
import { Button, ButtonRow, Form, FormControlWrapper } from "components/forms";
import React, { FormEvent } from "react";
import { BreakpointDebugger } from "components/utils/BreakpointDebugger";
import { SubmitHandler, useForm } from "react-hook-form";

function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
  console.log("onSubmit", event);
}

function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  console.log("handleClick", event);
}

type TestFormValues = {
  emailAddress: string;
  password: string;
};

export function Test(): JSX.Element {
  console.log("Test");
  const { register, handleSubmit, formState } = useForm<TestFormValues>();
  const onSubmit: SubmitHandler<TestFormValues> = (
    data: TestFormValues
  ): void => {
    console.log("[handleOnSubmit]  data", data, formState);
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
          title="Form Title"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          {/* TODO: This should be the regualar input controls instead */}
          {/* <InputTextControl
            labelText=""
            placeholder=""
          />
          <InputEmailAddress
            labelText=""
            placeholder="test@example.com"
          />
          <InputPasswordControl
            labelText=""
            placeholder=""
          /> */}
          <FormControlWrapper labelText="Simple Text Input">
            <input
              type="text"
              placeholder="Type something here..."
              {...register("emailAddress", {
                required: "Please provide your email address",
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
              type="email"
              placeholder="type a p*ssw*rd"
              {...register("emailAddress", {
                required: "Please provide your email address",
              })}
            />
          </FormControlWrapper>
          <ButtonRow>
            <Button label="Primary" purpose="primary" onClick={handleClick} />
            <Button label="Danger" purpose="danger" onClick={handleClick} />
          </ButtonRow>
        </Form>
      </div>
    </div>
  );
}
