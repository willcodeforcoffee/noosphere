import * as React from "react";
import { DeepMap, FieldError } from "react-hook-form";

interface FormErrorProps<TFormValues> {
  message?: string;
  errors?: DeepMap<TFormValues, FieldError>;
}

function FormError<TFormValues>(
  props: FormErrorProps<TFormValues>
): JSX.Element {
  console.log("[FormError]", props);
  const message = props.message ? <div>{props.message}</div> : undefined;

  return (
    <div className="block p-1 border bg-red-300 border-red-900">
      <div className="font-bold">Form Error</div>
      {message}
    </div>
  );
}

export { FormError };
