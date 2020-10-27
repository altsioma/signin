interface FormValues {
  name: string;
  email: string;
  password: string;
  country: string;
  gender: string | undefined;
  agreement: string | undefined;
}
export const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  country: "",
  gender: undefined,
  agreement: undefined,
};

export enum Genders {
  Male="MALE",
  Female="FEMALE"
}

export const validate = (values: FormValues) => {
  const errors = {
    name: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    agreement: "",
  };
  if (!/^[a-zA-Z]+$/.test(values.name)) {
    errors.name = "Please enter a valid name";
  }
  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (values.password.length < 6) {
    errors.password = "Password must contain at least 6 symbols";
  }
  if (values.country.length === 0) {
    errors.country = "You must select your country";
  }
  if (!values.gender) {
    errors.gender = "You must select the gender";
  }
  if (!values.agreement) {
    errors.agreement = "You must accept the policies";
  }
  if (Object.values(errors).some((k)=>k!=="")) {
    return errors;
  }
};
