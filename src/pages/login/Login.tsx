import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { FormEvent, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styles/theme";
import { RouteNames } from "types/routes";
import { firebaseApp } from "utils/firebase/firebaseConfig";
import { ArrowButton } from "../../components/buttons/ArrowButton";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { SignInWith } from "../../components/signInWith/SignInWith";
import { Typography } from "../../components/typography/Typography";
import { FlexWrapper } from "../../components/wrappers/FlexWrapper";
import UserContext from "../../contexts/userContext/userContext";

import backgroundImg from "../../assets/images/background.jpg";
import { Loader } from "components/loader/Loader";

export const Login: React.FC = () => {
  const { findUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [failedLogin, setFailedLogin] = useState<boolean>(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs: {
    id: number;
    name: keyof typeof values;
    type: string;
    placeholder: string;
    label: string;
    autoComplete: string;
  }[] = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter email",
      label: "Email",
      autoComplete: "username",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      autoComplete: "current-password",
    },
  ];

  const auth = getAuth(firebaseApp);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        ).then((userData) => {
          findUser(userData.user.uid);
        });
      })
      .catch((error) => {
        console.log(error);
        setFailedLogin(true);
        setIsLoading(false);
      });
  };

  return (
    <LoginSection isLoading={isLoading}>
      {isLoading ? (
        <Loader />
      ) : (
        <LoginDataBlock>
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
              {failedLogin && (
                <Typography type="smallerTextRegular" color="secondary100">
                  Wrong username or password
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
            <NavLink to={RouteNames.REGISTER}>
              <Typography type="smallerTextSemiBold" color="secondary100">
                Sign up
              </Typography>
            </NavLink>
          </FlexWrapper>
        </LoginDataBlock>
      )}
    </LoginSection>
  );
};

const LoginSection = styled.section<{ isLoading: boolean }>`
  height: ${({ isLoading }) => (isLoading ? "100vh" : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${theme.device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
      url(${backgroundImg});
    background-size: cover;
  }
`;

const LoginDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 35rem;
  gap: 1.5625rem;
  margin: 0 auto;
  padding: 6.25rem 1.875rem 6.25rem 2.5rem;

  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 2rem 0;
    background-color: ${theme.colors.white};
  }
`;

const LoginForm = styled.form`
  display: grid;
  grid-gap: 1rem;
`;
