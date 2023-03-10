import React, { FormEvent, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowButton } from "../../components/buttons/ArrowButton";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { SignInWith } from "../../components/signInWith/SignInWith";
import { Typography } from "../../components/typography/Typography";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";
import UserContext from "../../contexts/userContext/userContext";

export const Login: React.FC = () => {
  const { findUser, userLoggedIn } = useContext(UserContext);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs: {
    id: number;
    name: keyof typeof values;
    type: string;
    placeholder: string;
    label: string;
  }[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      label: "Username",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
    },
  ];

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    findUser(values.username, values.password);
    userLoggedIn && navigate("/");
  };
  return (
    <FlexWrapper
      flexDirection="column"
      justifyContent="space-around"
      height="100vh"
      padding="6.25rem 1.875rem 6.25rem 2.5rem"
    >
      <FlexWrapper flexDirection="column">
        <Typography type="headerTextBold" color="black">
          Hello,
        </Typography>
        <Typography type="largeTextRegular" color="label">
          Welcome Back!
        </Typography>
      </FlexWrapper>
      <FlexWrapper flexDirection="column" gap="3.875rem">
        <LoginForm onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInputs
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {!userLoggedIn && (
            <Typography type="smallerTextRegular" color="secondary100">
              Wrong username our password
            </Typography>
          )}
          <ArrowButton width="100%">Sign In</ArrowButton>
        </LoginForm>
        <FlexWrapper justifyContent="center">
          <SignInWith>Or Sign in With</SignInWith>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent="center" gap="0.3125rem">
        <Typography type="smallerTextSemiBold" color="black">
          Don't have an account?
        </Typography>
        <NavLink to="/register">
          <Typography type="smallerTextSemiBold" color="secondary100">
            Sign up
          </Typography>
        </NavLink>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const LoginForm = styled.form``;
