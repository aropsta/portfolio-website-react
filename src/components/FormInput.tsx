import React, { useState } from "react";
import "../styles/form-input.scss";

export interface FormInputProps extends React.ComponentPropsWithoutRef<any> {
  specialProp?: string;
}

const FormInput = (props: FormInputProps) => {
  const [focused, setFocused] = useState(false);
  const { specialProp, label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.FocusEvent) => {
    setFocused(true);
  };

  const inputOrTextField = (s: string) => {
    switch (s) {
      case "textarea": {
        return (
          <textarea
            cols={2}
            rows={4}
            {...inputProps}
            onBlur={handleFocus}
            //@ts-ignore
            focused={focused.toString()}
            onChange={onChange}
          />
        );
      }
      default: {
        return (
          <input
            className="input"
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            //@ts-ignore
            focused={focused.toString()}
          />
        );
      }
    }
  };
  return (
    <div className="input-item">
      <label className="input-label">
        {label}
        {inputProps.required && (
          <abbr title={`${label} is required`} aria-label="required">
            *
          </abbr>
        )}
      </label>
      {inputOrTextField(inputProps.type)}
      <span className="error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
