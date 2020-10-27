import React from "react";
import { SignUpForm, FormRow, FormSubRow } from "./components/SignUpForm";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/Radio";
import { LinkStyled } from "../../components/Link";
import { ErrorLabel } from "../../components/ErrorLabel";
import { CheckBox } from "../../components/Checkbox";
import { ButtonStyled } from "../../components/Button/";
import { countries } from "../../init";
import { List } from "../../components/List";
import { useFormik } from "formik";
import { initialValues, validate, Genders } from "./validator";
import emailIco from "../../img/ico-email.svg";
import passwordIco from "../../img/ico-password.svg";
import { gql, useMutation } from "@apollo/client";

const SIGN_UP = gql`
  mutation SignUp($input: SignupInput!) {
    signup(input: $input) {
      id
      email
    }
  }
`;

export const SignUp: React.FC = () => {
  const validator = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      signUp({ variables: {input: values} });
    },
  });
  const [signUp, { loading, error }] = useMutation(SIGN_UP);
  return (
    <SignUpForm title="Create a new account" onSubmit={validator.handleSubmit}>
      <FormRow>
        <Input
          name="name"
          value={validator.values.name}
          onBlur={validator.handleBlur}
          onChange={validator.handleChange}
          placeholder="Enter your name"
        />
        {validator.touched.name && validator.errors.name && (
          <ErrorLabel text={validator.errors.name} />
        )}
      </FormRow>
      <FormRow>
        <Input
          name="email"
          onBlur={validator.handleBlur}
          onChange={validator.handleChange}
          placeholder="Email"
          icon={passwordIco}
        />
        {validator.touched.email && validator.errors.email && (
          <ErrorLabel text={validator.errors.email} />
        )}
      </FormRow>
      <FormRow>
        <Input
          autoComplete="disabled"
          name="password"
          onBlur={validator.handleBlur}
          onChange={validator.handleChange}
          type="password"
          placeholder="Password"
          icon={emailIco}
        />
        {validator.touched.password && validator.errors.password && (
          <ErrorLabel text={validator.errors.password} />
        )}
      </FormRow>
      <FormRow>
        <List
          onChange={(value) => validator.setFieldValue("country", value)}
          items={countries}
          placeholder="Select country"
        />
        {validator.touched.country && validator.errors.country && (
          <ErrorLabel text={validator.errors.country} />
        )}
      </FormRow>
      <FormSubRow>
        {Object.keys(Genders).map((value, index) =>(
          <RadioButton
            key={index}
            value={Genders.Female}
            name="gender"
            onBlur={validator.handleBlur}
            onChange={validator.handleChange}
          >
            {value}
          </RadioButton>
        ))}
        {validator.touched.gender && validator.errors.gender && (
          <ErrorLabel text={validator.errors.gender} />
        )}
      </FormSubRow>
      <FormSubRow>
        <CheckBox
          name="agreement"
          onBlur={validator.handleBlur}
          onChange={validator.handleChange}
          value={validator.values.agreement}
        >
          <span>Accept</span>
          <LinkStyled href="/terms"> terms </LinkStyled>
          <span> and </span>
          <LinkStyled href="/conditions">conditions</LinkStyled>
        </CheckBox>
        {validator.touched.agreement && validator.errors.agreement && (
          <ErrorLabel text={validator.errors.agreement} />
        )}
      </FormSubRow>
      <FormRow style={{ paddingTop: 16 }}>
        <ButtonStyled disabled={!validator.isValid || !validator.dirty}>
          {!loading && "Sign Up"}
        </ButtonStyled>
        {error && <ErrorLabel text={error.message} />}
      </FormRow>
    </SignUpForm>
  );
};
