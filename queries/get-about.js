import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
  query NewQuery {
    Home: pageBy(uri: "home-page") {
      content
    }
    About: pageBy(uri: "about") {
      content
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
    Partners: pageBy(uri: "hash-our-partners") {
      content
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
