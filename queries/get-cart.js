import { gql } from "@apollo/client";

export const GET_CART = gql`
query NewQuery {
  Cart:pageBy(uri: "cart") {
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`