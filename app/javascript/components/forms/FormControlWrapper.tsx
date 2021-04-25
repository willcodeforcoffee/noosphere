import * as React from "react";
import { FormRow } from "./FormRow";

interface FormControlWrapperProps {
  labelText: string;
}

interface FormControlWrapperPropsImpl extends FormControlWrapperProps {
  children: JSX.Element;
}

function FormControlWrapper(props: FormControlWrapperPropsImpl): JSX.Element {
  return (
    <FormRow>
      <label>
        <span>{props.labelText}:</span>
        {props.children}
      </label>
    </FormRow>
  );
}

export { FormControlWrapperProps, FormControlWrapper };
