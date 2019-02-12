import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export default ({children}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)
