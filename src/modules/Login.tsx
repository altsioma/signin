import React from "react";
import { LoginForm, FormRow } from "../components/LoginForm/LoginForm";
import { Input } from "../components/Input";
import { RadioButton } from "../components/Radio";
import { LinkStyled } from "../components/Link";
import { ErrorLabel } from "../components/ErrorLabel";
import { CheckBox } from "../components/Checkbox";
import { FormSubRow } from "../components/LoginForm/LoginForm";
import { ButtonStyled } from "../components/Button/";
import { countries } from "../init";
import { List } from "../components/List";
import emailIco from "../img/ico-email.svg";
import passwordIco from "../img/ico-password.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
const genders = ["Male", "Female"];

export const Login: React.FC = () => {
  const validator = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      country: "",
      gender: null,
      agreement: "false",
    },
    validationSchema: Yup.object({
      name: Yup.string().required().matches(/^[a-zA-Z]+$/, "Please enter a valid name"),
      email: Yup.string().required().email("Please enter a valid email address"),
      password: Yup.string().required().min(6, "Password must contain at least 6 symbols"),
      country: Yup.string().required("You must select your country"),
      gender: Yup.string().oneOf(genders, "You must select the gender"),
      agreement: Yup.boolean().oneOf([true], "You must accept the policies"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <LoginForm title="Create a new account" onSubmit={validator.handleSubmit}>
      <FormRow>
        <Input
          name="name"
          value={validator.values.name}
          onBlur={validator.handleBlur}
          onChange={validator.handleChange}
          placeholder="Enter your name"
        />
        {validator.touched.email && validator.errors.name && (
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
        {validator.errors.country && (
          <ErrorLabel text={validator.errors.country} />
        )}
      </FormRow>
      <FormSubRow>
        {genders.map((value, index) => (
          <RadioButton
            key={index}
            value={value}
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
          Sign Up
        </ButtonStyled>
      </FormRow>
    </LoginForm>
  );
};
