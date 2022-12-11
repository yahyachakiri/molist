import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
  query NewQuery {
    Home: pageBy(uri: "home-page") {
      content
    }
    About: pageBy(uri: "about") {
      content
    }
    Partners: pageBy(uri: "hash-our-partners") {
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
