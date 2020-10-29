import React, { useState } from "react";
import emailIco from "../../img/ico-email.svg";
import passwordIco from "../../img/ico-password.svg";

import { SignUpForm, FormRow, FormSubRow } from "./components/SignUpForm";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/Radio";
import { Link } from "../../components/Link";
import { ErrorLabel } from "../../components/ErrorLabel";
import { CheckBox } from "../../components/Checkbox";
import { Button } from "../../components/Button/";
import { List } from "../../components/List";
import { initialValues, validate, Genders } from "./validator";
import { countries } from "../../init";
import { SIGN_UP } from "./graphql";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";

export const SignUp: React.FC = () => {
  const [error, setError] = useState("");
  const [signUp, { loading, data }] = useMutation(SIGN_UP);
  const validator = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      const { agreement, ...inputValue } = values;
      signUp({ variables: { input: inputValue } }).catch((e: Error) =>
        setError(e.message)
      );
    },
  });

  return data ? (
    <pre style={{ color: "white" }}>{JSON.stringify(data)}</pre>
  ) : (
    <SignUpForm title="Create a new account" onSubmit={validator.handleSubmit}>
      <FormRow>
        <Input
          name="name"
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
          name="country"
          onBlur={validator.handleBlur}
          onChange={(item) => validator.setFieldValue("country", item.value)}
          items={countries}
          placeholder="Select country"
        />
        {validator.touched.country && validator.errors.country && (
          <ErrorLabel text={validator.errors.country} />
        )}
      </FormRow>
      <FormSubRow>
        {Object.keys(Genders).map((value, index) => (
          <RadioButton
            disabled={loading}
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
          disabled={loading}
          name="agreement"
          onBlur={validator.handleBlur}
          onChange={validator.handleChange}
          value={validator.values.agreement}
        >
          <span>Accept</span>
          <Link disabled={loading} href="/terms"> terms </Link>
          <span> and </span>
          <Link disabled={loading}  href="/conditions">conditions</Link>
        </CheckBox>
        {validator.touched.agreement && validator.errors.agreement && (
          <ErrorLabel text={validator.errors.agreement} />
        )}
      </FormSubRow>
      <FormRow style={{ paddingTop: 16 }}>
        <Button
          type="submit"
          disabled={(!loading && !validator.isValid) || !validator.dirty}
        >
          Sign Up
        </Button>
        {error && <ErrorLabel text={error} />}
      </FormRow>
    </SignUpForm>
  );
};
