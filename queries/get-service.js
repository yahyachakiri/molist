import { gql } from "@apollo/client";

export const GET_SERVICE = gql`
query NewQuery($id: ID!) {
    service:serviceBy(id: $id) {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    menuItems {
      edges {
        node {
          label
          url
        }
      }
    }
  }
`;
