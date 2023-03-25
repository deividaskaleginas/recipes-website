import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Typography } from "../typography/Typography";

interface FormInputsProps {
  name?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  label?: string;
  pattern?: string;
  required?: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInputs: React.FC<FormInputsProps> = ({
  label,
  errorMessage,
  onChange,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
  };
  return (
    <InputContainerStyled focused={focused}>
      <Typography type="smallTextRegular" color="label">
        {label}
      </Typography>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        // @ts-ignore
        focused={focused.toString()}
      />
      {errorMessage && (
        <span>
          <Typography type="smallerTextRegular" color="secondary100">
            {errorMessage}
          </Typography>
        </span>
      )}
    </InputContainerStyled>
  );
};

const InputContainerStyled = styled.div<{ focused: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  width: 100%;

  input {
    width: 100%;
    border: 0.0938rem solid ${theme.colors.gray4};
    border-radius: 0.625rem;
    color: ${theme.colors.label};
    font-size: 0.6875rem;
    padding: 1.1875rem 0 1.1875rem 1.25rem;
    line-height: 1.0313rem;
  }

  span {
    display: none;
    font-size: 12px;
    padding-bottom: 1rem;
    color: ${theme.colors.secondary100};
  }

  input:invalid[focused="true"] {
    border: 1px solid ${theme.colors.secondary100};
  }
  input:invalid[focused="true"] ~ span {
    display: block;
  }
`;
