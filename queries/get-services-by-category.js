import { gql } from "@apollo/client";

export const GET_SERVICES_BY_CATEGORY = gql`
query NewQuery($Name: String!) {
  services(where: {categoryName: $Name}) {
    nodes {
      title
      content
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
    }
  }
}
`