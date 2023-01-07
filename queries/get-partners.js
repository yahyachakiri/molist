import { gql } from "@apollo/client";

export const GET_PARTNERS = gql`
query NewQuery {
partners {
    nodes {
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`;
