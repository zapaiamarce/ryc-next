require('isomorphic-fetch');
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
  uri: "http://localhost:60000/simple/v1/cjs2n1ytc00140176gteezdte"
});

export default ({children}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)
