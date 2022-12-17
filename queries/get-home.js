import { gql } from "@apollo/client";

export const GET_HOME = gql`
query NewQuery {
  Home:pageBy(uri: "home-page") {
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
  Partners:pageBy(uri: "hash-our-partners") {
    content
  }
  menuItems {
    edges {
      node {
        label
        path
        url
      }
    }
  }
}
`