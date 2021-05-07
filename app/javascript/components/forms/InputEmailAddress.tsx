import * as React from "react";
import { FormControlWrapperProps, FormControlWrapper } from "./FormControlWrapper";
import {
  InputTypes,
  InputFormControlAbstractionProps,
  InputFormControlAbstraction,
} from "./InputFormControlAbstraction";

interface InputEmailAddressProps extends FormControlWrapperProps, InputFormControlAbstractionProps {
  initialValue?: string;
}

function InputEmailAddress(props: InputEmailAddressProps): JSX.Element {
  console.log("InputEmailAddress", props);
  return (
    <FormControlWrapper labelText={props.labelText}>
      <InputFormControlAbstraction
        inputType={InputTypes.Email}
        placeholder={props.placeholder}
        initialValue={props.initialValue}
      />
    </FormControlWrapper>
  );
}

export { InputEmailAddress };
