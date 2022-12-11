import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
query NewQuery($slug: String) {
    Project:postBy(slug: $slug) {
      id
      title
      slug
      content
    }
    menuItems {
      edges {
        node {
          label
          path
        }
      }
    }
  }
`;
