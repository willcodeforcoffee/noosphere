import * as React from "react";
import { FieldRow } from "./FieldRow";

interface FormControlWrapperProps {
  labelText: string;
}

interface FormControlWrapperPropsImpl extends FormControlWrapperProps {
  children: JSX.Element;
}

function FormControlWrapper(props: FormControlWrapperPropsImpl): JSX.Element {
  return (
    <FieldRow>
      <label>{props.labelText}:</label>
      {props.children}
    </FieldRow>
  );
}

export { FormControlWrapperProps, FormControlWrapper };
