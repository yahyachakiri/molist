import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
query NewQuery {
    pageBy(uri: "services") {
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      category(id: "dGVybTo4Ng==\"") {
        children {
        nodes {
            name
            slug
        }
        }
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
`