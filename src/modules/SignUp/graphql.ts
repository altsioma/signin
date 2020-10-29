import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($input: SignupInput!) {
    signup(input: $input) {
      id
      email
    }
  }
`;