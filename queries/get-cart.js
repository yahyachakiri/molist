import { gql } from "@apollo/client";

export const GET_CART = gql`
query NewQuery {
  Cart:pageBy(uri: "cart") {
    seo {
      metaDesc
      metaKeywords
      metaRobotsNofollow
      metaRobotsNoindex
      title
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`