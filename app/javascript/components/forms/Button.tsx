import React, { ReactNode } from "react";

type ButtonPurpose = undefined | "primary" | "success" | "danger" | "info" | "link";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  purpose?: ButtonPurpose;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function purposeToColour(purpose: ButtonPurpose): string {
  switch (purpose) {
    case undefined:
    case "primary":
      return "bg-blue-500";

    case "success":
      return "bg-green-500";

    case "danger":
      return "bg-red-600";

    case "info":
      return "bg-teal-400";

    case "link":
      return "bg-white";
  }
}

interface HtmlButtonProps {
  buttonType: "button" | "submit" | "reset";
  classNames: string[];
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function HtmlButton(props: HtmlButtonProps) {
  return (
    <button type={props.buttonType} className={props.classNames.join(" ")} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

function Button(props: ButtonProps): JSX.Element {
  const classNames = ["px-2", "py-3", "rounded", "text-white"];
  classNames.push(purposeToColour(props.purpose));

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (null != props.onClick) {
      props.onClick(event);
    }
  }

  const buttonType = null == props.type ? "button" : props.type;

  return (
    <HtmlButton buttonType={buttonType} classNames={classNames} onClick={handleClick}>
      {props.label}
    </HtmlButton>
  );
}

export { Button };
