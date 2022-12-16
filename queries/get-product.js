import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
query NewQuery($id: ID!) {
    product(id: $id) {
        id
        slug
        name
        image {
          sourceUrl
        }
        description
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
