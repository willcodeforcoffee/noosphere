import { Heading } from "components/content";
import { Button, ButtonRow, Form, InputEmailAddress, InputPasswordControl, InputTextControl } from "components/forms";
import * as React from "react";

export function SignIn(): JSX.Element {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log("[handleOnSubmit]");
    event.preventDefault();
  };
  return (
    <div id="SignIn">
      <Heading level={1}>Sign In</Heading>
      <div className="lg:w-3/4 xl:w-1/2">
        <Form name="Test Form" title="Form Title" onSubmit={handleOnSubmit}>
          <InputTextControl labelText="Simple Text Input" placeholder="Type something here..." />
          <InputEmailAddress labelText="Email Address Input" placeholder="test@example.com" />
          <InputPasswordControl labelText="Password Input" placeholder="type a p*ssw*rd" />
          <ButtonRow>
            <Button label="Login" purpose="primary" type="submit" />
          </ButtonRow>
        </Form>
      </div>
    </div>
  );
}
