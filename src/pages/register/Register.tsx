import React, { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FlexWrapper } from "../../components/wrappers/FlexWrapper";
import { Typography } from "../../components/typography/Typography";
import { FormInputs } from "../../components/formInputs/FormInputs";
import { ArrowButton } from "../../components/buttons/ArrowButton";
import { SignInWith } from "../../components/signInWith/SignInWith";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp } from "utils/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "utils/firebase/firebaseConfig";
import { Collections } from "types/collections";
import { RouteNames } from "types/routes";
import styled from "styled-components";
import { theme } from "styles/theme";
import { Loader } from "../../components/loader/Loader";

import backgroundImg from "../../assets/images/background.jpg";

export const Register: React.FC = () => {
  const [userExist, setUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      type: "password",
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

  const auth = getAuth(firebaseApp);

  const collectionRef = collection(dataBase, Collections.USERS);

  const createUser = async () => {
    try {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userData) => {
          const userDetails = {
            uid: userData.user.uid,
            favorites: [],
            votes: [],
            username: values.username,
            avatar: "",
          };
          addDoc(collectionRef, userDetails);
          setIsLoading(false);
          navigate(RouteNames.HOME);
        })
        .catch((error) => {
          setIsLoading(false);
          setUserExist(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    createUser();
  };

  return (
    <RegisterSection isLoading={isLoading}>
      {isLoading ? (
        <Loader />
      ) : (
        <RegisterDataBlock>
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
            <RegisterForm onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInputs
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              {userExist && (
                <Typography type="smallTextRegular" color="secondary100">
                  User with this email already exists
                </Typography>
              )}
              <ArrowButton onClick={() => console.log("submit")} width="100%">
                Sign Up
              </ArrowButton>
            </RegisterForm>
          </FlexWrapper>
          <FlexWrapper margin="0.5rem 0" justifyContent="center">
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
        </RegisterDataBlock>
      )}
    </RegisterSection>
  );
};

const RegisterSection = styled.section<{ isLoading: boolean }>`
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

const RegisterDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 35rem;
  gap: 1.5625rem;
  padding: 2.25rem 1.875rem 2.25rem 2.5rem;

  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.colors.white};
    margin: 2rem 0;
  }
`;

const RegisterForm = styled.form`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
`;
