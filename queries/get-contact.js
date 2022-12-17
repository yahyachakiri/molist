import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
  query NewQuery {
    Contact: pageBy(uri: "contact") {
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
