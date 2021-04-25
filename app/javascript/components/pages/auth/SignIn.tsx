import { Heading } from "components/content";
import {
  Button,
  ButtonRow,
  Form,
  InputEmailAddress,
  InputPasswordControl,
  InputTextControl,
} from "components/forms";
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
          <InputEmailAddress
            labelText="Email Address"
            placeholder="test@example.com"
          />
          <InputPasswordControl labelText="Password" placeholder="****" />
          <ButtonRow>
            <Button label="Submit" purpose="primary" type="submit" />
          </ButtonRow>
        </Form>
      </div>
    </div>
  );
}
