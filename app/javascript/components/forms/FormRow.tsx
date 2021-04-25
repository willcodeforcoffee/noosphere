import * as React from "react";

interface FormRowProps {
  children: JSX.Element;
}

function FormRow(props: FormRowProps): JSX.Element {
  return <div className="block pt-1">{props.children}</div>;
}

export { FormRow };
