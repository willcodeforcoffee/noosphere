import * as React from "react";
import { FormControlWrapperProps, FormControlWrapper } from "./FormControlWrapper";
import {
  InputTypes,
  InputFormControlAbstractionProps,
  InputFormControlAbstraction,
} from "./InputFormControlAbstraction";

interface InputTextControlProps extends FormControlWrapperProps, InputFormControlAbstractionProps {
  initialValue?: string;
}

function InputTextControl(props: InputTextControlProps): JSX.Element {
  return (
    <FormControlWrapper labelText={props.labelText}>
      <InputFormControlAbstraction
        inputType={InputTypes.Text}
        placeholder={props.placeholder}
        initialValue={props.initialValue}
      />
    </FormControlWrapper>
  );
}

export { InputTextControl };
