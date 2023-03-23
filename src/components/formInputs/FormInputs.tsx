import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

interface FormInputsProps {
  name?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  label?: string;
  pattern?: string;
  required?: boolean;
  // focused?: string;
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
  console.log(focused);

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
        // focused={focused.toString()}
      />
      <span>
        <Typography type="smallerTextRegular" color="secondary100">
          {errorMessage}
        </Typography>
      </span>
    </InputContainerStyled>
  );
};

const InputContainerStyled = styled.div<{ focused: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;

  input {
    width: 100%;
    border: 0.0938rem solid ${() => theme.colors.gray4};
    border-radius: 0.625rem;
    color: ${() => theme.colors.label};
    font-size: 0.6875rem;
    padding: 1.1875rem 0 1.1875rem 1.25rem;
    line-height: 1.0313rem;
    margin-bottom: 1.875rem;
  }

  span {
    display: none;
  }

  ${(focused) =>
    focused &&
    `input:invalid {
    border: 1px solid red;
  }`}

  ${(focused) =>
    focused &&
    `input:invalid ~ span {
    display: block;
  }`}

  input:invalid[focused="true"] ~ span {
    display: block;
  }
`;

// const InputStyled = styled.input<{ focused: string }>`
//   width: 100%;
//   border: 0.0938rem solid ${() => theme.colors.gray4};
//   border-radius: 0.625rem;
//   color: ${() => theme.colors.label};
//   font-size: 0.6875rem;
//   padding: 1.1875rem 0 1.1875rem 1.25rem;
//   line-height: 1.0313rem;
//   margin-bottom: 1.875rem;

//   /* input:invalid[focused="true"] {
//     border: 1px solid red;
//   }

//   input:invalid[focused="true"] ~ span {
//     display: block;
//   } */
// `;
