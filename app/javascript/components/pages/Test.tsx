/* eslint-disable no-console */
import { Heading } from "components/content";
import { Button, ButtonRow, Form, InputEmailAddress, InputPasswordControl, InputTextControl } from "components/forms";
import React, { FormEvent } from "react";
import { BreakpointDebugger } from "components/utils/BreakpointDebugger";

function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
  console.log("onSubmit", event);
}

function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  console.log("handleClick", event);
}

export function Test(): JSX.Element {
  console.log("Test!");
  return (
    <div id="Test">
      <BreakpointDebugger />

      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>

      <div className="lg:w-3/4">
        <Form name="Test Form" title="Form Title" onSubmit={handleOnSubmit}>
          <InputTextControl labelText="Simple Text Input" placeholder="Type something here..." />
          <InputEmailAddress labelText="Email Address Input" placeholder="test@example.com" />
          <InputPasswordControl labelText="Password Input" placeholder="type a p*ssw*rd" />
          <ButtonRow>
            <Button label="Primary" purpose="primary" onClick={handleClick} />
            <Button label="Danger" purpose="danger" onClick={handleClick} />
          </ButtonRow>
        </Form>
      </div>
    </div>
  );
}
