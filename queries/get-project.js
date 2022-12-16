import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
query NewQuery($slug: String) {
    Project:projectBy(slug: $slug) {
      id
    title
    slug
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
