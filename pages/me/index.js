import { graphql } from "react-apollo";
import gql from "graphql-tag";

const ME_QUERY = gql`
  query myData {
    me {
      id
    }
  }
`;

const Me = ({ data }) => <div>
  <button>Hola</button>
  <input type="text"/>
  {JSON.stringify(data)}
</div>;

export default graphql(ME_QUERY)(Me);
