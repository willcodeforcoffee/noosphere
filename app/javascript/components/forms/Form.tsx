import React, { FormEvent, ReactNode } from "react";

interface FormProps {
  name: string;
  title?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode | ReactNode[];
}

const FORM_CLASSNAMES = [
  "mb-0",
  "p-1",
  "bg-gray-100",
  "box-border",
  "border",
  "rounded",
  "border-gray-500",
  "shadow-sm",
].join(" ");

function Form(props: FormProps): JSX.Element {
  const childControls: ReactNode[] = [];
  if (props.title) {
    childControls.unshift(
      <legend key="legend" className="text-lg font-bold block pt-1">
        {props.title}
      </legend>
    );
  }

  if (props.children instanceof Array) {
    props.children.forEach((child) => {
      childControls.push(child);
    });
  } else {
    childControls.push(props.children);
  }

  const internalOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (props.onSubmit) {
      props.onSubmit(event);
    }
  };

  return (
    <form onSubmit={internalOnSubmit} name={props.name} className={FORM_CLASSNAMES}>
      {childControls}
    </form>
  );
}

export { Form };
