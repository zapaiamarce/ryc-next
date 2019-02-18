require("isomorphic-fetch");
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const client = new ApolloClient({
  uri: "http://localhost:60000/simple/v1/cjs2n1ytc00140176gteezdte",
  request(operation) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${cookies.get("token")}`
      }
    });
  }
});

export default ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
