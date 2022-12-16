import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
  query NewQuery {
    Contact: pageBy(uri: "contact") {
      content
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
