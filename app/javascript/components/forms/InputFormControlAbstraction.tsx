import * as React from "react";

enum InputTypes {
  Text = "text",
  Password = "password",
  Email = "email",
  Number = "number",
  Url = "url",
  Date = "date",
  DatetimeLocal = "datetime-local",
  Month = "month",
  Week = "week",
  Time = "time",
  Search = "search",
  Tel = "tel",
  Checkbox = "checkbox",
  Radio = "radio",
}

interface InputFormControlAbstractionProps {
  placeholder: string;
  initialValue?: string | number | readonly string[];
  onChange?: (newValue: string) => void;
}

interface InputFormControlAbstractionPropsImpl extends InputFormControlAbstractionProps {
  inputType: InputTypes;
}

function InputFormControlAbstraction(props: InputFormControlAbstractionPropsImpl): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    console.log("InputFormControlAbstraction#handleChange", newValue, event);
    if (props.onChange) {
      props.onChange(newValue);
    }
  }

  return (
    <input
      className="mt-1 block w-full rounded"
      type={props.inputType}
      placeholder={props.placeholder}
      value={props.initialValue}
      onChange={handleChange}
    />
  );
}

export { InputTypes, InputFormControlAbstractionProps, InputFormControlAbstraction };
