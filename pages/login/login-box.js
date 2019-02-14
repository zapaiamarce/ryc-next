import Login from "components/login";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const GET_CODE = gql`
  mutation SignUpIn($email: String!) {
    signUpIn(email: $email) {
      message
    }
  }
`;

export default () => (
  <Mutation mutation={GET_CODE}>
    {(signUp, { data }) => (
      <div>
        <h1>{JSON.stringify(data)}</h1>
        <Login onLogin={variables => signUp({ variables })} />
      </div>
    )}
  </Mutation>
);
