import View from "./view";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { withHandlers, withState } from "recompose";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const LoginBox = (props) => (
  <div>
    <View onLogin={props.onSignUp} />
  </div>
);

const GET_CODE = gql`
  mutation SignUpIn($email: String!) {
    signUpIn(email: $email) {
      message
    }
  }
`;

const AUTH = gql`
  mutation Auth($email: String!, $code: String!) {
    auth(email: $email, code: $code) {
      token
    }
  }
`;

const EnhacedLoginBox = compose(
  withState("codeSent", "setCodeResponse", null),
  withState("authOk", "setAuthOk", null),
  graphql(GET_CODE, { name: "getCode" }),
  graphql(AUTH, { name: "auth" }),
  withHandlers({
    onSignUp: ({auth, getCode}) => ({code, email}) => {
      if(code && email){
        return auth({variables: {code, email}}).then(({data})=>{
          cookies.set("token", data.auth.token)
        })
      }else if(email){
        return getCode({variables: {email}}).then(r=>console.log(r))
      }
    }
  }),
)(LoginBox);

export default EnhacedLoginBox