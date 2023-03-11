import React, { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import UserContext from "../../contexts/userContext/userContext";

import userAvatar from "../../assets/images/userAvatar.png";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";
import { Typography } from "../../components/typography/Typography";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { ArrowButton } from "../../components/buttons/ArrowButton";
import { SignInWith } from "../../components/signInWith/SignInWith";
import { NavLink } from "react-router-dom";

export const Register: React.FC = () => {
  const { findUser, userLoggedIn } = useContext(UserContext);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs: {
    id: number;
    type: string;
    name: keyof typeof values;
    placeholder: string;
    errorMessage: string;
    label: string;
    pattern?: string;
    required: boolean;
  }[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      label: "Username",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createUser = () => {
    const userData = {
      id: uniqid(),
      status: "user",
      username: values.username,
      email: values.email,
      avatar: userAvatar,
      password: values.password,
      confirmPassword: values.confirmPassword,
      favorites: [],
    };

    fetch("http://localhost:3001/users/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    navigate("/");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    findUser(values.username, values.password);
    !userLoggedIn && createUser();
    console.log(userLoggedIn);
  };

  return (
    <FlexWrapper
      flexDirection="column"
      justifyContent="space-around"
      height="100vh"
      padding="6.25rem 1.875rem 6.25rem 2.5rem"
    >
      <FlexWrapper flexDirection="column">
        <Typography type="largeTextBold" color="black">
          Create an account
        </Typography>
        <Typography type="smallTextBold" color="label">
          Let's help you set up your account, <br />
          it won't take long.
        </Typography>
      </FlexWrapper>
      <FlexWrapper>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInputs
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {userLoggedIn && (
            <Typography type="smallTextRegular" color="secondary100">
              User with this username already exists
            </Typography>
          )}
          <ArrowButton onClick={() => console.log("submit")} width="100%">
            Sign Up
          </ArrowButton>
        </form>
      </FlexWrapper>
      <FlexWrapper justifyContent="center">
        <SignInWith>Or Sign up With</SignInWith>
      </FlexWrapper>
      <FlexWrapper justifyContent="center" gap="0.3125rem">
        <Typography type="smallerTextSemiBold" color="black">
          Already a member?
        </Typography>
        <NavLink to="/login">
          <Typography type="smallerTextSemiBold" color="secondary100">
            Sign in
          </Typography>
        </NavLink>
      </FlexWrapper>
    </FlexWrapper>
  );
};
